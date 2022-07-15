const dbConfig = require('../dbConfig');//credenciales bbdd
const sql = require('mssql');//modulo de conexión con SQL Server

const create = async (data) => {
    //el id de cliente sera AUTO_INCREMENT en la bbdd
    let nombre = data.nombre;
    let edad = data.edad;
    let telefono = data.telefono;
    let direccion = data.direccion;

    //realizamos la conexión a la bbdd
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.input('nombre', nombre);
    request.input('edad', edad);
    request.input('telefono', telefono);
    request.input('direccion', direccion);

    //el id de cliente será auto_increment
    const result = await request.query(`INSERT INTO clientes (nombre, edad, telefono, direccion,
        fechaCreaciion, fechaBaja, fechaModif, usuarioAlta, usuarioModif, activo, marcaUso)
        VALUES (@nombre, @edad, @telefono, @direccion, NOW(), NULL, NULL, "Desarrollo", NULL,
        1, 1)`); //en este caso, 1, 1 hacen referencia a true.
        //EN EL CASO DEL CAMPO usuarioAlta podemos setear un default value en la bbdd
    
    return result;
}

const findOne = async (id) => {
    let idCliente = id;
    //realizamos la conexión a la bbdd
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.input('id', idCliente);

    const result = await request.query(`SELECT * FROM clientes WHERE idCliente = @id
        AND fechaBaja = NULL`);

    return result;
}

module.exports = {
    create,
    findOne
}