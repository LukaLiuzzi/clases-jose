// * El formulario debe tener las validaciones necesarias para que el campo no este vacio y no sea un numero.
//  * Cada tarea debe tener la informacion de la tarea, la fecha de creacion y un estado que puede ser "pendiente" o "terminada".
//  * Se deben cargar 2 tareas que esten predefinidas en el codigo al cargar la aplicacion.
//  * Se debe poder editar una tarea.
//  * Se debe poder eliminar una tarea.
//  */

// Condicional
// if (condicion) {
//   verdadero
// } else {
//   falso
// }

// Ternario
// condicion ? verdadero : falso

// LocalStorage
// window.localStorage.setItem("nombre", "valor") // Guardar
// window.localStorage.getItem("nombre") // Obtener
// window.localStorage.removeItem("nombre") // Eliminar
// window.localStorage.clear() // Eliminar todo
// JSON.stringify() // Convertir a string
// JSON.parse() // Convertir a objeto

// Variables globales
// tareas = []
// categorias = []

// ELEMENTOS DEL DOM
// const contenedorTareas = document.getElementById("contenedor-tareas")

// FUNCIONES
// function renderizarTareas(tareas) {}
// functionm renderizarCategorias(categorias) {}

// EVENTOS
// form.addEventListener("submit", (e) => {})
// form.addEventListener("submit", (e) => {})

let tareas = JSON.parse(window.localStorage.getItem("tareas")) || []

const contenedorTareas = document.getElementById("contenedor-tareas")
const form = document.querySelector("form")
const state = document.getElementById("state")
let categorias = JSON.parse(window.localStorage.getItem("categorias")) || []
const formulario = document.querySelector("#formulario") //formulario de categorias

//formulario categorias
formulario.addEventListener("submit", (e) => {
  e.preventDefault() // no se recarga la pagina
  const categoria = document.getElementById("categoria").value

  categorias.push({
    id: crypto.randomUUID(),
    categoria: categoria,
    fecha: new Date(),
  })
  window.localStorage.setItem("categorias", JSON.stringify(categorias))
  renderizarCategorias(categorias)
  if (categorias.length > 0) {
    contenedorTareas.style.display = "block"
  } else {
    contenedorTareas.style.display = "none"
  }
})

// renderizar categorias
const selectCategorias = document.getElementById("select-categoria")
const categoriasAmbas = document.getElementById("listadoCategorias")
function renderizarCategorias(categorias) {
  categoriasAmbas.innerHTML = ""

  // mostrar las categorias en el SELECT

  const opcionesHtml = categorias.map(
    (el) => `<option value="${el.id}"> ${el.categoria}</option>`
  )
  selectCategorias.innerHTML = opcionesHtml

  //mostrar las categorrias en el LI

  categorias.forEach((el) => {
    const cat = document.createElement("li")

    const categoriaHtml = `
    
    ${el.categoria} ${new Date(el.fecha).toLocaleDateString()} 

    <button type='button' class="me-2 btn" id="eliminar-${el.id}">
    <svg xmlns="http://www.w3.org/2000/svg" 
    )} width="16" height="16" fill="currentColor" class="bi bi-trash3-fill text-danger" viewBox="0 0 16 16">
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
     </svg>
   </button>
   ` //tolocaleDateString simplifica la fecha;
    cat.innerHTML = categoriaHtml
    categoriasAmbas.appendChild(cat)
  })
  const botonesEliminar = document.querySelectorAll("button[id^='eliminar-']")
  const botonesEditar = document.querySelectorAll("button[id^='editar-']")

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const [eliminar, ...id] = boton.id.split("-") // porque pone un array con spreed operator?
      const idCategoria = id.join("-")

      eliminarCategoria(idCategoria)
    })
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault() // no se recarga la pagina
  // agarro el valor pero en ID tengo que ver como usar el valor del ID al de la categoria
  const categoriaSeleccionada = selectCategorias.value

  if (form.getAttribute("aria-action") === "create") {
    const tarea = document.getElementById("tarea").value

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
      estado: false,
      fecha: new Date(),
      categoria: categoriaSeleccionada,
    })
    console.log(tareas)

    window.localStorage.setItem("tareas", JSON.stringify(tareas))
    renderizarTareas(tareas)
    if (categorias.length > 0) {
      contenedorTareas.style.display = "block"
    } else {
      contenedorTareas.style.display = "none"
    }
  } else {
    const id = form.getAttribute("aria-id")
    const nuevoTitulo = document.getElementById("tarea").value
    const nuevoEstado = document.getElementById("select-state").value
    const tarea = tareas.find((tarea) => tarea.id === id)
    tarea.titulo = nuevoTitulo

    tarea.estado = nuevoEstado === "true" ? true : false
    window.localStorage.setItem("tareas", JSON.stringify(tareas))
    renderizarTareas(tareas)
    form.setAttribute("aria-action", "create")
    form.removeAttribute("aria-id")
    document.getElementById("deseo").textContent = "Añadir deseo"
    form.reset()
    state.innerHTML = ""
  }
})

