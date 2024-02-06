import { writeFile } from 'node:fs'
import { Response } from 'express'

const uploadFileCallback = () => {}

const uploadFile = (
  buffer: Buffer,
  fileName: string,
  extension: string,
  cb: (isSuccessful: number, fileURL: string | null) => void
) => {
  let isSuccessful = 1
  let fileURL: string | null = null

  writeFile(`./uploads/${fileName}.${extension}`, buffer, (err) => {
    if (err) {
      isSuccessful = 0
      console.log({
        message: err.message,
        code: err.code,
        cause: 'Write file was unsuccessful.'
      })
    }
    fileURL = new URL(
      `http://localhost:3001/file?file:${fileName.split('_')[1]}`
    ).href
    cb(isSuccessful, fileURL)
  })
}

const getFileFromURL = (URL: string) => {}
const wr = () => {}
const readFile = () => {}
export { uploadFile }
