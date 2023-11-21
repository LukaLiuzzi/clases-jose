// Simulador de ecommerce
/**
 * El usuario puede ingresar datos a traves de prompt
 * Al usuario se le mostraran los datos con alert
 * Al entrar a la pagina, se va a mostrar un menu con distintas opciones:
 * 1. Mostrar todos los productos
 * 2. Agregar un producto al carrito
 * 3. Mostrar el carrito
 * 4. Eliminar un producto del carrito
 * 5. Finalizar compra
 * 6. Salir
 * A tener en cuenta:
 * - El carrito debe ser un array de objetos
 * - Si el usuario pone una opcion que no existe debe volver a preguntar
 * - El usuario debe poder volver al menu principal en cualquier momento
 * - Deben haber validaciones.
 * - Finalizar compra te debe sumar 21% iva, preguntar como queres pagar, y si elegis con tarjetas, hacer el calculo de cuanto te queda cada cuota
 */

const productos = [
  {
    id: 1,
    nombre: "Remera",
    precio: 1000,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Buzo",
    precio: 2000,
    stock: 10,
  },
  {
    id: 3,
    nombre: "Campera",
    precio: 3000,
    stock: 10,
  },
  {
    id: 4,
    nombre: "Pantalon",
    precio: 4000,
    stock: 10,
  },
  {
    id: 5,
    nombre: "Short",
    precio: 5000,
    stock: 10,
  },
  {
    id: 6,
    nombre: "Zapatillas",
    precio: 6000,
    stock: 10,
  },
]
let carrito = []

function main(params) {
  let datos
  do {
    datos = menu()
    if (datos == 1) {
      mostrarProductos(productos)
    } else if (datos == 2) {
      mostrarCarrito(carrito)
    } else if (datos == 3) {
      eliminarProducto()
    } else if (datos == 4) {
      finalizarCompra(carrito)
      break
    }
  } while (datos != 5)
}

function menu(params) {
  let datos = prompt(`Ingrese: 
  1: Mostrar productos
  2: Mostrar el carrito
  3: Eliminar producto de carrito
  4: Finalizar Compra
  5: salir`)
  return datos
}

function mostrarProductos(productos) {
  const mapped = productos.map((producto) => {
    return `${producto.id}: ${producto.nombre} - $${producto.precio}`
  })
  alert(mapped)
  //ver que el id sea mayor a 1 y menor a 6
  do {
    const seleccion = parseInt(
      prompt("Ingrese el id del producto que desea agregar")
    )
    if (seleccion >= 1 && seleccion <= 6) {
      comparar = productos.find((producto) => {
        return producto.id === seleccion
      })
    } else {
      alert(`Ingrese un Id entre 1 y 6`)
      main()
    }

    const cantidad = parseInt(
      prompt("Ingrese la cantidad del producto que desea agregar")
    )

    if (comparar.stock >= cantidad) {
      agregarAlcarrito(seleccion, cantidad, productos)
    } else {
      alert(`La cantidad es superior al stock`)
    }
  } while (window.confirm("Desea agregar otro producto al carrito?"))
}

function agregarAlcarrito(seleccion, cantidad, productos) {
  const productoBuscado = productos.find((el) => el.id == seleccion)
  // ver el stock del producto
  const stockProducto = productoBuscado.stock
  //restar cantidad de stock//

  // logica para pushear si stock es mayor a cantidad, sino que no lo deje pushear

  if (stockProducto >= cantidad) {
    productoBuscado.stock = productoBuscado.stock - cantidad
    carrito.push({
      id: productoBuscado.id,
      nombre: productoBuscado.nombre,
      precio: productoBuscado.precio,
      stock: productoBuscado.stock,
      cantidadSolicitada: cantidad, //Agrego la cantidad para poder mostrar luego
    })
  } else {
    alert(`tu producto no tiene suficiente stock`)
  }
  console.log(carrito)
  console.log(productos)
  return carrito
}

