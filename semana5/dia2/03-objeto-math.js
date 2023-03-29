/**
 * Objeto Math
 */

// Math.sqrt() --> retorna la raiz cuadrada de un numero

let raiz = Math.sqrt(9);

console.log(raiz);

// Math.pow(base,potencia) --> retorna la potencia de un numero

let potencia = Math.pow(27, 1/3);

console.log(potencia);

// Math.round() --> redondea un numero

let redondeo = Math.round(3.1416);

console.log(redondeo);

// Math.ceil() --> redondea un numero hacia arriba

let redondeoArriba = Math.ceil(10.01);

console.log(redondeoArriba);

// Math.floor() --> redondea un numero hacia abajo

let redondeoAbajo = Math.floor(9.98);

console.log(redondeoAbajo);

// Math.random() --> retorna un numero aleatorio entre 0 y 1

let aleatorio = Math.random();

console.log(aleatorio);

// artificio para obtener un numero aleatorio entre min y max

let min = 50;
let max = 850;

let aleatorio2 = (Math.random() * (max - min)) + min;

console.log(aleatorio2);

const random = (min, max) =>  Math.random() * (max - min) + min;

console.log(random(50, 850));
