import express, { Request, Response } from 'express'

const publicRoute = express.Router()

publicRoute.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World.'
  })
})

export default publicRoute
