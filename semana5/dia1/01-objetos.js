// Ejermplo de arreglos

const persona = ["Josue", 21, "casado"];
const persona1 = [
  "Jorge",
  23,
  "soltero",
  "Ing. Industrial",
  ["Blanco", "Verde"],
];

console.log(persona1[4][1]);

// Ejemplo de objetos

const persona2 = {
  nombre: "Josue",
  edad: 21,
  dni: "73958953",
  telefono: "123456789",
  estadoCivil: "casado",
  colorFavorito: "verde",
  idiomas: ["español", "ingles", "frances"],
  mascotas: ["perro", "gato", "leon", "tigre"],
  direccion: {
    calle: "Av. Siempre Viva",
    numero: 123,
    ciudad: "Springfield",
  },
};

console.log(
  "Calle ",
  persona2.direccion.calle,
  "Mascota favorita ",
  persona2.mascotas[1]
);

//  inyectando un nuevo atributo "idiomas"

persona2.idiomas.push("aleman");
console.log("Idioma actualizado: ", persona2);

// modificando un atributo "telefono"" 

persona2.telefono = "900911072";
console.log("Telefono actualizado: ", persona2);

// agregagnado un nuevo atributo
// No se recomienda agregar nuevos atributos

persona2.familiares = {};
persona2.familiares.padre = "Hipolito Sosa"
persona2.familiares.madre = "Marina Arana"
persona2.familiares.segundohermano = "Joel Sosa"
persona2.familiares.primerhermano = "Edgar Sosa"
persona2.familiares.tercerhermano = "Ruben Sosa"
persona2.familiares.hermana = "Damaris Sosa"
console.log("Mi padre se llama ", persona2)