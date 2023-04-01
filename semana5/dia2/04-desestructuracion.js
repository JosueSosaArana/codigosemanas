const numeros = [10, 34, 56, 74, 36];

/**
 * copiar correctamente los valores de un array
 */

const nuevosnumeros = [...numeros];
nuevosnumeros[2] = 100;

console.log(numeros);
console.log(nuevosnumeros);

/**
 * desestructuracion por posicion
 */

const [a, b] = numeros;
console.log("a: " + a);
console.log("b: " + b);

/**
 * Operador rest o spread
 */

const [n1, n2, ...resto] = numeros;
console.log(n1);
console.log(n2);
console.log(resto);

const useState = () => {
    const saludo = () => {
        console.log("hola");
    };
    const despedida = () => {
        console.log("mundo");
    };
    return [saludo, despedida];
};

const [fn1, fn2] = useState();

fn1();
fn2();