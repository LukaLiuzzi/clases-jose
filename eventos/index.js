// EVENTOS
// addEventListener - removeEventListener
// onclick - ondblclick - onchange

const boton = document.querySelector("button")
// No es recomendable usar onclick
// boton.onclick = () => {
//   console.log("click desde onclick")
// }

// addEventListener - Recomendable
boton.addEventListener("click", (evento) => {
  document.body.style.backgroundColor = "blue"
})

// Eventos mas comunes
// mouse - teclado - change - input - submit
// mouse: click - dblclick - mouseenter - mouseleave - mousemove - mouseover - mouseout
// teclado: keydown - keyup - keypress
// form: submit - change - input
// window: resize - scroll - load - DOMContentLoaded

document.body.addEventListener("keydown", (evento) => {
  console.log(evento)
  console.log(`Apretaste la tecla ${evento.key}`)
})
