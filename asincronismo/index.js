console.log("Inicio del programa")

const id = setTimeout(() => {
  console.log("Mitad del programa")
}, 0)

console.log("Fin del programa")

let contador = 0
const idIntervalo = setInterval(() => {
  console.log("Segundos: ", (contador = contador + 2))
}, 2000)

clearInterval(idIntervalo)

// Promesas => pending, fulfilled, rejected

// await mongoose.connect("mongodb://localhost:27017/ecommerce")

const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada")
    }, 2000)
  })
}

// console.log(eventoFuturo(true)) // Promise { <pending> }
// console.log(eventoFuturo(false)) // Promise { <pending> }

eventoFuturo(true)
  .then((info) => {
    console.log(info)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("ESTO SE VA A EJECUTAR SIEMPRE")
  })
