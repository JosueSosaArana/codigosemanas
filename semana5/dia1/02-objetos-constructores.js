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
    }
  ], 
  imprimirMarcaYModelo: function() {
    console.log(`Marca: ${this.marca} - Modelo: ${this.modelo}`);
  }
};

console.log("vehiculo", vehiculo);
vehiculo.imprimirMarcaYModelo();

const vehiculo2 = vehiculo;
vehiculo2.marca = "Mazda";

console.log("vehiculo", vehiculo);
console.log("vehiculo2", vehiculo2);

// funcion que crea objetos

function crearVehiculo(pmarca,pmodelo,panio,pmantenimientos) {
    const vehiculogenerico = {
        marca: pmarca,
        modelo: pmodelo,
        anio: panio,
        mantenimientos: pmantenimientos
    };
    return vehiculogenerico;
}

const mazdaCX3 = crearVehiculo("mazda","cx3",2021);
const bmwX4 = crearVehiculo("bmw","x4",2025);

console.log("mazdaCX3", mazdaCX3);
console.log("bmwX4", bmwX4);