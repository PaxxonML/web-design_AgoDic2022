const express = require('express');
const router = express.Router();
const idiomaFController = require('../controllers/idiomaF');
// Create, read, update, delete (CRUD) Altas Bajas Cambios Consultas

// Rutas
// GET /idiomaF/getTranslation
// Servicio para mostrar el formulario de idiomaF
router.get('/getTranslation', idiomaFController.getTranslation);
// POST /idiomaF/getTranslation
// Servicio para procesar el formulario de idiomaF
router.post('/getTranslation', idiomaFController.postTranslation);

module.exports = router;