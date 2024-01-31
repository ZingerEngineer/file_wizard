import express from 'express'
import helloWorld from '../controlers/helloWorld'
const helloWorldRouter = express.Router()

helloWorldRouter.get('/hello', helloWorld)
export default helloWorldRouter
