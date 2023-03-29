/**
 * la clase date sirve para trabajar con fechas
 */

let hoy = new Date();

console.log(hoy);

/**
 * getFullYear() -> devuelve el año
 */

console.log("Año: ", hoy.getFullYear());

/**
 * getMonth() -> devuelve el mes
 */

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];


console.log("mes: ", hoy.getMonth());
console.log("mes: ", meses[hoy.getMonth()]);

/**
 * gethours
 * getminutes
 * getseconds
 */

console.log("hora: ", hoy.getHours());
console.log("minutos: ", hoy.getMinutes());
console.log("segundos: ", hoy.getSeconds());

/**
 * getday -> devuelve el dia de la semana
 */

let dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

console.log("dia: ", dias[hoy.getDay()]);

/**
 * resta de fechas
 */

let fiestaspatrias = new Date("2023-06-28");
let navidad = new Date("2023-12-25");

const milisegundos = navidad - fiestaspatrias;
const diasentrelasfechas = (((milisegundos/1000)/60)/60)/24;

console.log("dias entre fiestas patrias y navidad: ", diasentrelasfechas);
