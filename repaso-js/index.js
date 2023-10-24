// Tipos de datos en javascript

// Datos primitivos
// number
// string
// boolean
// null
// undefined
// symbol
// bigint

// Operadores aritmeticos
// + suma
// - resta
// * multiplicacion
// / division
// % modulo (resto de la division) 2 % 2 = 0 - 3 % 2 = 1
// ** exponente

// Al hacer operaciones con numeros, se pueden usar parentesis para indicar el orden de las operaciones como en matematicas
// 2 + 2 * 2 = 6
// (2 + 2) * 2 = 8

// string
// Hay 3 formas de representar un string
// const nombre = "Juan"
// "Esto es un string"
// 'Esto tambien es un string ' + nombre => Aca estamos concatenando dos strings
// `Esto es un string ${nombre}` => Aca estamos interpolando el valor de la variable nombre dentro del string

// boolean
// true
// false

// Datos thuthy y falsy
// console.log(Boolean(0)) // false
// console.log(Boolean(1)) // true
// console.log(Boolean([])) // true
// console.log(Boolean({})) // true
// console.log(Boolean("")) // false
// console.log(Boolean("hola")) // true
// console.log(Boolean("false")) // true
// console.log(Boolean(new Date())) // true

// Operadores de comparacion
// == igualdad
// === igualdad estricta
// != desigualdad
// !== desigualdad estricta
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que

console.log(2 == 2) // true
console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(typeof 2) // number
console.log(typeof "2") // string
console.log(2 != 2) // false
console.log(2 != "2") // false
console.log(2 !== "2") // true

// Operadores logicos
// && and
// || or
// ! not // Invierte el valor de un booleano => !true = false y !false = true

// Operador AND && (La unica forma de que sea true es que ambos valores sean true)
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// Operador OR || (La unica forma de que sea false es que ambos valores sean false)
// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log(2 < 3 && 3 < 4) // true (2 < 3 = true && 3 < 4 = true => true && true = true)
console.log(2 < 3 && 5 < 4) // false (2 < 3 = true && 5 < 4 = false => true && false = false)
console.log(2 < 3 || 5 < 4) // true (2 < 3 = true || 5 < 4 = false => true || false = true)
console.log(2 > 3 || 5 < 4) // false (2 > 3 = false || 5 < 4 = false => false || false = false)

console.log(!(2 > 3 || 5 < 4)) // true (2 > 3 = false || 5 < 4 = false => false || false = false => !false = true)

// Variables => Son espacios en memoria que nos permiten guardar valores => Hay 3 formas de declarar variables
// var => Es la forma antigua de declarar variables
// let => Es la forma moderna de declarar variables
// const => Es la forma moderna de declarar variables pero que no se pueden reasignar

var nombre = "Juan"
let apellido = "Perez"
const edad = 30 // Si intentamos reasignar una constante, nos va a tirar un error
// edad = 31 // Esto nos va a tirar un error

// Scope => Es el alcance que tiene una variable => Las variables declaradas con var tienen un scope global y las variables declaradas con let y const tienen un scope local

function saludar() {
  console.clear()
  let nombre = "Luka"
  console.log(nombre)
  console.log(apellido)
  console.log(edad)
  if (true) {
    var apellido = "Perez"
    let edad = 30
    console.log(nombre)
    console.log(apellido)
    console.log(edad)
  }
}

// saludar()

if (true) {
  var posicion = "arquero"
  let equipo = "Boca"
}

console.log(posicion)
// console.log(equipo) // Esto nos va a tirar un error porque equipo no esta definido

let numero = 19
if (true) {
  const numero2 = 19
}

// Funciones
// Hositing: Es cuando javascript mueve todas las funciones al principio del archivo y despues ejecuta el codigo
// Esto nos permite llamar a una funcion antes de declararla, solo si la declaramos con la palabra reservada function

console.log(sumar(2, 3))

function sumar(a, b) {
  return a + b
}

// Expresiones de funciones
const sumar2 = function (a, b) {
  return a + b
}

// console.log(sumar3(2, 3)) // Esto da error porque sumar3 aun no esta definida
// Funciones flechas
const sumar3 = (a, b) => {
  return a + b
}

