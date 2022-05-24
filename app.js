const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    console.log("peticion recibida");

    res.send("<h1>hola mundo</h1>");
});

app.listen(4000, () => {
    console.log("escuchando en el puerto 4000");
});