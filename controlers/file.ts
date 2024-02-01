import { Request, Response } from 'express'
import { uploadFile } from '../actions/file'
import mime from 'mime-types'

const uploadFileControler = (req: Request, res: Response) => {
  if (!req.file) {
    throw new Error('Error happened.')
  }
  const reqBuffer = req.file.buffer
  const extension = mime.extension(req.file.mimetype)
  const fileName = `file_${Date.now()}`

  if (!extension) throw new Error('Unsupported file type.')
  const isSuccessful = uploadFile(reqBuffer, fileName, extension)
  isSuccessful
    ? res.status(200).json('Uploaded file successfully.')
    : res.status(400).json('Upload failed.')
}

export { uploadFileControler }
