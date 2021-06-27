const express = require("express");
//genera una aplicacion express
const app = express();
//routas deber
const {RutasDeber}=require('./routes/Rutas_Deber')
app.use('/deber-video',RutasDeber)
const {RouterIndex}=require('./routes/index')
app.use('/',RouterIndex)
// app.use('/user',RouterIndex)
// app.use('/user/data',RouterIndex)
//app.use(RouterIndex)
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
