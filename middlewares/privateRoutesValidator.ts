import { Request, Response, NextFunction } from 'express'
import tokenSchema from '../schemas/token'
import dotenv from 'dotenv'
dotenv.config()

const internal_token = process.env.INTERNALTOKEN

const tokenValidation = async (token: string) => {
  const isValid = await tokenSchema.validate(token)
  return isValid && token === internal_token ? 1 : 0
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const internal_token = req.headers['internal_token']

    if (typeof internal_token != 'string') {
      res.status(401).json('Token was not found')
      return
    }
    const validationValue = await tokenValidation(internal_token)
    validationValue
      ? next()
      : res
          .status(401)
          .json('Access denied.')
          .redirect('http://localhost:3001/')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      console.dir(error)
    }
    console.log('Validation failed.')
  }
}

export default auth
