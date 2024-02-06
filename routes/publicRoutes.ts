import express, { Request, Response } from 'express'
import helloWorld from './helloWorldRouter'
const publicRoute = express.Router()

publicRoute.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World.'
  })
})

publicRoute.use('/hello', helloWorld)
export default publicRoute
