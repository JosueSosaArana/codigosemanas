// EJERCICIOS
/**Dados 3 numeros enteros, evaluar el mayor de
 * los tres numeros dados
 */
const n1 = 81;
const n2 = 20;
const n3 = 80;

debugger;

if (n1 > n2) {
  if (n1 > n3) {
    console.log("El numero mayor es  ", n1);
  } else {
    console.log("El numero mayor es  ", n3);
  }
} else {
  if (n2 > n3) {
    console.log("El numero mayor es  ", n2);
  } else {
    console.log("El numero mayor es  ", n3);
  }
}

/**
 * Ejercicio
 * Dado un año, ejm 2020, evaluar si es bisiesto
 * Es bisieto si:
 * 1. Es divisible entre 4
 * 2. No es divisible entre 100
 * 3. Es divisible entre 400
 */

// PRIMERA FORMA

const año = 2023;

if (año % 4 === 0) {
  if (año % 100 !== 0) {
    console.log("Es bisiesto");
  } else {
    if (año % 400 === 0) {
      console.log("Es bisiesto");
    } else {
      console.log("No es bisiesto");
    }
  }
} else {
  console.log("No es bisiesto");
}

// SEGUNDA FORMA

if (año % 4 === 0 && año % 100 !== 0) {
  console.log("Es bisiesto");
} else {
  if (año % 400 === 0) {
    console.log("Es bisiesto");
  } else {
    console.log("No es bisiesto");
  }
}

// TERCERA FORMA

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
  console.log(año," Es bisiesto");
} else {
  console.log(año," No es bisiesto");
}
