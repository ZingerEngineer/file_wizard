import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import router from './routes/index'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

process.on('uncaughtException', (err) => {
  console.log({
    message: 'Error happened.',
    type: 'Uncaught exception.',
    error: err
  })
})
const app: Express = express()
const port = process.env.PORT || 3000
const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,PATCH,DELETE,HEAD',
  exposedHeaders: '*'
}
export const BaseURL = `http://localhost:${port}`

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome')
})
app.use('/', router)

app.listen(port, () => {
  console.log(`[server]: Server is running at ${BaseURL}`)
})
