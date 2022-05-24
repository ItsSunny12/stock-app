require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    console.log("peticion recibida");

    res.send('<h1>hola mundo</h1>');
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});