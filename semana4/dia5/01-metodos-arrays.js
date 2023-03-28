const alumnos = [ 'Juan', 'Pedro', 'Maria', 'Jose', 'Luis' ];

// método for

for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);
}

// método forEach

alumnos.forEach((alumno, index) => {
    console.log(index, alumno);
});

// método map

const alumnosMayusculas = alumnos.map((alumno) => {
    return alumno.toUpperCase();
});

console.log(alumnosMayusculas);

// método filter

const alumnosConM = alumnos.filter((alumno) => {
    return alumno !== 'Maria';
});

console.log(alumnosConM);

// método find

const alumnoEncontrado = alumnos.find((alumno) => {
    return alumno === 'Maria';
});

console.log(alumnoEncontrado);

// método findIndex

const indiceAlumno = alumnos.findIndex((alumno) => {
    return alumno === 'Maria';
});

console.log(indiceAlumno);

// método reduce

const suma = alumnos.reduce((acumulador, alumno) => {
    return acumulador + alumno.length;
}, 0);

console.log(suma);

// método some

const hayAlumnos = alumnos.some((alumno) => {
    return alumno === 'Maria';
});

console.log(hayAlumnos);