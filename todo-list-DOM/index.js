/**
 * Se debe poder crear una tarea desde un formulario. El formulario solo tendra el campo de tarea.
 * El formulario debe tener las validaciones necesarias para que el campo no este vacio y no sea un numero.
 * Cada tarea debe tener la informacion de la tarea, la fecha de creacion y un estado que puede ser "pendiente" o "terminada".
 * Se deben cargar 2 tareas que esten predefinidas en el codigo al cargar la aplicacion.
 * Se debe poder editar una tarea.
 * Se debe poder eliminar una tarea.
 */

const tareas = [
  {
    id: crypto.randomUUID(),
    titulo: "correr",
    estado: "pendiente",
    fecha: new Date(),
  },
  {
    id: crypto.randomUUID(),
    titulo: "estudiar",
    estado: "pendiente",
    fecha: new Date(),
  },
]
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault() // no se recarga la pagina
  const tarea = document.getElementById("tarea").value
  console.log(tarea)
  if (tarea === "") {
    document.querySelector("#foo-bar").style.backgroundColor = "white"
    document.querySelector("#foo-bar").textContent =
      "Escribe una tarea por favor"
    setTimeout(() => {
      document.querySelector("#foo-bar").textContent = ""
    }, 2000)
    return
  }
  // isNan (SINO ES NUMERO)
  // !isNan (si es numero)
  if (!isNaN(tarea)) {
    document.querySelector("#foo-bar").style.backgroundColor = "white"
    document.querySelector("#foo-bar").textContent =
      "Escribe una tarea por favor, has escrito un numero"
    setTimeout(() => {
      document.querySelector("#foo-bar").textContent = ""
    }, 2000)

    return
  }

  tareas.push({
    id: crypto.randomUUID(),
    titulo: tarea,
    estado: "pendiente",
    fecha: new Date(),
  })

  renderizarTareas(tareas)
})

const div = document.getElementById("listadoTareas")
div.style.width = "200px"
div.style.height = "200px"
div.style.backgroundColor = "red"

//Tarea predefinida 2
const tareasAmbas = document.getElementById("listadoTareas")

function renderizarTareas(tareas) {
  console.log("tareas cargadas")
  tareasAmbas.innerHTML = ""
  tareas.forEach((el) => {
    const tarea = document.createElement("li")
    const tareaHtml = `<li>${el.titulo} ${el.estado} ${new Date(
      el.fecha
    ).toLocaleDateString()}</li>`
    tarea.innerHTML += tareaHtml
    tareasAmbas.appendChild(tarea)
  })
}

renderizarTareas(tareas)
