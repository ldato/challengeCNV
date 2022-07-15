const dbConfig = require('../dbConfig');//credenciales bbdd
const sql = require('mssql');//modulo de conexión con SQL Server
const {findByMedicoId} = require('./medicos');
const {findByParamedicoId} = require('./paramedicos');

const liquidarMedico = async (id) => {
    let medicoId = id;
    const result = findByMedicoId(medicoId);
    //realizamos la conexión a la bbdd
    let nombre = result.nombre;
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.query("nombre", nombre);
    request.query("id", medicoId)
    const valorEmergencia = 1000;
    const salario = 0;
    const cantEmergencias = await request.query(`SELECT nombre, COUNT(*) as Cantidad 
    FROM emergencias WHERE medicoId = @id GROUP BY nombre;`)
    salario = cantEmergencias.cantidad * valorEmergencia;
    return salario;

}

const liquidarParamedico = async (id) => {
    let paramedicoId = id;
    const result = findByParamedicoId(paramedicoId);
    //realizamos la conexión a la bbdd
    let nombre = result.nombre;
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.query("nombre", nombre);
    request.query("id", paramedicoId)
    const valorEmergencia = 1000;
    const salario = 0;
    const cantEmergencias = await request.query(`SELECT nombre, COUNT(*) as Cantidad 
    FROM emergencias WHERE paramedicoId = @id GROUP BY nombre;`)
    salario = cantEmergencias.cantidad * valorEmergencia;
    return salario;
}

module.exports = {
    liquidarMedico,
    liquidarParamedico
}
