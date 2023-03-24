// una funcion es un bloque de codigo que se ejecuta cuando es llamado para realizar una tarea especifica

function nombredelaFuncion() {
  // codigo a ejecutar
  console.log("Hola mundo");
  alert("Hola mundo");
}

//nombredelaFuncion();

const sumar = (numero1, numero2) => {
  const suma = numero1 + numero2;

  console.log("La suma es : ", suma);
};

sumar(10, 20);

//Tipos de funciones
// existen 3 tipos de funciones -declarativa - expresion o anonima y arrow function

// anteponemos la palabra función

function suma(a, b, c) {
  return a + b + c;
}
console.log(suma(10, 10, 10));

// funcion expresiva o anonima

let suma2 = function (a, b) {
  return a + b;
};
console.log(suma2(10, 10));

// funcion flecha

const suma3 = (x, y) => {
  return x + y;
};
console.log(suma3(10, 10));

// funcion saludar al alumno

const saludar = (nombre, apellido) => {
  //return"Hola mi nombre es  " + nombre + " " + apellido;

  //template string
  return `Hola mi nombre es ${nombre} ${apellido}`;
};

console.log(saludar("Josue", "Sosa"));

//__________________
// Funcion para ingresara y mostra nombre

const mostrarNombre = () => {
  let nombre = document.getElementById("nombreUsuario");
  let title = document.getElementById("reemplazo");
  let mensaje = "Tu nombre es: " + nombre.value;

  title.textContent = mensaje;
};

//Ejercicio 1

const mostrarTexto = () => {
  let texto = document.getElementById("inputTexto");
  let title = document.getElementById("titulo");

  title.textContent = mensaje;
};

//Ejercicio 2
const mostrarTexto2 = () => {
  let texto = document.getElementById("inputTexto2");
  let title = document.getElementById("titulo2");
  let mensaje = "Mi artista favorito es " + texto.value;

  title.textContent = mensaje;
};

//___________________
const ComenzarAlarma = () => {
  setTimeout(tiempoCumplido, 1000 * 5);
};

const tiempoCumplido = () => {
  alert("Se cumplio el tiempo");
};

// Ejercicio

let elementosSegundos = document.getElementById("tiempoElegido");
let elementoTextoAlarma = document.getElementById("textoAlarma");

const comenzarTiempo = () => {
  setTimeout(tiempoCumplido2, 1000 * elementosSegundos.value);
};

const tiempoCumplido2 = () => {
  elementoTextoAlarma.textContent = "Encendido";
  elementoTextoAlarma.style.color = "green";
};
