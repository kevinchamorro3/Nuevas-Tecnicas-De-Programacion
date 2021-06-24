const express = require("express");
//genera una aplicacion express
const app = express();
//End point
app.get("/", (req, res) => {
  res.send("Hoala mundo con ExpresJs");
});

app.get("/saludo", (req, res) => {
  const {
    query: { nombre, apellido },
  } = req;
  res.json({
    saludo: "mundo",
    nombre: nombre,
    apellido: apellido,
  });
});

app.get("/saludo/:nombre", (req, res) => {
  const {
    params: { nombre },
  } = req;
  res.json({
    saludo: "mundo",
    nombre: nombre,
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
