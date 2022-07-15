const express = require('express');
const router = express.Router();
const {facturarCliente} = require('../controllers/facturacionController');

router.post('/:id', facturarCliente);

module.exports = router;