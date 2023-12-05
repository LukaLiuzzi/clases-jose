// EVENTOS
// addEventListener - removeEventListener
// onclick - ondblclick - onchange

const boton = document.querySelector("button")
// No es recomendable usar onclick
// boton.onclick = () => {
//   console.log("click desde onclick")
// }

// addEventListener - Recomendable
// boton.addEventListener("click", (evento) => {
//   document.body.style.backgroundColor = "blue"
// })

// Eventos mas comunes
// mouse - teclado - change - input - submit
// mouse: click - dblclick - mouseenter - mouseleave - mousemove - mouseover - mouseout
// teclado: keydown - keyup - keypress
// form: submit - change - input
// window: resize - scroll - load - DOMContentLoaded

// document.body.addEventListener("keydown", (evento) => {
//   console.log(evento)
//   console.log(`Apretaste la tecla ${evento.key}`)
// })

// const div = document.querySelector("div")

// div.style.width = "500px"
// div.style.height = "500px"
// div.style.backgroundColor = "red"

// div.addEventListener("mouseenter", (e) => {
//   console.log(e)
//   console.log("ENTRASTE AL DIV")
// })
// div.addEventListener("mouseleave", (e) => {
//   console.log(e)
//   console.log("SALISTE DEL DIV")
// })

// document.body.style.height = "100vh"

// document.body.addEventListener("mousemove", (e) => {
//   // console.log(e)
//   console.log(`X: ${e.clientX} - Y: ${e.clientY}`)
//   document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 100)`
// })

// FORMULARIOS

const form = document.querySelector("form")

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nombre = document.querySelector("#nombre")
  const email = document.querySelector("#email")

  if (nombre.value.trim() === "") {
    document.querySelector("#nombre-error").style.backgroundColor = "red"
    document.querySelector("#nombre-error").textContent =
      "El nombre es obligatorio"

    setTimeout(() => {
      document.querySelector("#nombre-error").textContent = ""
    }, 2000)
    return
  }

  // Enviar los datos al backend
})
