require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    pool: {
        max: 10,
        min: 0
    },
    options: {
        trustServerCertificate: true,
        encrypt: false,
        instanceName: 'SQLEXPRESS'
    }
};

module.exports = dbConfig;