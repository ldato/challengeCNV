const dbConfig = require('../dbConfig');//credenciales bbdd
const sql = require('mssql');//modulo de conexión con SQL Server
const {findOne} = require('./clientes');

const facturar = async (id) => {
    let idCliente = id;
    
    //realizamos la conexión a la bbdd
    const conn = await sql.connect(dbConfig);
    const request = new sql.Request(conn);
    request.input('id', idCliente);
    let cuotaCobrar;
    const cliente = await findOne(id)
    const cuota = await request.query(`SELECT monto FROM cuota WHERE idCliente = @id`);
    if (cliente.edad>35 ) {
        cuotaCobrar = cuota * 1,35;
    } else {
        cuotaCobrar = cuota;
    }
    request.input('cuota', cuotaCobrar);
    //el id de la factura será auto_increment
    const facturacion = request.query(`INSERT INTO facturacion (idCliente, fecha, monto)
        VALUES (@id, NOW(), @cuota)`);
    
    return facturacion;
}

module.exports = {
    facturar
}