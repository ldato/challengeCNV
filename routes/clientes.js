const express = require('express');
const router = express.Router();
const {crearCliente, buscarCliente} = require('../controllers/clientesController');

router.post('/crear', crearCliente);

router.get('/:id', buscarCliente);

module.exports = router;