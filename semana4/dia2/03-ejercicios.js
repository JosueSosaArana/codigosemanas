/**
 * Ejercicios 3.5
 *
 */

const nropersonas = 50;
let total = 0;
let costoplato = 0;

if (nropersonas > 200 && nropersonas <= 300) {
  costoplato = 85;
} else {
  if (nropersonas > 300) {
    costoplato = 75;
  } else {
    costoplato = 95;
  }
}

total = costoplato * nropersonas;
console.log(
  "Total a pagar para " + nropersonas + " personas es de S/." + total
);

/**
 * Ejercicio 3.8
 */

console.log("------Ejercicio 3.8------");

const nroAlumnos = 60;
let costoBus = 0;

if (nroAlumnos >= 100) {
  costoBus = nroAlumnos * 65;
} else {
  if (nroAlumnos >= 50) {
    costoBus = nroAlumnos * 70;
  } else {
    if (nroAlumnos >= 30) {
      costoBus = nroAlumnos * 95;
    } else {
      costoBus = 4000;
    }
  }
}

console.log("Total a pagar para " + nroAlumnos + " alumnos es de $ " + costoBus);