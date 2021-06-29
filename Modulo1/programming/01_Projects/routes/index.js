//traeos el paquete
const { Router } = require("express");
//iniciazamos router
const router = Router();
//trtaer data
const data =require('../data.json')
//Datavalidator
const {DataValidator}=require('../middlewares/DataValidator')
//esquema
const { user } = require("../lib/Schema/User");
//creacion  de los entpoint
router
    .get("/", (req, res) => {
        res.send("hola mundo");
    })
    .get("/users", (req, res) => {
        res.json({
            msg:"Lista de usuairios",
            body:data
        });
    })
    .get("/saludo",DataValidator("query",user), (req, res) => {
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
