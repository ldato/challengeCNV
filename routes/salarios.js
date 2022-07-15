const express = require('express');
const router = express.Router();
const {salarioMedico, salarioParamedico} = require('../controllers/salariosController');

router.get('/medico/:id', salarioMedico);

router.get('/paramedico/:id', salarioParamedico);

module.exports = router;