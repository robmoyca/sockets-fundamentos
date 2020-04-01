var socket = io();
//Los on son para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Los Emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Roberto Moya',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});