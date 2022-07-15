const {facturar} = require('../services/facturacion');

const facturarCliente = async (req, res) => {
    try {
        let id = req.params.id
        const factura = await facturar(id);
        return res.status(201).json(factura);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

module.exports = {
    facturarCliente
}