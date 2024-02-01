import fs from 'fs'

const uploadFile = (buffer: Buffer, fileName: string, extension: string) => {
  let isSuccessful = 1

  fs.writeFile(`./uploads/${fileName}.${extension}`, buffer, (err) => {
    if (err) {
      isSuccessful = 0
      console.log(err)
    }
  })

  console.log(isSuccessful)
  return isSuccessful
}
const writeFile = () => {}
const readFile = () => {}
export { uploadFile }
