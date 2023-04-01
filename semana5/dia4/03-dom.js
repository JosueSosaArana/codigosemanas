document.write("Hola otra vez");

// vamos a crear una lista usando js
// 1) insertar una lista dentro del dic #
// 2) insertar elementos dentro de la lista

// paso 1: captura el elemento que usaras
const containerList = document.querySelector("#container-list");

// paso 2: crear el elemento que vas a insertar
const ul = document.createElement("ul");
ul.className = "lista";

// paso 3: iterar sobre el elemento que vas a insertar
const inputs = Array.from(document.querySelectorAll("input"));
inputs.map((input) => {
  const li = document.createElement("li");
  const contenido = document.createTextNode(input.value);
  ul.appendChild(contenido);
  ul.appendChild(li);
});
