const {liquidarMedico, liquidarParamedico} = require('../services/salarios');

const salarioMedico = async (req, res) => {
    try {
        let id = req.params.id;
        const salario = liquidarMedico(id);
        return res.status(201).json(salario);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

const salarioParamedico = async (req, res) => {
    try {
        let id = req.params.id;
        const salario = liquidarParamedico(id);
        return res.status(201).json(salario);
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

module.exports = {
    salarioMedico,
    salarioParamedico
}