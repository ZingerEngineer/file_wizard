import express from 'express'
import auth from '../controlers/auth'
const privateRoute = express.Router()

privateRoute.get('/', auth)
export default privateRoute
