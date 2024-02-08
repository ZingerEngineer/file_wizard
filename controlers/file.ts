import { Request, Response } from 'express'
import { uploadFile, getFile } from '../actions/file'
import mime from 'mime-types'

const uploadFileController = (req: Request, res: Response) => {
  if (!req.file) {
    console.log({ message: 'Error occured.', cause: 'Missing the file.' })
    res.status(400).redirect('/')
    return
  }
  const reqBuffer = req.file.buffer
  const extension = mime.extension(req.file.mimetype)
  const fileName = `file_${Date.now()}`

  if (!extension) {
    console.log({ message: 'Error occured.', cause: 'Unsupported extension.' })
    res.status(400).redirect('/')
    return
  }
  uploadFile(reqBuffer, fileName, extension, (isSuccessful, fileURL) => {
    if (!isSuccessful && !fileURL) {
      console.log({
        message: 'Error occured.',
        cause: 'Empty upload results.'
      })
      return res.status(400).redirect('/')
    }

    if (!fileURL) {
      console.log({
        message: 'Error occured.',
        cause: 'Empty file url.',
        fileURL
      })
      return res.status(400).redirect('/')
    }
    isSuccessful
      ? res
          .setHeader('fileURL', fileURL)
          .status(200)
          .json({ message: 'Uploaded file successfully.', fileURL })
      : res.status(400).json('Upload failed.')
  })
}

const getFileController = (req: Request, res: Response) => {
  const fileNumber = req.query['file']
  if (typeof fileNumber !== 'string') {
    return res.status(400).redirect('/')
  }
  getFile(fileNumber, (isSuccessful, file) => {
    isSuccessful
      ? res.status(200).json({ isSuccessful, file })
      : res.status(400).redirect('/')
  })
}

export { uploadFileController, getFileController }
