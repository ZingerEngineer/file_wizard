const getOneSearchParam = (incomingURL: string) => {
  try {
    const searchParamArray = new URL(incomingURL).searchParams
      .toString()
      .split('=')
    const paramObject = { [searchParamArray[0]]: searchParamArray[1] }
    return paramObject
  } catch (error) {
    console.log({
      message: 'Invalid search param.'
    })
    return
  }
}

const getSearchParams = (incomingURL: string) => {
  let searchParamsArray: object[] = []
  try {
    const searchParams = new URL(incomingURL).searchParams.forEach(
      (key, value) => {
        searchParamsArray.push({
          [key]: value
        })
      }
    )
    return searchParamsArray
  } catch (error) {
    console.log({
      message: 'Invalid search param.'
    })
    return
  }
}

export { getOneSearchParam, getSearchParams }
