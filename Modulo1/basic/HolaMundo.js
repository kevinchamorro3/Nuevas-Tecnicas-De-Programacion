console.log("Hola mundo");
//consultar las funciones de console
console.clear();//limpioar consola
var variable="Mensaje console";
console.log(variable);
console.warn(variable);// Warning
console.error(variable);// Error simple sin dejar de ejecutar el codigo.
console.info(variable);// Informativo
var datos = [
    {nombre: "Juan", apellido: "Alonso", edad: 21, pais: "ES", admitido: true},
    {nombre: "Pepe", apellido: "Alonso", edad: 23, pais: "ES", admitido: false},
    {nombre: "Raúl", apellido: "Alonso", edad: 34, pais: "MX", admitido: true},
    {nombre: "Luis", apellido: "Alonso", edad: 19, pais: "IT", admitido: false}
    ]
    // Mostrar la tabla de datos
console.table(datos);

