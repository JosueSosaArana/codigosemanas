/**
 * Tabla de multiplicar de un numero n
 * 1-12
 */

const n = 7;

for (let i = 0; i <= 12; i++) {
  console.log(n + " x " + i + " = " + n * i);
}

/**
 * Ejercicio
 * Obtener la multiplicacion de 2 números a*b
 * pero no usar el operador de multiplicacion
 * usar solamente sumas
 * usar el ciclo for
 */

const a = 4;
const b = 7;

let resultado = 0;

for (let i = 0; i < b; i++) {
  resultado += a;
}

console.log( a + ' x ' + b +  ' = ' + resultado);