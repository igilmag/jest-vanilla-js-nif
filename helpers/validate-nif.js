/**
 * Validate a NIF
 * @param {string} nif
 */
export function isValidatedNIF (nif) {
  if (!nif) {
    throw new Error('Argument not found')
  }
  if (typeof nif !== 'string') {
    throw new Error('Argument must be a string')
  }

  const validNIFRegex = /^[\d]{8}-?[a-z]$/i
  if (!validNIFRegex.test(nif)) {
    throw new Error(`"${nif}". Not valid format`)
  }

  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE'
  const calculatedLetter = letters[Number(nif.substring(0, 8)) % 23]
  const lastLetter = nif.substring(nif.length - 1).toLocaleUpperCase()
  return calculatedLetter === lastLetter
}
