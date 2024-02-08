import express from 'express'
import { uploadFileController, getFileController } from '../controlers/file'
import multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({
  dest: 'uploads/',
  storage: storage,
  fileFilter: (req, file, cb) => {
    let currentMimeType = file.mimetype
    if (
      currentMimeType.split('/')[0] === 'image' ||
      currentMimeType.split('/')[0] === 'audio' ||
      currentMimeType.split('/')[0] === 'video' ||
      currentMimeType.split('/')[0] === 'text'
    ) {
      cb(null, true)
    }
    cb(null, false)
  }
})
const fileRouter = express.Router()

fileRouter.post('/up_file', upload.single('File'), uploadFileController)
fileRouter.get('/file', getFileController)

export default fileRouter
