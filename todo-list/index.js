// TODO LIST
/**
 * Cada tarea debe tener un id, una tarea, una categoria, una fecha de creacion, un estado (completado o pendiente) y una fecha de completado.
 * Las categorias deben tener un id y un nombre y deben estar preestablecidas.
 * Las tareas deben poder ser creadas, editadas, eliminadas y completadas.
 * Las tareas deben poder ser filtradas por categoria y por estado.
 */

if (true) {
  console.log("True")
} else {
  console.log("False")
}

// condicion ? "True" : "False"
// true ? "True" : "False"

document.body.style.background = "#222"
const deseos = []

function main(params) {
  let datos
  do {
    datos = menu()
    if (datos == 1) {
      mostrarTareas(deseos)
    } else if (datos == 2) {
      agregarTareas()
    } else if (datos == 3) {
      eliminarTarea(deseos)
    } else if (datos == 4) {
      editarTarea(deseos)
    }
  } while (datos != 5)
}

function menu(params) {
  let datos = prompt(`Ingrese: 
  1: Mostrar tareas
  2: Agregar tareas
  3: Eliminar tareas
  4: Editar tareas
  5: Finalizar 
  `)
  return datos
}

function agregarTareas() {
  const maximoLetras = 50 // declaro el largo de los caracteres

  const tareas = prompt(`Ingrese la tarea que desea hacer`)
  if (tareas.length <= 1) {
    alert(`Ingresa al menos una palabra`)
    return
  }
  if (tareas.length > maximoLetras) {
    alert(
      `tu tarea es de ${tareas.length} caracteres, debes ingresar una tarea de ${maximoLetras}`
    )
    return
  }
  const categoria = prompt(`Ingrese la categoria de la tarea`)
  if (categoria.length <= 1) {
    alert(`Ingresa al menos una palabra`)
    return
  }
  if (categoria.length > maximoLetras) {
    alert(
      `Tu categoria es de ${categoria.length} caracteres, debes ingresar una categoria de ${maximoLetras}`
    )
    return
  }

  const nuevaTarea = {
    id: Math.floor(Math.random() * 100),
    tarea: tareas,
    categoria: categoria,
    fecha: new Date(),
    estado: false,
  }

  deseos.push(nuevaTarea)
  console.log(deseos)
}

function mostrarTareas(deseos) {
  if (deseos.length <= 0) {
    alert(`Aun no tienes lista de deseos, por favor agrega un deseo`)
  } else {
    const mostrar = deseos.map(
      (deseo) =>
        `Id: ${deseo.id}, Tarea :${deseo.tarea}, Categoria: ${
          deseo.categoria
        }, Estado: ${deseo.estado === true ? "completado" : "pendiente"}`
    )
    alert(`Tu lista de deseos son : \n${mostrar.join("\n")}`)
  }
}

function eliminarTarea(deseos) {
  if (deseos.length <= 0) {
    alert(`Aun no tienes lista de desoes, por favor agrega un deseo`)
  } else {
    const mostrar = deseos.map(
      (deseo) =>
        `Id: ${deseo.id}, Tarea: ${deseo.tarea}, Categoria: ${deseo.categoria}`
    )
    const idDeseoAEliminar = parseInt(
      prompt(
        `esta es tu lista de deseos: \n${mostrar.join(`\n`)}
    Ingresa el id del deseo a eliminar`
      )
    )
    // findINdex (encuentro donde esta )
    // splice
    const index = deseos.findIndex((deseo) => deseo.id === idDeseoAEliminar)
    const tareasRenovadas = deseos.splice(index, 1)
    const deseosMapped = tareasRenovadas.map(
      (deseo) =>
        `Id: ${deseo.id}, Tarea: ${deseo.tarea}, Categoria: ${
          deseo.categoria
        }, Estado: ${deseo.estado === true ? "completado" : "pendiente"}`
    )
    alert(`Acabas de eliminar \n${deseosMapped.join(`\n`)} `)
  }
}

function editarTarea(deseos) {
  if (deseos.length <= 0) {
    alert(`Aun no tienes lista de deseos, por favor agrega un deseo`)
  } else {
    const mostrar = deseos.map(
      (deseo) =>
        `Id: ${deseo.id}, Tarea:${deseo.tarea} Estado:${
          deseo.estado === true ? "completado" : "pendiente"
        }`
    )
    // PEDIR al usuario que ingrse un ID
    const idTareaAEditar = parseInt(
      prompt(`Que tarea desdeas editar? Ingresa su ID \n${mostrar.join("\n")} `)
    )

    //  buscar si el ID es valido

    const esValidoId = deseos.some((deseo) => deseo.id === idTareaAEditar)

    if (!esValidoId) {
      alert(`Tu id no es correcto`)
      return
    }

    //  find para encontrar la tarea
    const deseoEditar = deseos.find((deseo) => deseo.id === idTareaAEditar)

    const campoAEditar = parseInt(
      prompt(
        `Ingresa 1 para editar la 'Categoria', 2 para editar la 'Tarea', 3 para editar el 'Estado'`
      )
    )
    if (campoAEditar === 1) {
      const edicionCategoria = prompt(
        `tu categoria actual es: ${deseoEditar.categoria}, ingresa la nueva categoria`
      )
      deseoEditar.categoria = edicionCategoria
      console.log(deseoEditar.categoria)
      // deseos.splice(idTareaAEditar, 1, deseoEditar);
    } else if (campoAEditar === 2) {
      const edicionTarea = prompt(
        `tu tarea actual es: ${deseoEditar.tarea}, ingresa la nueva tarea`
      )
      deseoEditar.tarea = edicionTarea
      // deseos.splice(idTareaAEditar, 1, edicionTarea);
    } else if (campoAEditar === 3) {
      const edicionEstado = parseInt(
        prompt(`tu estado actual es ${deseoEditar.estado} deseas cambiarlo a 'completado'?
      Ingresa 1 para 'completado', Ingrsa 2 para 'pendiente`)
      )
      if (edicionEstado === 1) {
        deseoEditar.estado = true
      }
      if (edicionEstado === 2) {
        deseoEditar.estado = false
      }
    }
  }
}

main()
