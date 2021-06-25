//traeos el paquete
const { Router } = require("express");
//iniciazamos router
const router = Router();
//trtaer data
const data =require('../data.json')
//creacion  de los entpoint
router
    .get("/", (req, res) => {
        res.send("Hoala mundo con ExpresJs");
    })
    .get("/users", (req, res) => {
        res.json({
            msg:"Lista de usuairios",
            body:data
        });
    })
    .get("/saludo", (req, res) => {
        const {
            query: { nombre, apellido },
        } = req;
        res.json({
            saludo: "mundo",
            nombre: nombre,
            apellido: apellido,
        });
    })
    .get("/saludo/:nombre", (req, res) => {
        const {
            params: { nombre },
        } = req;
        res.json({
            saludo: "mundo",
            nombre: nombre,
        });
    })
//Exportamos rutas
module.exports.RouterIndex = router;
//middlewares con exprexs
