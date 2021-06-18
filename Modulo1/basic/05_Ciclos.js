//
// while () {
    
// }
//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
//for in
var persona={
    nombre:"Kevin",
    apellido:"Chamorro",
    edad:27,
    viajes:{
        destino1:"Colombia",
        destino2:"Mexico"
    }
};
for (const key in persona) {
    console.log(persona[key]);
}