// Los parentesis son opcionales cuando solo tenemos un parametro
const sumar4 = (a) => {
  return a + 1
}

console.log(sumar4(2))

// Si la funcion solo tiene una linea de codigo, podemos omitir las llaves y el return ya que es implicito
const sumar5 = (a, b) => a + b

// return
// Cuando una funcion no tiene un return, devuelve undefined
// Cuando una funcion tiene un return, devuelve lo que le indiquemos
// Cuando una funcion tiene un return, se corta la ejecucion de la funcion
// Cuando una funcion tiene un return, podemos devolver cualquier tipo de dato
// Cuando una funcion tiene un return, podemos devolver otra funcion

function sumar10(a, b) {
  const sumaDeParametros = a + b

  console.log(sumaDeParametros)

  return sumaDeParametros

  console.log("Esto no se va a ejecutar nunca")
}

const suma = sumar10(100, 100)

console.log(suma)

// Parametros
// Los parametros son los valores que recibe una funcion
// Los parametros son opcionales
// Los parametros tienen un orden
// Los parametros tienen un valor por defecto
// Los parametros pueden ser cualquier tipo de dato
// Los parametros pueden ser funciones

function saludar2(nombre = "luka", edad = 30) {
  console.log(`Hola ${nombre}, tenes ${edad} años`)
}

saludar2("Juan", 20)
saludar2("Juan")
saludar2()
saludar2(21, "Jose") // Esto queda mal porque no respetamos el orden de los parametros

// Arrays
// Los arrays son una lista de elementos
// Los arrays pueden tener cualquier tipo de dato
// Los arrays pueden tener cualquier cantidad de elementos
// Los arrays pueden tener elementos repetidos
// Los arrays pueden tener elementos de diferentes tipos de datos
// Los arrays pueden tener otros arrays
// Los arrays pueden tener objetos
console.clear()
const productos = [
  {
    id: 1,
    nombre: "Coca Cola",
    precio: 100,
    stock: 100,
    estaDisponible: true,
  },
  {
    id: 2,
    nombre: "Pepsi",
    precio: 400,
    stock: 400,
    estaDisponible: true,
  },
  {
    id: 3,
    nombre: "Fanta",
    precio: 300,
    stock: 1,
    estaDisponible: false,
  },
  {
    id: 4,
    nombre: "Mirinda",
    precio: 400,
    stock: 100,
    estaDisponible: true,
  },
]

// Metodos mas usados
// filter - Filtra los elementos de un array segun una condicion y retorna un nuevo array con los elementos filtrados
const filteredProducts = productos.filter((producto) => producto.precio > 100)

// Eliminamos el id 2 del array
const nuevosProductos = productos.filter((producto) => producto.id !== 2)

// Filtramos los productos que estan disponibles
const productosDisponibles = productos.filter(
  (producto) => producto.estaDisponible
)

console.log(productosDisponibles)

const productosDe400 = productos.filter((producto) => producto.precio === 400)
console.log(productosDe400)

// find
// Encuentra un elemento de un array segun una condicion y retorna el primer elemento que coincida con la condicion
console.clear()
const productoEncontrado = productos.find((producto) => producto.id === 2)

console.log(productoEncontrado)

const cocaCola = productos.find(
  (producto) => producto.nombre.toLowerCase() === "Coca Cola".toLowerCase()
)

console.log(cocaCola)

// map
// Recorre un array y retorna un nuevo array con los elementos modificados
console.clear()
const productosConIVA = productos.map((producto) => {
  return {
    ...producto,
    precio: producto.precio * 1.21,
  }
})

console.log(productosConIVA)

const nombres = productos.map((producto) => producto.nombre)
console.log(nombres)

// spread operator - Operador de propagacion

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
}

const persona2 = {
  ...persona,
  nombre: "Luka",
}

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = [...array1, ...array2]

console.log(array3)

// forEach - Recorre un array y ejecuta una funcion por cada elemento del array
console.clear()
productos.forEach((producto) => {
  console.log(producto.nombre + " - " + producto.precio)
})

