// console.log("Inicio del programa")

// const id = setTimeout(() => {
//   console.log("Mitad del programa")
// }, 0)

// console.log("Fin del programa")

// let contador = 0
// const idIntervalo = setInterval(() => {
//   console.log("Segundos: ", (contador = contador + 2))
// }, 2000)

// clearInterval(idIntervalo)

// // Promesas => pending, fulfilled, rejected

// // await mongoose.connect("mongodb://localhost:27017/ecommerce")

// const eventoFuturo = (res) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       res ? resolve("Promesa resuelta") : reject("Promesa rechazada")
//     }, 2000)
//   })
// }

// console.log(eventoFuturo(true)) // Promise { <pending> }
// console.log(eventoFuturo(false)) // Promise { <pending> }

// eventoFuturo(true)
//   .then((info) => {
//     console.log(info)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log("ESTO SE VA A EJECUTAR SIEMPRE")
//   })

// const DB = [
//   { id: 1, nombre: "Producto 1", precio: 2000 },
//   { id: 2, nombre: "Producto 2", precio: 3000 },
//   { id: 3, nombre: "Producto 3", precio: 4000 },
//   { id: 4, nombre: "Producto 4", precio: 5000 },
//   { id: 5, nombre: "Producto 5", precio: 6000 },
// ]

// const obtenerProductos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(DB)
//     }, 2000)
//   })
// }

// obtenerProductos()
//   .then((productos) => {
//     console.log(productos)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((el) => {
//       document.body.innerHTML += `<h1>${el.title}</h1>
//                                   <p>${el.body}</p>
//                                   <hr>`
//     })
//   })
//   .catch((err) => console.log(err))

// async / await
// const obtenerPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await response.json()
//   return data
// }

// const renderizarPosts = async () => {
//   const posts = await obtenerPosts()
//   posts.forEach((el) => {
//     document.body.innerHTML += `<h1>${el.title}</h1>
//                                   <p>${el.body}</p>
//                                   <hr>`
//   })
// }

// renderizarPosts()

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     res.json().then((data) => {
//       console.log(data)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// console.log("HOLAAAAA")

// ASYNC / AWAIT
// const obtenerPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/postss")
//     const data = await res.json()
//     data.forEach((e) => {
//       document.body.innerHTML += `<h1>${e.title}</h1>
//                                   <p>${e.body}</p>
//                                   <hr>`
//     })
//   } catch (error) {
//     document.body.innerHTML = `<h1>Error al obtener los posts</h1>`
//     console.log(error)
//   }
// }

// obtenerPosts()
