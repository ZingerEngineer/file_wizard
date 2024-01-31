import express from 'express'
import { uploadFile } from '../controlers/file'
const fileRouter = express.Router()

fileRouter.post('/up_file', uploadFile)
