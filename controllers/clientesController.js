const {create, findOne} = require('../services/clientes');

const crearCliente = async (req, res) => {
    try {
        const data = req.body;
        const cliente = await create(data);
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

const buscarCliente = async (req, res) => {
    try {
        let id = req.params.id;
        const cliente = findOne(id);
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

module.exports = {
    crearCliente,
    buscarCliente
}