import express from 'express'
import helloWorld from '../controlers/helloWorld'
import auth from '../middlewares/privateRoutesValidator'
const privateRoute = express.Router()

privateRoute.get('/hello_p', helloWorld)
export default privateRoute
