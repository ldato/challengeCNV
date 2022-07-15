const router = require('express').Router();
const emergenciasRoutes = require('./emergencias');
const clientesRoutes = require('./clientes');
const facturacionRoutes = require('./facturacion');
const medicosRoutes = require('./medicos');
const paramedicosRoutes = require('./paramedicos');
const salariosRoutes = require('./salarios');



router.get('/', (req, res) => {
    res.json({message: "Ruta /"})
})

router.use('/emergencias', emergenciasRoutes);
router.use('/clientes', clientesRoutes);
router.use('/facturacion', facturacionRoutes);
router.use('/medicos', medicosRoutes);
router.use('/paramedicos', paramedicosRoutes);
router.use('/salarios', salariosRoutes);


module.exports = router;