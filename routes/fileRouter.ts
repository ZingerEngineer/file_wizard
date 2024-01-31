import express from 'express'
import { uploadFileControler } from '../controlers/file'
const fileRouter = express.Router()

fileRouter.post('/up_file', uploadFileControler)

export default fileRouter
