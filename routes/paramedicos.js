const express = require('express');
const router = express.Router();
const {crearParamedico} = require('../controllers/paramedicosController');

router.post('/', crearParamedico);

module.exports = router;