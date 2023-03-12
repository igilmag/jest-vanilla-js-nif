import '@picocss/pico'
import { appNIF } from './app-nif'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Validar NIF</h1>
    <article>
    <p>Para calcular la letra, cogeremos el resto de dividir nuestro DNI entre 23, el resultado debe estar entre 0 y 22.</p>
    <p>
      Haz un método donde según el resultado de la anterior formula busque en un array de caracteres la posición que corresponda a la letra.</p>
      <p>Por ejemplo si escribimos: 32670089</br>
      nos devolverá: 32670089S
      <img src="/letra-dni.jpg" alt="">
    </p>
    
    <div class="grid">
        <input type="text" name="nif" id="nif">
    </div>
  </article>
  </div>
`
appNIF()
