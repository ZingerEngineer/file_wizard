import tokenSchema from '../schemas/token'
import dotenv from 'dotenv'
dotenv.config()

const internal_token = process.env.INTERNALTOKEN

const authValidation = async (token: string) => {
  const isValid = await tokenSchema.validate(token)
  return isValid && token === internal_token ? 1 : 0
}

export { authValidation }
