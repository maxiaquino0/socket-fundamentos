var socket = io();
// Para detectar desde el cliente que el cliente esta conectado al servidor
// On: escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Para detectar desde el cliente que el cliente se desconecto del servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Para emitir una comunicacion desde el cliente y que el server lo escuche
// Emit: emitir informacion
socket.emit('enviarMensaje', {
    usuario: 'Maxi',
    mensaje: 'Hello world'
}, function(resp) {
    console.log(resp);
});

// Para escuchar informacion en el cliente que fue enviada por el server
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});