productos.forEach((producto) => {
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  document.body.innerHTML += `<p>${producto.nombre} - ${producto.precio}</p>`
})

// some - Recorre un array y retorna true si algun elemento cumple con la condicion
console.clear()
const hayProductosDisponibles = productos.some(
  (producto) => producto.estaDisponible
)
console.log(hayProductosDisponibles)

const hayProductosConPocoStock = productos.some(
  (producto) => producto.stock < 10
)

console.log(hayProductosConPocoStock)
// every - Recorre un array y retorna true si todos los elementos cumplen con la condicion
console.clear()

const todosLosProductosDisponibles = productos.every(
  (producto) => producto.estaDisponible
)

console.log(todosLosProductosDisponibles)

const todosLosProductosConStock = productos.every(
  (producto) => producto.stock > 0
)

console.log(todosLosProductosConStock)

// length - Propiedad que nos indica la cantidad de elementos de un array
console.clear()
console.log(productos.length)

// sort - Ordena los elementos de un array segun una condicion
console.clear()

const numeros = [1, 5, 2, 7, 8]

const numerosOrdenados = numeros.sort((a, b) => b - a)

console.log(numerosOrdenados)

// toSorted - Ordena los elementos de un array segun una condicion y retorna un nuevo array con los elementos ordenados

const numerosOrdenados2 = numeros.toSorted((a, b) => b - a)

console.log(numerosOrdenados2)

