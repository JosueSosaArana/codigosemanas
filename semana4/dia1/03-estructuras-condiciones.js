// Estructuras condicionales
const edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log("------ejercicio------");
// haCer un algortimo para aplicar un escuento del 15% de la compra total si y solo si
// el dia de la semana es martes. en caso contratio, no aplicar ningun descuento

// OKO: no usar sentencia else

const dia = "jueves";
const totalComprado = 580;
let resultado = totalComprado;

if (dia === "martes") {
  resultado = totalComprado - totalComprado * 0.15;
}

console.log("Total a pagar " + resultado);

console.log("------ejercicio------");

// Modificar el anterior ejercicio, para que el descuento se realice
// si y solo si el dia es marte y el valor de compra
// excede los 1000 soles

if (dia === "martes") {
  if (totalComprado > 1000) {
    resultado = totalComprado - totalComprado * 0.15;
  } else {
    console.log("Es martes pero no califica por compras menores a 1000");
  }
} else {
  console.log("No califica por no ser martes");
}

console.log("Total a pagar ", resultado);
