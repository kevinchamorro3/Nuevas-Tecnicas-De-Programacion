//como se ahacia antes
function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}
Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura;
};
var rectangulo = new Rectangulo(6, 5);
//console.log(rectangulo.calcularArea());
//declaracion de clases
class Rectangulo2 {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}
var rectangulo2 = new Rectangulo2(6, 5);
//console.log(rectangulo2.calcularArea());

// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>

/**
 * DEBER
 */
////////CLASE PEROSNA
class Persona {
    constructor(cedula, nombre, apellido, edad, genero) {
        this._cedula = cedula;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._genero = genero;
    }
    //Gtter y setter
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get apellido() {
        return this._apellido;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set genero(genero) {
        this._genero = genero;
    }
    get genero() {
        return this._genero;
    }
}
//Implementacion
var persona = new Persona();
persona.nombre = "Kevin";
persona.apellido = "Chamorro";
console.log("Mi nombre es " + persona.nombre + " " + persona.apellido);

////////METODOS ESTATICOS CALSE PUNTO Y FUNCION DISTANCIA
class Punto {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static distancia(a, b) {
        const dx = a.x - b.y
        const dy = a.y - b.y
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    }
}
//Implementacion
var p1 = new Punto(10, 20)
var p2 = new Punto(10, 10)
console.log("La distancia es " + Punto.distancia(p1, p2));

//EXTENDS CLASE PERSONA A ESTUDIANTE
class Estudiante extends Persona {
    constructor(cedula, nombre,nivel) {
        super(cedula,nombre)
        this._nivel=nivel
    }
    set nivel(nivel){
        this._nivel=nivel
    }
    get nivel(){
        return this._nivel
    }
}
//implementar
var estudiante =new Estudiante(1210121415,"Luis","Primero")
console.log("Cedula: "+estudiante.cedula);
console.log("Nombre: "+estudiante.nombre);
console.log("Nivel: "+estudiante.nivel);
