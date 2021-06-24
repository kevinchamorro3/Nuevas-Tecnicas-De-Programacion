/**
 * Async-Await
 */
function promesa(flag){
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(() => {
                resolve("Peticion resuelta"); 
            }, 3000);
        } else {
            reject("La operacion fallo");
        }
    });
}
function promesa2(flag){
    return new Promise((resolve, reject)=>{
        if (flag) {
            setTimeout(() => {
                resolve("Peticion resuelta"); 
            }, 3000);
        } else {
            reject("La operacion fallo");
        }
    });
}

(async() => {
    try {
        var respuesta = await promesa(true);
        console.log(respuesta);
        var respuesta2 = await promesa2(false);
        console.log(respuesta2);
    } catch (error) {
        console.log(error);
    }
})()
console.log("Finalizando...");