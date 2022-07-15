const express = require('express');
const router = express.Router();
const {crearEmergencia} = require('../controllers/emergenciasController');

router.post('/crear', crearEmergencia);

module.exports = router;