const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola');
// Create, read, update, delete (CRUD) Altas Bajas Cambios Consultas

// Rutas
// GET /consola/altaConsola
// Servicio para mostrar el formulario de alta de consola
router.get('/altaConsola', consolaController.getAltaConsola);
// POST /consola/altaConsola
// Servicio para procesar el formulario de alta de consola
router.post('/altaConsola', consolaController.postAltaConsola);
// GET /consola/consultaConsola
// Servicio para mostrar el formulario de consulta de consola
router.get('/consultaConsola', consolaController.getConsultaConsola);

module.exports = router;