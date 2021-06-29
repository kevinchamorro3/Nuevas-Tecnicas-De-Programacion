const { Router } = require("express");
const router = Router();
const datos = require("../data.json");
const cambiarApellidosNombre = datos.map((per) => {
    per.last_name = per.last_name.toUpperCase();
    per.first_name = per.first_name.toUpperCase();

    return per;
});
router
    .get("/users", (req, res) => {
        res.send(cambiarApellidosNombre);
    })
    .get("/users-query", (req, res) => {
        const {
            query: { id }
        } = req;
        if (id != null) {
            const filtrarXId = cambiarApellidosNombre.filter((per) => per.id === parseInt(id, 10))
            res.send(filtrarXId)
        } else {
            res.send(cambiarApellidosNombre)
        }
    })
    .get("/users-params/:apellido", (req, res) => {
        const {
            params: { apellido }
        } = req;
        const filtrarXApellido = cambiarApellidosNombre.filter(
            (per) => per.last_name == apellido
        );
        if (filtrarXApellido[0] == null) {
            res.json({
                msg: apellido + " no existe",
                body: {}
            });
        } else {
            const correo = filtrarXApellido.map((per) => {
                delete per.id
                delete per.first_name
                delete per.last_name
                return per
            });
            res.send(correo);
        }
    });
module.exports.Deber = router;