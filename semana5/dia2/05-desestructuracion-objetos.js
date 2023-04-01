const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  codigo: "a342",
  stock: 46,
  colores: ["rojo", "azul", "verde"],
};

/**
 * una forma correcta de copiar o clonar un objeto seria la siguiente
 */

const producto2 = { ...producto };

/**
 * deseestructuracion de atributos
 */

const { codigo, precio, ...rest } = producto;

console.log(codigo);
console.log(precio);
console.log(rest);

/**
 * deseestructuracion de atributos con nueos nombres de variables
 */

const { codigo: codigoProducto, precio: precioProducto, ...resto } = producto;

console.log(codigoProducto);
console.log(precioProducto);
console.log(resto);

// ejemplo
const random = (atributos) => {
    const {min, max} = atributos;
    return Math.floor(Math.random() * (max - min)) + min;
};

console.log(random({min: 100, max: 200}));

// let maxYmin = {
//     min: 100,
//     max: 200
// };

// random(maxYmin);

