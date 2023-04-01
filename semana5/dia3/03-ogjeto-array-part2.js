/**
 * [].filter(elemento, index, array)
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log(numerosPares);

const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

// ejervicio para filtrar a los usuarios con correo gmail

let users = [
  {
    id: 1,
    email: "george.bluth@gmail.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    age: 12,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    age: 50,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    age: 35,
  },
  {
    id: 4,
    email: "eve.holt@gmail.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    age: 15,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    age: 17,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    age: 36,
  },
];

const usuariosGmail = users.filter((user) => user.email.includes("@gmail"));
console.log("usuariosGmail", usuariosGmail);

// enfoque destructurando el email directamente
// desventaja: ya no tengo acceso a os demas campos del user en cada iteracion

const usuariosGmail2 = users.filter(({ email }) => email.includes("gmail"));
console.log("Usuarios email: ", usuariosGmail2);

// FUNCION FIND

/**
 * [].find(elemento, index, array)=>{}
 */

const userId5 = users.find((user) => user.id === 5);
console.log("userId5", userId5);

const userId52 = users.filter((user) => user.id === 5);
console.log("userId52", userId52);

// FUNCION REDUCE

/**
 * [].reduce((sumatoria, elementoActual)=>{retorna la sumatoria + el nuevo elemento]
 */

const total = numeros.reduce((sumatoria, elementoActual) => {
  return sumatoria + elementoActual;
});
console.log("total:", total);

/**
 * [].splice(index, cantidadElementosEliminar, elmentosAInsertar)
 */

users.splice(4,1,{age: 21, first_name: "Josue", Last_name: "Sosa", id: 5, avatar:"", email: "JosueSosa@gmail.com"});
console.log("users", users);
