const mySql = require('mysql2');

const connection = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'usuario_db'
    /*host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME*/
});

connection.connect((err)=>{
    if (err){
        console.error("error al conectar base de datos: ",err);
        return;
    }

    console.log("conectado");
});

module.exports = connection;