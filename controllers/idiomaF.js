const path = require('path');

// Proceso cuando se llame la ruta /consola
exports.getTranslation = (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'idiomaF.html'));
}

exports.postTranslation = (request, response) => {
    let palabra = request.body.palabra.lowerCase();
    console.log(palabra);
    let traducida = '', nextSubstring = '';
    let i = 0;
    while (i < palabra.length) {
        console.log(palabra.length);
        i = palabra.indexOf('f',1);
        console.log(i);
        nextSubstring = palabra.substring(0,i);
        console.log(nextSubstring);
        traducida += nextSubstring;
        console.log(traducida);
        palabra = palabra.substring(i + 2);
        console.log(palabra);
    }
    response.json({resultado: traducida});
}
