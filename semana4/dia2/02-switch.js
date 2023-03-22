/**
 * Switch
 */

const dia = 1;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia no valido");
}

/**
 * Operador ternario
 */

// PRIMERA FORMA

const edad = 18;

const esMayorDeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

// SEGUNDA FORMA

console.log(edad > 18 ? "mayor de edad" : "menor de edad");
