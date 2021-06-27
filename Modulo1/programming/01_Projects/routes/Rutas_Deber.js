//importamos router
const { Router } = require("express");
const rutas = Router();
// Datos json
const datosJson = require("../data.json");

const modificarUpper = datosJson.map((persona) => {
  persona.first_name=persona.first_name.toUpperCase()
  persona.last_name=persona.last_name.toUpperCase()
  return persona
});

rutas
.get("/users", (req, res) => {
    const {query:{id}}=req
    if (id!=null) {
        var filtroId = modificarUpper.filter((persona)=>persona.id===parseInt(id,10))
        res.send(filtroId)
    } else {
        res.send(modificarUpper)
    }
})
.get("/users/:apellido",(req,res)=>{
    const {params:{apellido}}=req
    var filtrarApellido =modificarUpper.filter((persona)=>persona.last_name===apellido)
    console.log(filtrarApellido);
    if (filtrarApellido[0] != undefined) {
        const correo= filtrarApellido.map((p)=>{
            delete p.id
            delete p.first_name
            delete p.last_name
            return p
        })
        res.send(correo)
    }else{
        res.json({
            mensaje:"El apellido "+apellido+" no existe",
            body: []
        })
    }
})
//Exportamos rutas
module.exports.RutasDeber = rutas;