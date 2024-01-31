import { Response, Request } from 'express'

const helloWorld = (req: Request, res: Response) => {
  res.json({
    message: 'Hello World.'
  })
}

export default helloWorld