//Tarea predefinida 2

const tareasAmbas = document.getElementById("listadoTareas")

function renderizarTareas(tareas) {
  tareasAmbas.innerHTML = ""
  tareas.forEach((el) => {
    const tarea = document.createElement("li")

    const { categoria } = categorias.find((cat) => cat.id === el.categoria)
    // Agregar la clase "list-group-item" a la tarea
    tarea.classList.add("list-group-item")
    const tareaHtml = `
    
     ${el.titulo} ${el.estado === true ? "terminada" : "pendiente"} ${new Date(
      el.fecha
    ).toLocaleDateString()} ${categoria}

     <button type='button' class="me-2 btn" id="edit-${el.id}">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
    </svg>
     </button>

     <button type='button' class="me-2 btn" id="del-${el.id}">
     <svg xmlns="http://www.w3.org/2000/svg" 
     )} width="16" height="16" fill="currentColor" class="bi bi-trash3-fill text-danger" viewBox="0 0 16 16">
       <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg>
    </button>
     `

    tarea.innerHTML += tareaHtml
    tareasAmbas.appendChild(tarea)
  })

  // Capturo todos los botones de eliminar
  const botonesEliminar = document.querySelectorAll("button[id^='del-']")
  const botonesEditar = document.querySelectorAll("button[id^='edit-']")

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      // del-8d4168be-98b3-4f62-914a-8eb5c4232325
      // [del, 8d4168be, 98b3, 4f62, 914a, 8eb5c4232325]
      // [del, [8d4168be, 98b3, 4f62, 914a, 8eb5c4232325]]
      // "8d4168be-98b3-4f62-914a-8eb5c4232325"
      // Separamos el crypto.randomUUID() en el primer -
      const [del, ...id] = boton.id.split("-")
      const idTarea = id.join("-")

      eliminarTarea(idTarea)
    })
  })

  botonesEditar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const [edit, ...id] = boton.id.split("-")
      const idTarea = id.join("-")

      editarTarea(idTarea)
    })
  })
}

//find Index
//splice

function eliminarTarea(id) {
  const eliminar = tareas.filter((tarea) => tarea.id !== id)
  tareas = eliminar
  window.localStorage.setItem("tareas", JSON.stringify(tareas))
  renderizarTareas(tareas)
}

function eliminarCategoria(id) {
  const eliminar = categorias.filter((categoria) => categoria.id !== id)
  categorias = eliminar
  window.localStorage.setItem("categorias", JSON.stringify(categorias))
  renderizarCategorias(categorias)
  if (categorias.length > 0) {
    contenedorTareas.style.display = "block"
  } else {
    contenedorTareas.style.display = "none"
  }
}
function editarTarea(id) {
  const tarea = tareas.find((tarea) => tarea.id === id)
  const inputTarea = document.getElementById("tarea")
  inputTarea.value = tarea.titulo
  form.setAttribute("aria-action", "edit")
  form.setAttribute("aria-id", id)
  const botonDeseo = (document.getElementById("deseo").textContent =
    "Editar Deseo")
  state.innerHTML = `<select class="form-select" id="select-state">
    <option ${
      tarea.estado === false && "selected"
    } value=${false}>Pendiente</option>
    <option ${
      tarea.estado === true && "selected"
    }  value=${true}>Terminada</option>
  </select>`
}

if (categorias.length <= 0) {
  contenedorTareas.style.display = "none"
} else {
  renderizarTareas(tareas)
}
renderizarCategorias(categorias)
