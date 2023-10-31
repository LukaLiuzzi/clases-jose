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
  const datos = menu()
  if (datos == 1) {
    mostrarProductos(productos)
  }
}

function menu(params) {
  let datos = prompt(`Ingrese: 
  1: Mostrar productos
  2: Mostrar el carrito
  3: Finalizar compra
  4: salir`)
  return datos
}

function mostrarProductos(productos) {
  const mapped = productos.map((producto) => {
    return `${producto.id}: ${producto.nombre} - $${producto.precio}`
  })
  alert(mapped)

  do {
    const seleccion = prompt("Ingrese el id del producto que desea agregar")
    agregarAlcarrito(seleccion, productos)
  } while (window.confirm("Desea agregar un producto al carrito?"))
}

function agregarAlcarrito(seleccion, productos) {
  const productoBuscado = productos.find((el) => el.id == seleccion)
  carrito.push(productoBuscado)

  return carrito
}

main()
