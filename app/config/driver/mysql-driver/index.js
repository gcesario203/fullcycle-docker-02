const mysql = require('mysql')
const config= require( '../../db/index.js')

const createPool = (host, user, password, database) =>
    mysql.createPool({
        host,
        user,
        password,
        database
    });


const connect = () =>
    createPool(config.HOST, config.USER, config.PASSWORD, config.DATABASE_NAME);

const runQuery = (sql) => {
    const connection = connect();

    return new Promise((resolve, reject)=>{
        connection.query(sql, (error, results)=>{
            if(error)
                return reject(error);

            return resolve(results);
        })
    })
}

module.exports = { runQuery }