const productos = [
  { id: "1", nombre: "Trío Clásico", precio: 3500, img: "../img/b1.png", idCat:"1"},
  { id: "2", nombre: "AroExplosión", precio: 3700, img: "../img/b2.png", idCat:"1"},
  { id: "3", nombre: "PapaExplosión", precio: 3700, img: "../img/b3.png", idCat:"1"},
  { id: "4", nombre: "SonrisaBurger", precio: 3000, img: "../img/b4.png", idCat:"1"},
  { id: "5", nombre: "PepinilloTango", precio: 3800, img: "../img/b5.png", idCat:"1"},
  { id: "6", nombre: "Big Clásica", precio: 4700, img: "../img/b6.png", idCat:"1"},
  { id: "7", nombre: "Veggie Clásico", precio: 4200, img: "../img/b7.png", idCat:"2"},
  { id: "8", nombre: "Mini Veggie", precio: 3500, img: "../img/b8.png", idCat:"2"},
  { id: "9", nombre: "PapaFiesta", precio: 2700, img: "../img/p1.png", idCat:"3"},
  { id: "10", nombre: "NuggetRitmo", precio: 3300, img: "../img/p2.png", idCat:"3"},
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria );
            resolve(productosCategoria);
        },2000)
    })
}

