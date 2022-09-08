const path = require('path');

// Proceso cuando se llame la ruta /consola
exports.getCheckPalindromo = (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'palindromo.html'));
}

exports.postCheckPalindromo = (request, response) => {
    console.log(request.body);
    let palindromo = request.body.palindromo.lowerCase();
    let palindromoReverse = palindromo.split('').reverse().join('');
    let resultado = palindromo === palindromoReverse;

    //Codigo
    response.json({palabra: palindromo,isPalindromo: resultado});
}
