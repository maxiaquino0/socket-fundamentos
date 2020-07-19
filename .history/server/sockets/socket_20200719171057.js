// Para detectar desde el server que un cliente se conecto
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Paraemitir un evento desde el server y que sea escuchado por el cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Para detectar desde el server que un cliente se desconecto
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el emit del cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        // Ejecucion del callback enviado desde el cliente para devolver una retroalimentacion desde el server
        if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien!!'
            });
        } else {
            callback({
                resp: 'Todo salio mal!!'
            });
        }
    });
});