import express from 'express'
import helloWorldRouter from './helloWorldRouter'

const publicRoute = express.Router()

publicRoute.use('/', helloWorldRouter)

export default publicRoute
