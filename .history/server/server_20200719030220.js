const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
let io = socketIO(server);

// Para detectar desde el server que un cliente se conecto
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Para detectar desde el server que un cliente se desconecto
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});