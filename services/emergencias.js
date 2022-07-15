const dbConfig = require('../dbConfig');//credenciales bbdd
const sql = require('mssql');//modulo de conexión con SQL Server

const create = async (data) => {
    //el id de la emergencia sera auto_increment en la bbdd
    let idCLiente = data.idCLiente;
    let idMedico = data.idMedico;
    let idParamedico = data.idParamedico;

    //realizamos la conexión a la bbdd
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.input('idCLiente', idCLiente);
    request.input('idMedico', idMedico);
    request.input('idParamedico', idParamedico);
    //con el objeto request nos comunicamos con la bbdd
    const result =await request.query(`INSERT INTO emergencias (idCliente, idMedico,
        idParamedico, fecha) VALUES (@idCLiente, @idMedico, @idParamedico, NOW())`);
    return result;
}


module. exports = {
    create
}