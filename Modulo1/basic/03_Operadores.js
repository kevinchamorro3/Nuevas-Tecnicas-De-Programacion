// asignacion
//=
//comparaciones

/*
    ==
    === estrictamente igual
    console.log(2==2);
    console.log(2==='2');
    console.log(2=='2');
*/
/*
    != no es igual
    console.log(3 != 2);
*/
/*
    <
    <=
    >
    >=
*/
//operadores de asginacion compuestos
/*
    +=
    -=
    /=
    *=
    %=
    **=
    var  numero= 3;
    numero-=5;
    console.log(numero);
*/
//operadores aritmeticos
/**
 * +
 * -
 * *
 * /
 * %
 * **
 */
// desestructurar objetos
var persona={
    nombre:"Kevin",
    apellido:"Chamorro",
    edad:27,
    viajes:{
        destino1:"Colombia",
        destino2:"Mexico"
    }
};

var{nombre:nom,apellido,edad,viajes:{destino1}}=persona;
console.log(persona);
console.log(nom);
console.log(apellido);
console.log(destino1);
