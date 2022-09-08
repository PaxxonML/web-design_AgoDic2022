const express = require('express');
const router = express.Router();
const palindromoController = require('../controllers/palindromo');
// Create, read, update, delete (CRUD) Altas Bajas Cambios Consultas

// Rutas
// GET /palindromo/checkPalindromo
// Servicio para mostrar el formulario de palindromo
router.get('/checkPalindromo', palindromoController.getCheckPalindromo);
// POST /palindromo/checkPalindromo
// Servicio para procesar el formulario de palindromo
router.post('/checkPalindromo', palindromoController.postCheckPalindromo);

module.exports = router;