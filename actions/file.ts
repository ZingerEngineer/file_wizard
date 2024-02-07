import { writeFile, readFile, readdir, Dirent } from 'node:fs'
import { getOneSearchParam } from '../utils/getSearchParams'

const uploadFile = (
  buffer: Buffer,
  fileName: string,
  extension: string,
  cb: (isSuccessful: number, fileURL: string | null) => void
) => {
  let isSuccessful = 0
  let fileURL: string | null = null

  writeFile(`./uploads/${fileName}.${extension}`, buffer, (err) => {
    if (err) {
      console.log({
        message: err.message,
        code: err.code,
        cause: 'Write file was unsuccessful.'
      })
      cb(isSuccessful, fileURL)
    }
    isSuccessful = 1
    fileURL = new URL(
      `http://localhost:3001/file/file?file=${fileName.split('_')[1]}`
    ).href
    cb(isSuccessful, fileURL)
  })
}

const getFile = (
  fileNumber: string,
  cb: (isSuccessful: number, file: Buffer | null) => void
) => {
  let isSuccessful = 0
  let file: Buffer | null = null
  readdir('./uploads', (readDirErr, readDirData) => {
    if (readDirErr) {
      console.log({ message: 'Error reading directory.' })
      cb(isSuccessful, file)
    }
    const fileName = readDirData.filter((f) => f.includes(fileNumber))[0]
    readFile(`./uploads/${fileName}`, (readFileErr, readFileData) => {
      if (readFileErr) {
        isSuccessful = 0
        console.log('Error reading file.')
        cb(isSuccessful, null)
      }
      isSuccessful = 1
      file = readFileData
      cb(isSuccessful, file)
    })
  })
}
const wr = () => {}
const readFile2 = () => {}
export { uploadFile, getFile }
