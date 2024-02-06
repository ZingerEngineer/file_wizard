import express from 'express'
import { uploadFileControler } from '../controlers/file'
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

fileRouter.post('/up_file', upload.single('File'), uploadFileControler)
fileRouter.get('/file')
export default fileRouter
