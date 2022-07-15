const express = require('express');
const router = express.Router();
const {crearMedico} = require('../controllers/medicosController');

router.post('/', crearMedico);

module.exports = router;