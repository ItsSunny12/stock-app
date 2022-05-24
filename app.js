require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    console.log("peticion recibida");

    res.send('<h1>Camila Te Amo , Mañosita</h1>');
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});