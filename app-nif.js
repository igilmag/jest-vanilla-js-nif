import Confetti from 'js-confetti'
import { Button } from './components/Button'
import { Dialog } from './components/Dialog'
import { isValidatedNIF } from './helpers/validate-nif'

export function appNIF () {
  const button = new Button('NIF')
  const dialog = new Dialog()

  button.handleClick(() => {
    try {
      if (isValidatedNIF(document.querySelector('#nif').value)) {
        const jsConfetti = new Confetti()
        jsConfetti.addConfetti()
      } else throw new Error('NIF no válido')
    } catch (error) {
      dialog.setMessage(error.message)
      dialog.open()
    }
  })

  document.querySelector('.container').append(dialog.diaglog)
  document.querySelector('.grid')
    .append(button.button)
}
