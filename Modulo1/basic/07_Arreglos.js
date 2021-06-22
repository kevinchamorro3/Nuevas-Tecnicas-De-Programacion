/**
 * Concat
 */
var numeros=[1,2,3,4,5];
console.log(numeros);
var nuevoNumeros=numeros.concat([6,7,8,9]);
console.log(nuevoNumeros);

/**
 * Join
 */
console.log(numeros.join("-"));
var nombre=["K","e","v","i","n","v"];
console.log(nombre.join(""));
/**
 * Slice
 */
console.log(nombre.slice(2));
/**
 * Index of
 */
console.log(nombre.indexOf("v"));
console.log(nombre.lastIndexOf("v"));
/**
 * reverse
 */
console.log(nombre.reverse());
/**
 * Sort
 */
var numerosDesordenados=[5,8,9,2,4,9,5,6,4,2,6];
console.log(numerosDesordenados.sort());
/**
 * shift
 */
console.log(numerosDesordenados.shift());
/**
 * pop
 */
console.log(numerosDesordenados.pop());
/**
 * push
 */
 numerosDesordenados.push(1012);
console.log(numerosDesordenados);

/**
 * Map
 */
var pares=[2,4,6,8,10];
console.log(pares.map((elemento)=>elemento+1));

/**
 * CONSULTAR FUNCIONES DE ARREGLOS
*/
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
/**
 * Longitud de arreglo
 */
 console.log('Numero de meses: ' + meses.length);
 /**
  * Si es un arreglo
  */
 if (Array.isArray(meses)) {
    console.log('Es un array');
} else {
    console.log('No es un array');
}
/**
 * Agregar al inicio
 */
 meses.unshift('Primer elemento');
 console.log(meses);

/*
*for each
 */
const arr = ["a", "b", "c", "d"];

arr.forEach((e) => console.log(e)); // Devuelve 'a' / 'b' / 'c' / 'd'
arr.forEach((e, i) => console.log(e, i)); // Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
arr.forEach((e, i, a) => console.log(a[0])); // Devuelve 'a' / 'a' / 'a' / 'a'
/**
 * Filter
 */
 const arre = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
 const nuevoArr = arre.filter((e) => e[0] == "P");
 console.log(nuevoArr);