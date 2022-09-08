// importar las bibliotecas
const express = require('express');
const cors = require('cors');
const path = require('path');
const consolaRoutes = require('./routes/consola');
const palindromoRoutes = require('./routes/palindromo');
const idiomaFRoutes = require('./routes/idiomaF');

const app = express();

// middleware


// Definición de nuestra aplicación
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Prueba query
app.get('/query', (request, response) => {
    console.log(request.query);
    console.log('Hola mundo');
    response.send(`<h1>${request.query}</h1>`);
});

// Prueba params
app.get('/params/:name/:age', (request, response) => {
    console.log(request.params.name);
    response.send(`<h1>${request.params.name} ${request.params.age}</h1>`);
});

app.get('/home', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index2.html'));
});

// Lanzar la aplicación
app.listen(8080, ()=>{
    console.log('Servidor en línea');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/consola', consolaRoutes);
app.use('/palindromo', palindromoRoutes);
app.use('/idiomaF', idiomaFRoutes);

app.post('/post', (request, response) => {
    reqJson = request.body;
    console.log(reqJson);
    response.send(`<h1>${reqJson.name}</h1>`);
});

// Tarea 1
app.get('/tarea1', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index_tarea1.html'));
});

/*
const app1 = express();

// middleware

// Definición de nuestra aplicación
app1.get('/bigotes', (request, response) => {
    console.log('Hola mundo');
    response.send('<h1>Hola mundo :D Soy Paco 2.0</h1>');
});

// Lanzar la aplicación
app1.listen(8081, ()=>{
    console.log('Servidor en línea');
});
*/