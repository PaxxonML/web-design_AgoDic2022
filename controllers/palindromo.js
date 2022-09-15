const path = require('path');

// Proceso cuando se llame la ruta /consola
exports.getCheckPalindromo = (request, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'palindromo.html'));
}

exports.postCheckPalindromo = (request, response) => {
    console.log(request.body);
    let palindromoOriginal = request.body.palindromo;
    let palindromo = palindromoOriginal.toLowerCase().split(" ").join("");
    console.log(palindromo);
    let palindromoReverse = palindromo.split('').reverse().join('');
    console.log(palindromoReverse);
    let resultado = palindromo === palindromoReverse;

    //Codigo
    response.json({palabra: palindromoOriginal,isPalindromo: resultado});
}
