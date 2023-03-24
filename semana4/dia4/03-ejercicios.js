function CallMenu() {
  let clave = prompt(
    "Ingrese el número del ejercicio que desea ejecutar: \n 1.Suma \n 2.Promedio de examenes \n 3.Área del rectángulo \n 4.Área del triángulo \n 5.Área del círculo"
  );
  switch (clave) {
    case "1":
      let num1 = prompt("Ingrese el primer número: ");
      let num2 = prompt("Ingrese el segundo número: ");
      let resultado1 = (num1 + num2);
      alert ("La suma es ", resultado1);
      break;
    case "2":
      let nota1 = prompt("Ingrese la primera nota: ");
      let nota2 = prompt("Ingrese la segunda nota: ");
      let nota3 = prompt("Ingrese la tercera nota: ");
      let nota4 = prompt("Ingrese la cuarta nota: ");
      let resultado2 = ((nota1 + nota2 + nota3 + nota4) / 4  );
      alert ("El promedio de las notas es: ", resultado2)
      break;
    case "3":
      let baser = prompt("Ingresar la base del rectángulo: ");
      let alturar = prompt("ingresar la altura del rectángulo: ");
      let resultado3 = (baser * alturar);
      alert ("El área del rectángulo es : ", resultado3)
      break;
    case "4":
      let baset = prompt("Ingresar la base del triángulo: ");
      let alturat = prompt("ingresar la altura del triángulo: ");
      console.log("El área del triángulo es : ", (baset * alturat) / 2);
      break;
    case "5":
      let radio = prompt("Ingresar el radio del círculo: ");
      console.log("el area del círculo es: ", Math.PI * radio ** 2);
      break;
  }
}
