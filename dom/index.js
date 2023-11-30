// DOM
// Acceder a elementos del DOM
// getElementById - Acceder a un elemento a través de su id
// querySelector - Acceder al primer elemento que coincida con el selector
// querySelectorAll - Acceder a todos los elementos que coincidan con el selector
// getElementsByClassName - Acceder a todos los elementos que coincidan con la clase
// getElementsByTagName - Acceder a todos los elementos que coincidan con el tag

const h1 = document.querySelector("h1")
const app = document.getElementById("app")

// Modificar elementos del DOM
// textContent - Cambiar el texto de un elemento
// innerText - Cambiar el texto de un elemento
// innerHTML - Cambiar el HTML de un elemento

// h1.textContent = "<h2>Hola Mundo</h2>"
h1.innerHTML = "<h2>Hola Mundo</h2>"

h1.classList.add("red") // Agregar una clase
h1.classList.remove("red") // Eliminar una clase
h1.classList.toggle("red") // Agregar/Eliminar una clase
h1.classList.contains("red") // Verificar si tiene una clase
h1.classList.replace("red", "blue") // Reemplazar una clase

h1.className = "rojo titulo" // Reemplazar todas las clases

// Crear elementos
// createElement - Crear un elemento
// appendChild - Agregar un elemento hijo
// insertBefore - Agregar un elemento antes de otro

const p = document.createElement("p")
p.textContent = "Hola Mundo"
app.appendChild(p)

const p2 = document.createElement("p")
p2.textContent = "Hola Mundo 2"
app.insertBefore(p2, p)

// Eliminar elementos
// removeChild - Eliminar un elemento hijo
// remove - Eliminar un elemento

app.removeChild(p2)
h1.remove()

const alumnosTag = document.getElementById("alumnos")
const alumnos = ["Juan", "Pedro", "Pablo", "Luis", "Jose"]

alumnos.forEach((alumno) => {
  const li = document.createElement("li")
  li.textContent = alumno
  alumnosTag.appendChild(li)
})

const producto = { id: 1, nombre: "Coca cola", precio: 100 }

const productosTag = document.getElementById("productos")

productosTag.innerHTML = `
  <li>
  <p>Id: ${producto.id}</p>
  <p>Nombre: ${producto.nombre}</p>
  <p>Precio: ${producto.precio}</p>
  </li>
`
