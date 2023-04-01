function validarSiesnumero(numero, tipo) {
  return isNaN(numero) ? `Mensaje error: no se puede ${tipo}` : numero;
}

function sumar(numero1, numero2) {
  const suma = +(numero1) + +(numero2);

  return validarSiesnumero(suma, "sumar");
}

function restar(numero1, numero2) {
  const rest = +(numero1) - +(numero2);

  return validarSiesnumero(rest, "resta");
}

function multiplicar(numero1, numero2) {
  const por = +(numero1) * +(numero2);

  return validarSiesnumero(por, "multiplicacion");
}

function dividir(numero1, numero2) {
  if (+numero2 === 0) {
    return "No se puede dividir por 0";
  }

  const div = +(numero1) / +(numero2);

  return validarSiesnumero(div, "divicion");
}
