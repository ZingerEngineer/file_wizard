import fs from 'fs'

const uploadFile = () => {
  let fileBuffer: null | Buffer = null
  let isSuccessful = 1

  fs.readFile('C:/Users/ramye/Desktop/downloade.png', (err, data) => {
    if (err) {
      isSuccessful = 0
      console.log(err)
    }
    fileBuffer = data
    console.log('File is ready.')

    fs.writeFile(`file.png`, fileBuffer, (err) => {
      if (err) {
        isSuccessful = 0
        console.log(err)
      }
    })
  })

  return isSuccessful
}
const writeFile = () => {}
const readFile = () => {}
export { uploadFile }
