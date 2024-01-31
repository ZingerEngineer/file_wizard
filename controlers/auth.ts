import { Request, Response } from 'express'
import { authValidation } from '../actions/auth'
const auth = async (req: Request, res: Response) => {
  try {
    const internal_token = req.headers['internal_token']

    if (typeof internal_token != 'string') {
      res.status(401).json('Token was not found')
      return
    }
    console.log(internal_token)
    const validationValue = await authValidation(internal_token)
    validationValue
      ? res.status(200).json('Welcome.')
      : res.status(401).json('Access denied.')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      console.dir(error)
    }
    console.log('Validation failed.')
  }
}

export default auth
