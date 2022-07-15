const dbConfig = require('../dbConfig');//credenciales bbdd
const sql = require('mssql');//modulo de conexión con SQL Server

const create = async (data) => {
    //en este caso usare destructuring para obtener la info del que vendra del body de la petición
    let {nombre, email} = data;

    //realizamos la conexión a la bbdd
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.input('nombre', nombre);
    request.input('email', email);

    //el id de medico será auto_increment
    const result = await request.query(`INSERT INTO medicos (nombre, email, fechaCreacion,
        fechaBaja, fechaModif, usuarioAlta, usuariosModif, activo, marcaUso)
        VALUES (@nombre, @email, NOW(), NULL, NULL, "Desarrollo", NULL, 1, 1)`);
        //en este caso, 1, 1 hacen referencia a true.
        //EN EL CASO DEL CAMPO usuarioAlta podemos setear un default value en la bbdd

        return result;
}


const findByMedicoId = async (id) => {
    let idMedico = id;
    //realizamos la conexión a la bbdd
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.input('idMedico', idMedico);

    const result = await request.query(`SELECT * FROM medicos WHERE idMedico = @idMedico`);

    return result;
}

module.exports = {
    create,
    findByMedicoId
}