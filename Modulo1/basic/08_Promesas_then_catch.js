/**
 * PROMESAS
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
// promesa(false)
//     .then((resultado)=>{
//         console.log(resultado);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
var segundaPromesa= (flag) => new Promise((resolve,reject)=>{
    if (flag) {
        setTimeout(() => {
            resolve("Peticion resuelta"); 
        }, 3000);
    } else {
        reject("Fallo");
    }
})
// segundaPromesa(true)
//     .then((resultado)=>{
//         console.log(resultado);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
//Cliente trabaja con then y catch
promesa(true)// peticion de clientes
    .then((resultado)=>{
        console.log(resultado);
        return segundaPromesa(false);
    })
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    });