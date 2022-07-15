const {create} = require('../services/emergencias');

const crearEmergencia = async (req, res) => {
    try {
        const data = req.body;
        const emergencia = await create(data);
        return res.status(201).json(emergencia) // devolvera la info de la emergencia creada
    } catch (error) {
        return res.status(400).json({
            message: error //devolvera el mensaje de error en caso de que lo hibiere
        })
    }
}

module.exports = {
    crearEmergencia
}