// un objeto puede tener funciones como atributos

const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  mantenimientos: [
    {
      fecha: "2020-01-01",
      kilometraje: 10000,
    },
    {
      fecha: "2020-02-01",
      kilometraje: 20000,
    },
  ],
  imprimirMarcaYModelo: function () {
    console.log(`Marca: ${this.marca} - Modelo: ${this.modelo}`);
  },
};

console.log("vehiculo", vehiculo);
vehiculo.imprimirMarcaYModelo();

const vehiculo2 = vehiculo;
vehiculo2.marca = "Mazda";

console.log("vehiculo", vehiculo);
console.log("vehiculo2", vehiculo2);

// funcion que crea objetos

function mantenimientos(pfecha = "", pkilometraje = 0, paceite = false) {
  return{
    fecha: pfecha,
    kilometraje: pkilometraje,
    aceite: paceite,
  };
}

function crearVehiculo(
  pmarca = "",
  pmodelo = "",
  panio = 0,
  pmantenimientos = []
) {
  const vehiculogenerico = {
    marca: pmarca,
    modelo: pmodelo,
    anio: panio,
    mantenimientos: pmantenimientos,
  };
  return vehiculogenerico;
}

const mazdaCX3 = crearVehiculo("mazda", "cx3", 2021, [mantenimientos("15-05-2023", 1200, true), mantenimientos("16-05-2024", 2400, true)]);
const bmwX4 = crearVehiculo("bmw", "x4", 2025);
const mercedesGLA450 = crearVehiculo();

console.log("mazdaCX3", mazdaCX3);
console.log("bmwX4", bmwX4);
console.log("mercedesGLA450", mercedesGLA450);
