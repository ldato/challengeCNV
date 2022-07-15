const {create} = require('../services/paramedicos');

const crearParamedico = async (req, res) => {
    try {
        const data = req.body;
        const medico = await create(data);
        return res.status(201).json(medico);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

module.exports = {
    crearParamedico
}