// tengo que mostrar la cantidad de productos con ids//
function mostrarCarrito(carrito) {
  if (carrito.length <= 0) {
    alert(`Tu carrito esta vacio, por favor agrega productos`)
    main()
  }

  const mappedCarrito = carrito.map((carro) => {
    return `${carro.nombre} - $${carro.precio}  
    Cantidad: ${carro.cantidadSolicitada}
    Sub Total: ${carro.precio * carro.cantidadSolicitada}`
  })
  carritoUnido = mappedCarrito.join("\n")
  const total = carrito.reduce(
    (ac, carro) => ac + carro.cantidadSolicitada * carro.precio,
    0
  )

  alert(`Este es tu carrito:
        ${carritoUnido}    
        Total: $${total}`)
}

function eliminarProducto() {
  if (carrito.length <= 0) {
    alert(`Tu carrito esta vacio, por favor agrega productos`)
    main()
  }
  if (carrito.length > 0) {
    const total = carrito.reduce(
      (ac, carro) => ac + carro.cantidadSolicitada * carro.precio,
      0
    )
    const carritoMapped = carrito.map((carro) => {
      return `
      id: ${carro.id} 
      nombre: ${carro.nombre} 
      cantidad: ${carro.cantidadSolicitada}
      `
    })

    const idEliminarProducto = parseInt(
      prompt(`Este es tu carrito, Ingresa el id del producdto a eliminar:
      ${carritoMapped}
      total: $${total}`)
    )

    const cantidadProductoAEliminar = parseInt(
      prompt(`Ingrese la cantidad de productos a eliminar`)
    )

    const filtrarProducto = carrito.map((carro) => {
      if (idEliminarProducto === carro.id) {
        carro.cantidadSolicitada =
          carro.cantidadSolicitada - cantidadProductoAEliminar
      }
      return carro
    })

    const carritoNuevo = carrito.filter((carro) => {
      return carro.cantidadSolicitada > 0
    })

    carrito = carritoNuevo

    const carritoAMostrar = carrito.map((carro) => {
      return `
        Id: ${carro.id}
        Nombre: ${carro.nombre}
        Precio: ${carro.precio}
        Cantidad: ${carro.cantidadSolicitada}
        Sub-Total: ${carro.cantidadSolicitada * carro.precio}`
    })

    alert(`Tu carrito ahora es: ${carritoAMostrar}
   `)
  }
}

function finalizarCompra(carrito) {
  if (carrito.length <= 0) {
    alert(`Tu carrito esta vacio, por favor agrega productos`)
    main()
  }
  const mappedCarrito = carrito.map((carro) => {
    return `${carro.nombre} - $${carro.precio}  
    Cantidad: ${carro.cantidadSolicitada}
    Sub Total: ${carro.precio * carro.cantidadSolicitada}`
  })
  carritoUnido = mappedCarrito.join("\n")
  const total = carrito.reduce(
    (ac, carro) => ac + carro.cantidadSolicitada * carro.precio,
    0
  )
  const totalIva = carrito.reduce(
    (ac, carro) => ac + carro.cantidadSolicitada * carro.precio * 1.21,
    0
  )

  alert(`Este es tu carrito:
        ${carritoUnido}    
        Total: $${total}
        Total + Iva $${totalIva}`)
  const metodoPago = parseInt(
    prompt(
      `Igresa 1 para pagar contado, Ingresa 2 para pagar con tarejta en cuotas`
    )
  )
  if (metodoPago === 1) {
    alert(`Gracias por pagar contado, el total de ${totalIva}`)
  } else if (metodoPago === 2) {
    const cuotas = parseInt(prompt(`Ingrese la cantidad de cuotas `))
    const pagoConCuotas = totalIva / cuotas
    alert(` Tu total es ${totalIva} 
    en ${cuotas} pagos, 
     con un pago $${pagoConCuotas} mensual `)
  }
  alert("¡Gracias por comprar en nuestro sistema!")
}

main()
