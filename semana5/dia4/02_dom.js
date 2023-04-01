// queryselector and queryselectorall
// queryselector: returns the first element that matches the specified selector
// queryselectorall: returns all elements that matches the specified selector

// ambas funciones me permiten poder usar elementos html

const inputName = document.querySelector('input_name');
console.log(inputName);

// con ID

const inputPassword = document.querySelector('#input_password');
console.log(inputPassword);

// tagname

const input = document.querySelector('form');
console.log(input);

// esto en particular retorna un Nodelist y esto es compatible con foreach

const inputs = document.querySelectorAll('input');
console.log(inputs);

// quieo filtrar e iterar este nodelist

const arrayImputsText = [];

inputs.forEach((input) => {
  if (input.type === 'text') {
    arrayImputsText.push(input);
  }
});

console.log(arrayImputsText);

// ------------------------------------

const arrayConvertido = Array.from(inputs);
console.log(arrayConvertido);

const arrayFilter = arrayConvertido.filter((input) => input.type === 'text');
console.log(arrayFilter);

const arrayMap = arrayFilter.map((input) => input.value);
console.log(arrayMap);
