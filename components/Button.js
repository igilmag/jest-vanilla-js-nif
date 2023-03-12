export class Button {
  #_button = null
  constructor (textValue = 'Púlsame') {
    this.#_button = document.createElement('button')
    this.#_button.innerHTML = textValue
  }

  get button () {
    return this.#_button
  }

  setInnerHTML (textValue) {
    this.#_button.innerHTML = textValue
  }

  handleClick (callback = () => {}) {
    this.#_button.addEventListener('click', callback)
  }
}
