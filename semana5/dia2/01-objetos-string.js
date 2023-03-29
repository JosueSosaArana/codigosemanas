/**
 * Propuedades de los string
 */

let frase = "los programadores crean lo que las personas imaginan";
console.log(frase);

/**
 * length: nos devuelve la longitud de la cadena
 */

console.log(frase.length);

/**
 * tolowercase: nos devuelve la cadena en minusculas
 */

console.log(frase.toLowerCase());

/**
 * toUppercase: nos devuelve la cadena en mayusculas
 */

console.log(frase.toUpperCase());

/**
 * trim: nos devuelve la cadena sin espacios al inicio y al final
 */

console.log("trim", "   hola mundo   ".trim());

/**
 * substring: nos devuelve una subcadena desde la posicion inicial hasta la final   
 */

console.log("substring", frase.substring(8, 3));