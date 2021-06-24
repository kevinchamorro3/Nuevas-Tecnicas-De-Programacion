const express = require('express');
//genera una aplicacion express
const app =express()
//End point
app.get('/',(req,res)=>{
    res.send('Hoala mundo con ExpressJS');
})

app.listen(3000,()=>{
    console.log("Servidor escuchando en http://localhost:3000");
})