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
const carrito = []

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

  do {
    const seleccion = parseInt(
      prompt("Ingrese el id del producto que desea agregar")
    ) //1
    const cantidad = parseInt(
      prompt("Ingrese la cantidad del producto que desea agregar")
    ) //2 //stock

    const comparar = productos.find((producto) => {
      return producto.id === seleccion
    })
    if (comparar.stock >= cantidad) {
      agregarAlcarrito(seleccion, cantidad, productos)
    } else {
      alert(`La cantidad es superior al stock`)
    }
  } while (window.confirm("Desea agregar otro producto al carrito?"))
}

function agregarAlcarrito(seleccion, cantidad, productos) {
  // restar el stock del carrito de producto //
  const productoBuscado = productos.find((el) => el.id == seleccion)

  carrito.push(productoBuscado)

  return carrito
}

function mostrarCarrito(carrito) {
  const total = carrito.reduce((ac, carro) => ac + carro.precio, 0)
  const mappedCarrito = carrito.map((carro) => {
    return `${carro.nombre} - $${carro.precio}`
  })
  carritoUnido = mappedCarrito.join("\n")

  alert(`Este es tu carrito:
        ${carritoUnido}    
        total: $${total}`)
}

function eliminarProducto() {
  if (carrito.length > 0) {
    const total = carrito.reduce((ac, carro) => ac + carro.precio, 0)
    const carritoMapped = carrito.map((carro) => {
      return `
      id: ${carro.id} 
      nombre: ${carro.nombre} 
      `
    })
    const idEliminarProducto =
      prompt(`Este es tu carrito, Ingresa el id del producdto a eliminar:
    ${carritoMapped}
    total: $${total}`)
    const filtrarProducto = carrito.filter(
      (carro) => carro.id != idEliminarProducto
    )

    const nuevoCarrito = filtrarProducto.map((carro) => {
      return `
      id: ${carro.id}
      nombre: ${carro.nombre}
      precio: ${carro.precio}`
    })

    alert(`Tu carrito ahora es ${nuevoCarrito}`)
  } else {
    alert(`Tu carrito esta vacio, por favor ingresa tu compra`)
  }
}

main()