// Matrices - Son arrays de arrays
console.clear()
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
]

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Columna ${j + 1} de la fila ${i + 1}`)
  }
}

const tablero = [
  ["X", "O", "X"],
  ["O", "X", "X"],
  ["O", "X", "O"],
]

// Algoritmos con arrays
const findMaxAlgorithm = (array) => {
  let max = array[0] // Recuperamos el primer elemento del array

  // Recorremos el array desde el segundo elemento hasta el ultimo
  array.forEach((el) => {
    // Es el elemento actual mayor al maximo?
    if (el > max) {
      // Si es mayor, lo guardamos en la variable max
      max = el
    }
  })

  return max
}

console.clear()
console.log(findMaxAlgorithm([1, 2, 3, 4, 6, 7, 8, 9]))

// Una forma mas sencilla de hacerlo
console.log(Math.max(...[1, 2, 3, 4, 6, 7, 8, 9, 200]))

/*
Ejercicios de practica:
1 - Suma de elementos: Crea una función que reciba un array de números y devuelva la suma de todos los elementos.

2 - Filtrar números pares: Escribe una función que tome un array de números y devuelva un nuevo array que contenga solo los números pares.

3 - Encontrar el número más grande: Crea una función que encuentre el número más grande en un array de números.
javascript

4 - Eliminar duplicados: Escribe una función que elimine los elementos duplicados de un array.

5 - Reversa: Implementa una función que invierta un array sin modificar el array original.

6 - Buscar elemento: Crea una función que busque un elemento en un array y devuelva su índice, o -1 si no se encuentra.

Extra: Ver este video sobre context de react para ir metiendonos en el tema: https://www.youtube.com/watch?v=UPCOJgLlr3w&ab_channel=FernandoHerrera
*/

function sumaElementos(array) {
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i]
  }
  return suma
}

console.log(sumaElementos([2, 3]))

function numerosPares(array) {
  let pares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i])
    }
  }
  return pares
}

const numerosParesEjercicio = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0)
console.log(numerosParesEjercicio)

function numMasGrande(array) {
  let numeroMasGrande = array[0]

  array.forEach((el) => {
    if (el > numeroMasGrande) {
      numeroMasGrande = el
    }
  })

  console.log(numeroMasGrande)
  return numeroMasGrande
}
numMasGrande([1, 2, 3, 4, 6, 7, 8, 9, 12])
// esta esta mal//

// function eliminarDuplicados(array) {
//   let nuevosNumeros = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         nuevosNumeros.push(array[i] & array[j]);
//       }
//     }
//   }
//   return nuevosNumeros;
// }

const a = [2, 2, 2, 3, 4, 4, 6, 6, 7, 8, 9, 9]
const eliminarDuplicados = () => {
  const nuevoArray = []
  console.log(a)
  a.forEach((el) => {
    if (!nuevoArray.includes(el)) {
      nuevoArray.push(el)
    }
  })

  return nuevoArray
}

console.log(eliminarDuplicados())

const testArray = ["Hola", "chau", "mediodia"]
function alReves(array) {
  const reversedArray = array.map((el) => {
    return el.split("").reverse().join("")
  })
  return reversedArray
}
console.log(testArray)
console.log(alReves(testArray))

function indice(array, elemento) {
  let declaratoria = array.indexOf(elemento)
  return declaratoria
}

const miArray = [10, 20, 30, 40, 50]
const elementoBuscado = 30

console.log(indice(miArray, elementoBuscado))

const invertirArray = (array) => {
  console.log(array)
  // Hacer un copia del array
  const copia = structuredClone(array)

  // Invertir la copia
  const invertido = copia.reverse()

  // Retornar la copia
  return invertido
}

console.log(invertirArray([1, 2, 3, 4, 5]))

/**
 * Ejercicios
 * Encontrar números primos: Escribe una función que tome un número como entrada y devuelva un array con todos los números primos hasta ese número.
 *
 * Calcular promedio: Crea una función que tome un array de números y calcule el promedio
 *
 * Encontrar el segundo número más grande: Crea una función que encuentre el segundo número más grande en un array de números.
 *
 * Palíndromo de array: Escribe una función que determine si un array es un palíndromo, es decir, si se lee igual de izquierda a  derecha que de derecha a izquierda.
 *
 * Múltiplos de un número: Escribe una función que tome un número y un límite y devuelva un array con todos los múltiplos del número dentro del límite.
 *
 * Eliminar elementos por valor: Crea una función que elimine todos los elementos con un valor específico de un array.
 */
console.clear()
const promedio = (array) => {
  let inicial = 0
  let prom = 0
  for (let i = 0; i < array.length; i++) {
    inicial += array[i]
    prom = inicial / array.length
  }
  return prom
}

nuevoArray = [2, 4, 6, 8, 1]

const segundoNumeroMasGrande = (n) => {
  if (n.length < 2) {
    return null
  }
  let ordenado = n.sort((a, b) => b - a)
  let segundo = ordenado[1]
  return segundo
}
// console.log(segundoNumeroMasGrande(nuevoArray));
console.log(segundoNumeroMasGrande([1, 20, 40, 50, 60]))

function palindromo(array) {
  mitad1 = array.slice(0, array.length / 2)
  mitad2 = array.slice(array.length / 2).reverse()
  if (JSON.stringify(mitad1) === JSON.stringify(mitad2)) {
    return "El array es palindromo"
  } else {
    return "El array no es palindromo"
  }
}

const esPalindromo = (array) => {
  const copia = structuredClone(array)
  const invertido = copia.reverse()
  return JSON.stringify(array) === JSON.stringify(invertido)
}

console.log(palindromo([1, 2, 3, 2, 1]))

console.log(palindromo([1, 2, 3, 4, 5]))

console.log(palindromo([2, 3, 4, 5]))
console.log(palindromo([2, 3, 3, 2]))

console.clear()
console.log(esPalindromo([1, 2, 3, 2, 1]))
console.log(esPalindromo([1, 2, 3, 4, 5]))
console.log(esPalindromo([2, 3, 4, 5]))
console.log(esPalindromo([2, 3, 3, 2]))

const esPrimo = (numero) => {
  if (numero <= 1) return false
  if (numero === 2) return true
  if (numero % 2 === 0) return false

  for (let i = 3; i <= numero / 2; i += 2) {
    if (numero % i === 0) {
      return false
    }
  }

  return true
}

// const promedio = (array) => {
//   let inicial = 0
//   let prom = 0
//   for (let i = 0; i < array.length; i++) {
//     inicial += array[i]
//     prom = inicial / array.length
//   }
//   return prom
// }

// ===========================================
// METODO REDUCE
const carrito = [
  {
    id: 1,
    nombre: "Coca Cola",
    precio: 100,
    cantidad: 2,
  },
  {
    id: 2,
    nombre: "Pepsi",
    precio: 400,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Fanta",
    precio: 300,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Mirinda",
    precio: 400,
    cantidad: 3,
  },
]

const total = carrito.reduce((acc, valorActual) => {
  return acc + valorActual.precio * valorActual.cantidad
}, 0)

console.log(total)

const promedioConReduce = (array) => {
  const suma = array.reduce((acc, el) => acc + el)
  return suma / array.length
}

/**
 * Ejercicios usando metodo REDUCE:
 * Suma de elementos: Escribe una función que sume todos los elementos de un array.
 *
 * Concatenación de strings: Implementa una función que tome un array de strings y los concatene en una sola cadena.
 *
 * Encontrar el máximo: Escribe una función que encuentre el número más grande en un array.
 *
 * Contar elementos: Crea una función que cuente cuántas veces aparece un elemento específico en un array.
 */

const array = [1, 2, 3, 4]

const sumarElementos = (array) => {
  const suma = array.reduce((acc, el) => acc + el, 0)
  return suma
}

console.log(sumarElementos(array))
console.log(sumarElementos([2, 2, 10, 15]))

const arrayStr = ["hola", "chau"]

const concat = (array) => {
  const concatenar = array.reduce((acc, el) => acc + " " + el, " ")
  return concatenar
}

console.log(concat(arrayStr))

const maximo = (array) => {
  const max = array.reduce((max, actual) => {
    if (actual > max) {
      // Si el elemento actual es mayor al maximo, el acumulador pasa a ser el elemento actual
      return actual
    } else {
      // sino el acumulador sigue siendo el maximo
      return max
    }
  }, array[0])
  return max
}

console.log(maximo([1, 6, 2, 3, 5]))

const contarElemento = (array, elemento) => {
  const contador = array.reduce((contador, elAct) => {
    if (elAct === elemento) {
      return contador + 1
    } else {
      return contador
    }
  }, 0)

  return contador
}

console.log(contarElemento([1, 2, 3, 4, 5, 5, 5, 5, 5], 5))
console.log(contarElemento([1, 2, 3, 4, 5, 5, 5, 5, 5], 2))
console.log(contarElemento([1, 2, 3, 4, 5, 5, 5, 5, 5], 100))

/**
 const d = [1, 2, 3, 4]
 * acc = 0
 * 1ra vuelta: acc = acc + valorActual = 0 + 1 = 1
 * 2da vuelta: acc = acc + valorActual = 1 + 2 = 3
 * 3ra vuelta: acc = acc + valorActual = 3 + 3 = 6
 * 4ta vuelta: acc = acc + valorActual = 6 + 4 = 10
 */

// ===========================================
// OBJETOS
// Declaracion y asignacion de objetos
console.clear()
const objPersona = {
  nombre: "Luka",
  edad: 21,
  estaTrabajando: true,
  familia: ["Juan", "Jose", "Maria"],
  direccion: {
    calle: "Av. Siempre Viva",
    numero: 123,
  },
  trabajar: function () {
    console.log("Estoy dando clases de javascript")
  },
  "nombre completo": "Luka Modric",
}

// Acceder a las propiedades de un objeto
// 2 formas - Notacion de punto y notacion de corchetes
console.log(objPersona.nombre)
console.log(objPersona.edad)

const propiedadAAcceder = "estaTrabajando"

console.log(objPersona["nombre"])
console.log(objPersona["edad"])
console.log(objPersona["nombre completo"])

console.log(objPersona.propiedadAAcceder)
console.log(objPersona[propiedadAAcceder])

// Acceder a los metodos de un objeto
objPersona.trabajar()
objPersona["trabajar"]()

// Agregar propiedades a un objeto
objPersona.apellido = "Perez"
objPersona["apellido"] = "Perez"
console.log(objPersona)

// Modificar propiedades de un objeto
objPersona.edad = 30
objPersona["edad"] = 30
console.log(objPersona)

// Eliminar propiedades de un objeto
delete objPersona.edad
delete objPersona["edad"]
console.log(objPersona)

/**
 * Ejercicios de objetos:
 * Crear un objeto persona con las siguientes propiedades:
 * nombre, apellido, edad, estaCasado, tieneHijos, familia, direccion, saludar
 * Crear un objeto direccion con las siguientes propiedades:
 * calle, numero, ciudad, provincia, pais
 *
 * Una vez que tenemos los 2 objetos creados, agregar el objeto direccion a la propiedad direccion del objeto persona
 * Agregar un metodo al objeto persona que se llame cumpleaños y que aumente la edad en 1, luego mostrar por consola la edad de la persona
 * Agregar un metodo al objeto persona que se llame mudanza y que reciba como parametro un objeto direccion y que modifique la propiedad direccion del objeto persona
 * Eliminar el metodo saludar del objeto persona


const obPersona = {
  nombre: "Jose",
  apellido: "Machicote",
  edad: 30,
  estaCasado: false,
  tieneHijos: false,
  direccion: "Ciudadela 1234",
  saludar: true,
  cumpleanos: function () {
    this.edad++
  },
}

const objDireccion = {
  calle: "Ciudadela",
  numero: 1234,
  ciudad: "Montevideo",
  provincia: "Montevideo",
  pais: "Uruguay",
}

obPersona.direccion = objDireccion
console.log(obPersona)

console.log(`Edad antes del cumple: ${obPersona.edad}`)
obPersona.cumpleanos()
console.log(`Edad post cumple es: ${obPersona.edad}`)

delete obPersona.saludar
console.log(obPersona)

obPersona.mudanza = function (direccion) {
  this.direccion = direccion
}

obPersona.mudanza({
  calle: "Av. Siempre Viva",
  numero: 123,
  ciudad: "Montevideo",
  provincia: "Montevideo",
  pais: "Uruguay",
})

console.log(obPersona)
 */

console.clear()
const nombre2 = "Luka"
const apellido2 = "Modric"

const pers = {
  nombre2,
  apellido2,
  edad: 30,
  familia: {
    padre: "Juan",
    madre: "Maria",
  },
}

console.log(pers)

// Desestructuracion de objetos
const {
  nombre2: nombreDePers,
  apellido2: apellidoDePers,
  edad: edadDePers,
  direccion = "No tiene direccion", // Es un valor por defecto. Si no existe la propiedad direccion en el objeto pers, se va a asignar el valor "No tiene direccion"
  familia: { padre, madre: madreDePers }, // Desestructuramos el objeto familia y le asignamos un alias a la propiedad madre
} = pers

console.log(
  nombreDePers,
  apellidoDePers,
  edadDePers,
  direccion,
  padre,
  madreDePers
)

// ===========================================
/**
 * 1. Sumar elementos en un array:
Escribe una función que sume todos los números en un array.

2. Encontrar el número más grande:
Escribe una función que encuentre el número más grande en un array de números.

3. Filtrar elementos pares:
Escribe una función que tome un array de números y devuelva un nuevo array solo con los números pares.

4. Contar palabras:
Escribe una función que cuente el número de palabras en una cadena de texto.

5. Encontrar elementos duplicados:
Escribe una función que encuentre los elementos duplicados en un array.

6. Calculadora de propina:
Escribe una función que calcule la propina en una cuenta de restaurante. Debe aceptar el monto de la cuenta y el porcentaje de propina.

7. Calcular promedio:
Escribe una función que calcule el promedio de un array de números.

8. Convertir Celsius a Fahrenheit:
Escribe una función que convierta una temperatura en grados Celsius a grados Fahrenheit.

9. Contar las ocurrencias de un elemento en un array:
Escribe una función que cuente cuántas veces aparece un elemento específico en un array.

10. Verificar palíndromos:
Escribe una función que verifique si una palabra o frase es un palíndromo (se lee igual al derecho y al revés).

11. Clasificar estudiantes:
Escribe una función que tome un array de objetos de estudiantes con sus calificaciones y devuelva un nuevo array ordenado de mayor a menor según sus calificaciones.

12. Generar un objeto a partir de dos arrays:
Escribe una función que tome dos arrays, uno de claves y otro de valores, y cree un objeto con las claves y valores correspondientes.

13. Juego de adivinar el número:
Escribe un juego en el que el programa elija un número aleatorio y el usuario debe adivinarlo. Proporciona pistas de si el número es mayor o menor. Que el usuario tenga como maximo 5 intentos. Si el usuario no adivina el numero, mostrar un mensaje de que perdio y mostrar el numero que el programa habia elegido.

14. Buscar y reemplazar:
Escribe una función que tome una cadena de texto, busque una palabra específica y la reemplace por otra.
 */

//1. Sumar elementos en un array:
const sumar22 = (array) => {
  const suma = array.reduce((acc, el) => acc + el, 0)
  return suma
}

console.log(sumar22([2, 3, 4]))
//2. Encontrar el número más grande:
const masGrande = (array) => {
  const grande = array.reduce((inicial, el) => {
    if (el > inicial) {
      return el
    } else {
      return inicial
    }
  })
  return grande
}

console.log(masGrande([10, 2, 3, 4]))

// 3 Filtrar elementos pares:filter solo con constantes de afuera?
const numbersPares = [1, 2, 3, 4]
const numerosblabla = [2, 3, 6]

const result = numbersPares.filter((array) => array % 2 === 0)
const result2 = numbersPares.filter((array) => array % 2 !== 0)
const result3 = [].filter((array) => array % 2 === 0)

console.log(result)

// 4 contar palabras
const texto = "Esta es una cadena de ejemplo para contar palabras en JavaScript"

const newTexto = texto.split(" ")
const contarPalabras = newTexto.length
console.log(contarPalabras)

//5 Encontrar duplicados

const numerosRepetidos = [2, 2, 2, 2, 3, 3, 5, 6]

function encontrarDuplicados(array) {
  const duplicados = [] // Aca vamos a guardar los elementos duplicados, ej: [2, 3]
  const elementosRevisados = {} // Aca vamos a guardar los elementos que ya fueron revisados, ej: { 2: 2, 3: 2, 5: 1, 6: 1 }

  // Recorremos el array
  array.forEach((el) => {
    if (elementosRevisados[el] === undefined) {
      // Si el elemento no esta en el objeto elementosRevisados, lo agregamos con el valor 1
      elementosRevisados[el] = 1
    } else if (elementosRevisados[el] === 1) {
      // Si el elemento ya esta en el objeto elementosRevisados, lo agregamos al array duplicados
      duplicados.push(el)
      // Y aumentamos en 1 el valor del elemento en el objeto elementosRevisados
      elementosRevisados[el]++
    }
  })

  // Retornamos el array duplicados - [2, 3]
  return duplicados
}

console.log(encontrarDuplicados(numerosRepetidos))

// 6. Calculadora de propina:
function calcularPropina(total, porcentajeDePropina) {
  const propina = total * (porcentajeDePropina / 100)
  return propina
}

console.log(calcularPropina(100, 10))

//7. Calcular promedio: Escribe una función que calcule el promedio de un array de números.

console.clear()
const prueba = [2, 4]

const promedioP = (array) => {
  const sumaDeElementos = array.reduce((acc, el) => acc + el, 0)
  const promediosss = sumaDeElementos / array.length
  return promediosss
}

console.log(promedioP(prueba))

//8. Convertir Celsius a Fahrenheit:

const convertirCelaFahr = (celscius) => {
  const convertido = (celscius * 9) / 5 + 32
  return convertido
}

console.log(convertirCelaFahr(0))

//9. Contar las ocurrencias de un elemento en un array:
function contarOcurrenciasForEach(array, el) {
  // En el forEach, necesitamos tener una variable auxiliar que nos cuente las ocurrencias
  let contador = 0
  array.forEach((elemento) => {
    if (elemento === el) {
      // Si el elemento actual es igual al elemento que estamos buscando, aumentamos el contador en 1
      contador++
    }
  })
  return contador
}

console.log(contarOcurrenciasForEach([1, 2, 3, 4, 5, 5, 5, 5, 5], 5))

function contarOcurrenciasReduce(array, el) {
  // En el reduce, no necesitamos variable auxiliar porque tenemos el acumulador. El acumulador va a ser el contador
  const contador = array.reduce((contador, elemento) => {
    if (elemento === el) {
      // Si el elemento actual es igual al elemento que estamos buscando, aumentamos el contador en 1
      return contador + 1
    } else {
      // Si no, retornamos el contador sin modificar
      return contador
    }
  }, 0)

  return contador
}

//12 Generar un objeto a partir de dos arrays:
const claves = ["nombre", "apellido", "edad"]
const valores = ["Luka", "Modric", 30]
const objeto = {}
function generarObjeto(claves, valores) {
  claves.forEach((clave, index) => {
    // 1er vuelta
    // clave = "nombre"
    // index = 0
    // valores[index] = "Luka"
    objeto[clave] = valores[index]
  })
  return objeto
}

console.log(generarObjeto(claves, valores))

//13 Juego de adivinar el número: Math.random() devuelve un numero aleatorio entre 0 y 1. Prompt para pedir datos al usuario. Alert para mostrar un mensaje al usuario. Condicionales. Bucles. Funciones.

console.log(Math.random())

//14 Buscar y reemplazar:
const texto2 =
  "Esta es una cadena de ejemplo para contar palabras en JavaScript"

const textoNuevo = texto2.replaceAll("a", "o")

console.log(textoNuevo)

//13 Adivinar el numero:
function game() {
  const numero = Math.floor(Math.random * 100 + 1) // Numero aleatorio entre 1 y 100
  let intentos = 0 // Variable que va a contar los intentos del usuario

  // Usar un bucle para que el usuario pueda ingresar un numero hasta 5 veces
}

// do {
// Se hace tal cosa
// } while () // Mientras se cumpla tal condicion

// 10. Verificar palíndromos:
//Escribe una función que verifique si una palabra o frase es un palíndromo (se lee igual al derecho y al revés).
function esPalindromoLetras(frase) {
  const aMinuscula = frase.toLowerCase().replace(/\s/g, "")
  const copiaReversa = aMinuscula.split("").reverse().join("")

  if (aMinuscula == copiaReversa) {
    return true
  } else {
    return false
  }
}

console.log(esPalindromoLetras("Hola mundo"))

//11. Clasificar estudiantes:
const estudiantes = [
  { nombre: "Luka", nota: 10 },
  { nombre: "Roberto", nota: 9 },
  { nombre: "Jr", nota: 11 },
]

console.log(estudiantes[0])

const estudiantesOrdenado = estudiantes.sort(function name(a, b) {
  return b.nota - a.nota
})

console.log(estudiantesOrdenado)

//13 Juego de adivinar el número: Math.random() devuelve un numero aleatorio entre 0 y 1. Prompt para pedir datos al usuario. Alert para mostrar un mensaje al usuario. Condicionales. Bucles. Funciones.

function game() {
  //math floor redondea para abajo 1,21 lo deja en 1
  //math random da numeros random
  const numero = Math.floor(Math.random() * 100 + 1) // Numero aleatorio entre 1 y 100
  let intentos = 0 // Variable que va a contar los intentos del usuario
  console.log(numero)
  do {
    //LE PIDO AL USUARIO QUE INGRESE UN NUMERO ENTRE 1 Y 100
    let adivinar = Number(prompt("Introduce un numero entre 1 y 100"))

    //INCREMENTO EL CONTADOR DE LOS INTENTOS
    intentos++
    // si adivinar es estricamente IGUAL al numero de entrada GANASTE
    if (adivinar === numero) {
      alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`)
      break // si adivina termina el juego
    } else {
      alert(`El numero no es correcto, sigue intentando`)
    }

    if (intentos >= 5) {
      alert(
        `Lo siento, has alcanzado el límite de intentos. El número era ${numero}.`
      )
      break // Termina el juego después de 5 intentos
    }
  } while (true)
}

function game2() {
  const numero = Math.floor(Math.random() * 100 + 1)

  console.log(numero)
  let intentos = 0

  do {
    const adivinar = Number(prompt("Introduce un numero entre 1 y 100"))

    intentos++

    if (adivinar === numero) {
      alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`)
      return
    } else {
      alert(`El numero no es correcto, sigue intentando`)
    }
  } while (intentos < 5)

  alert(
    `Lo siento, has alcanzado el límite de intentos. El número era ${numero}.`
  )
}

game2()
