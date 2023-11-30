const productos = [
  {
    id: 1,
    nombre: "Coca cola",
    precio: 2000,
    imagen:
      "https://ardiaprod.vtexassets.com/arquivos/ids/262780/Gaseosa-CocaCola-Sabor-Original-15-Lts-_2.jpg?v=638322399498430000",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Pepsi",
    precio: 1500,
    imagen:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080229_f.jpg",
    stock: 10,
  },
  {
    id: 3,
    nombre: "Sprite",
    precio: 1000,
    imagen:
      "https://depositoelmayorista.com.ar/wp-content/uploads/2019/12/unnamed-2-1.jpg",
    stock: 15,
  },
  {
    id: 4,
    nombre: "Fanta",
    precio: 500,
    imagen:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77908950010171-f5d162eb6218e6544815890789301064-640-0.jpg",
    stock: 20,
  },
]

const productosTag = document.getElementById("productos")

productos.forEach((producto) => {
  const card = `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: ${producto.stock}</p>
      <button class="btn btn-primary" id="btn-${producto.id}">Agregar al carrito</button>
  `
  productosTag.innerHTML += card
})
