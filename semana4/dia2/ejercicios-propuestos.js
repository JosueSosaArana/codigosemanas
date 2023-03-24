/**
 * Ejercicio 3.1
 * Realice un algoritmo para determinar si una persona puede votar
 * con base en su edad en las próximas elecciones.
 */

console.log("------Ejercicio 3.1------");

const edad = 16;
const puedeVotar = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(puedeVotar + " debido a su edad");

/**
 * Ejercicio 3.2
 * Realice un algoritmo para determinar el sueldo semanal de un trabajador
 * con base en las horas trabajadas y el pago por hora, considerando
 * que después de las 40 horas cada hora se considera como excedente y se paga el doble
 */

console.log("------Ejercicio 3.2------");

const horasTrabajadas = 45;
const pagoPorHora = 10;
let sueldoSemanal = 0;

if (horasTrabajadas > 40) {
  sueldoSemanal = 40 * pagoPorHora + (horasTrabajadas - 40) * pagoPorHora * 2;
} else {
  sueldoSemanal = horasTrabajadas * pagoPorHora;
}
console.log(
  "El sueldo semanal por " +
    horasTrabajadas +
    " horas trabajadas es de S/." +
    sueldoSemanal
);

/**
 * Ejercicio 3.3
 * El 14 de febrero una persona desea comprarle un regalo al ser querido que más aprecia
 * en ese momento, su dilema radica en qué regalo puede hacerle, las alternativas que
 * tiene son lassiguientes:
 * -Tarjeta: 10 soles o menos
 * -Chocolates: entre 11 y 100 soles
 * -Flores: entre 101 y 250 soles
 * -Anillo: más de 251 soles
 */

console.log("------Ejercicio 3.3------");

const prosupuesto = 300;
let regalo = "";

if (prosupuesto <= 10) {
  regalo = "Tarjeta";
} else {
  if (prosupuesto <= 100) {
    regalo = "Chocolates";
  } else {
    if (prosupuesto <= 250) {
      regalo = "Flores";
    } else {
      regalo = "Anillo";
    }
  }
}
console.log("El regalo que puede comprar es un " + regalo);

/**
 * Ejercicio 3.4
 * El dueño de un estacionamiento requiere un diagrama de flujo con
 * el algoritmo que le permita determinar cuánto debe cobrar por el
 * uso del estacionamiento a sus clientes. Las tarifas que se tienen sonlas siguientes:
 */

console.log("------Ejercicio 3.4------");

const horas = 13;
let costo = 0;

if (horas <= 2) {
  costo = 5 * horas;
} else {
  if (horas <= 5) {
    costo = 10 + (horas - 2) * 4;
  } else {
    if (horas <= 10) {
      costo = 22 + (horas - 5) * 3;
    } else {
      costo = 37 + (horas - 10) * 2;
    }
  }
}
console.log("El costo por " + horas + " horas es de $" + costo);

/**
 * Ejercicio 3.5
 * Se tiene el nombre y la edad de tres personas. Se desea saber el
 * nombre y la edad de la persona de menor edad.
 */

console.log("------Ejercicio 3.5------");

const persona1 = {
  nombre: "Bertha",
  edad: 2,
};
const persona2 = {
  nombre: "Maria",
  edad: 15,
};
const persona3 = {
  nombre: "Jorge",
  edad: 6,
};

let menorEdad = persona1.edad;
let nombreMenorEdad = persona1.nombre;

if (persona2.edad < menorEdad) {
  menorEdad = persona2.edad;
  nombreMenorEdad = persona2.nombre;
} else {
  if (persona3.edad < menorEdad) {
    menorEdad = persona3.edad;
    nombreMenorEdad = persona3.nombre;
  }
}

console.log(
  "La persona de menor edad es " +
    nombreMenorEdad +
    " con " +
    menorEdad +
    " años"
);