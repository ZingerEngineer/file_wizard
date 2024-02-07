import { getSearchParams, getOneSearchParam } from './getSearchParams'

describe('testing util functions', () => {
  test('Query params testing...', () => {
    expect(
      getOneSearchParam('http://localhost:3000/file?file=1231312321')
    ).toEqual({ file: '1231312321' })
  })
})
