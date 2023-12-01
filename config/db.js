const colors = require('colors');
const mongoose = require('mongoose');

// Función para conectar a la base de datos
async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Conexión exitosa a MongoDB en: ${conn.connection.host}`.bgGreen.blue);
    } catch (error) {
        console.error(`Error de conexión a MongoDB: ${error.message}`.bgRed.white);
        process.exit(1); // Salir del proceso con un código de error
    }
}

module.exports = connectDB;
