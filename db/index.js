const mongoose = require('mongoose');

const dbConnect = (app) => {
    mongoose
        .connect(
            `mongodb+srv://msLopez94:${process.env.MONGO_DB_PASS}@development.qvtb9oq.mongodb.net/stock-app?retryWrites=true&w=majority`
        )
        .then((result) => { 
            const PORT = process.env.PORT;
            app.listen(PORT, () => {
                console.log(`Servidor escuchando en el puerto ${PORT}`);
            });
            console.log('conexion exitosa BBDD')
            
        })   
        .catch((err) => console.log(err));
}

module.exports = dbConnect;
