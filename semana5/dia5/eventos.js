function imprimir() {
  console.log("Hola");
}

function CalculatorHTML(operacion) {
  // 1. Obtener los valores de los inputs
  const numero1 = document.querySelector("#numero1").value;
  const numero2 = document.querySelector("#numero2").value;
  // validar que los datos no esten vacios
  if (numero1 === "" || numero2 === "") {
    alert("Completa los datos");
    return;
  }

  let resultado = 0;

  if (operacion === "+") {
    resultado = sumar(numero1, numero2);
  }
  if (operacion === "-") {
    resultado = restar (numero1, numero2);
  }
  if (operacion === "*") {
    resultado = multiplicar(numero1, numero2);
  }
  if (operacion === "/") {
    resultado = dividir(numero1, numero2);
  }

  // para acabar debo mostrar el resultado en el html

  const p = document.createElement("p");
  const value = document.createTextNode(resultado);
  p.appendChild(value);

  const contenedor = document.querySelector("#resultado");
  contenedor.appendChild(p);
}

