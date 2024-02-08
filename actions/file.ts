import { writeFile, readFile, readdir } from 'node:fs'
import { lookup, charset } from 'mime-types'
import { deflate, inflate } from 'node:zlib'
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
  cb: (isSuccessful: number, file: Buffer | null | string) => void
) => {
  let isSuccessful = 0
  let file: Buffer | null | string = null
  readdir('./uploads', (readDirErr, readDirData) => {
    if (readDirErr) {
      console.log({ message: 'Error reading directory.' })
      cb(isSuccessful, file)
    }
    const fileName = readDirData.filter((f) => f.includes(fileNumber))[0]
    let fileType = lookup(fileName)
    let fileCharset = charset(fileName)
    if (!fileType) {
      console.log({ message: 'Error happened', cause: 'Unknown file type.' })
      cb(isSuccessful, file)
      return
    }
    fileType = fileType.split('/')[0]
    console.log(fileName, fileType, fileCharset)

    if (fileType === 'text') {
      if (!fileCharset) {
        fileCharset = 'utf8'
      }
      readFile(`./uploads/${fileName}`, 'utf8', (readFileErr, readFileData) => {
        if (readFileErr) {
          isSuccessful = 0
          console.log('Error reading file.')
          cb(isSuccessful, null)
        }
        isSuccessful = 1
        file = readFileData
        cb(isSuccessful, file)
      })
    }
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
