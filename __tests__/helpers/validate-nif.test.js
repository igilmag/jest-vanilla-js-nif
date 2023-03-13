/* eslint-disable no-undef */
import { isValidatedNIF } from '../../helpers/validate-nif'

describe('isValidatedNIF tests', () => {
  test('should give an error when no argumens are passed', () => {
    const callback = () => {
      isValidatedNIF()
    }
    expect(callback).toThrow()
  })

  test('should give an error when no string argumen is passed', () => {
    const callback = () => {
      isValidatedNIF(1)
    }
    expect(callback).toThrow()
  })

  test('The string should dont have eight decimal digits', () => {
    const callback = () => {
      isValidatedNIF('32670089')
    }
    expect(callback).toThrow('Not valid format')
  })
  test('NOT Validated NIF', () => {
    const isValidLetter = isValidatedNIF('32670089T')
    expect(isValidLetter).toStrictEqual(expect.any(Boolean))
    expect(isValidLetter).toBeFalsy()
  })
  test('Validated NIF', () => {
    const isValidLetter = isValidatedNIF('32670089s')
    expect(isValidLetter).toStrictEqual(expect.any(Boolean))
    expect(isValidLetter).toBeTruthy()
  })
})
