import { Request, Response } from 'express'
import { uploadFile } from '../actions/file'
const uploadFileControler = (req: Request, res: Response) => {
  const isSuccessful = uploadFile()
  isSuccessful
    ? res.status(200).json('Uploaded file successfully.')
    : res.status(400).json('Upload failed.')
}

export { uploadFileControler }
