const path = require('path');

// Proceso cuando se llame la ruta /consola
exports.getAltaConsola = (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'formulario.html'));
}

exports.postAltaConsola = (request, response) => {
    console.log(request.body);
    response.json({estado:"Exitoso"});
}

exports.getConsultaConsola = (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'consultaConsola.html'));
}
