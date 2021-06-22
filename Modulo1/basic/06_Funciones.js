/*
Funciones declarativas
*/
//retorno de valores
function saludar(){
    return "Hola, soy Kevin";
}
//funciones voids
function saludar2(){
    console.log("Hola, soy Kevin");
}
//funciones con parametros
function saludarConParametros(nombre,apellido){
 return "Hola soy "+nombre+" "+apellido;
}
console.log(saludarConParametros("Kevin","Chamorro"));
//funciones con parametros por defecto
function saludarConProfesion(nombre="Persona",profesion="Analista de Sistemas"){
    return `Hola soy ${nombre} y mi profesion es ${profesion}`;
}
console.log(saludarConProfesion("Kevin","Desarrollador"));
//saludar()
// var resultado=saludar();
// console.log(resultado);
// console.log(saludar());
//saludar2();

/**
 * Funciones expresivas-funciones anonmas
 */

var saludoconEdad= function(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad} año(s)`;
}
console.log(saludoconEdad("Kevin",27));

var saludoConApellido= (nombre,apellido) => {
    return `Hola soy ${nombre} ${apellido}`;
}
console.log(saludoConApellido("Kevin","Cruz"));

/**
 * Funciones con parametros de otras funciones
*/

function saludoConFunciones (nombre, cb){
    return cb(nombre);
}

var miSaludo = saludoConFunciones("Kevin",function(nombre){
    return `Hola soy ${nombre}`;
})
console.log(miSaludo);

var miSaludo2= saludoConFunciones("Kevin",(nombre) => `Hola soy ${nombre}`)
console.log(miSaludo2);

setTimeout(() => {
    console.log("Hola mundo");
}, 3000);

setInterval(() => {
    console.log("Hola mundo intervalo");
}, 2000);