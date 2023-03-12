export class Dialog {
  #_dialog = null
  constructor () {
    this.#_dialog = document.createElement('dialog')
    this.#_dialog.innerHTML = `
    <dialog open id="dialog">
      <article>
        <header>
          <a href="#close" aria-label="Close" class="close"></a>
          Mensajes de errores
        </header>
        <p id="dialog-message">
        Nunc nec ligula a tortor sollicitudin dictum in vel enim. Quisque facilisis turpis vel eros dictum aliquam et nec turpis. Sed eleifend a dui nec ullamcorper. Praesent vehicula lacus ac justo accumsan ullamcorper.
        </p>
      </article>
    </dialog>
    `
    this.#_dialog.querySelector('.close').addEventListener('click', e => {
      e.preventDefault()
      this.close()
    })
  }

  get diaglog () {
    return this.#_dialog
  }

  setMessage (textValue = 'Mensaje') {
    document.getElementById('dialog-message').innerHTML = textValue
  }

  open () {
    this.#_dialog.setAttribute('open', true)
  }

  close () {
    this.#_dialog.removeAttribute('open')
  }
}
