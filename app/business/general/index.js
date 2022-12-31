const queries = require('./queries/index.js');
const driver = require('../../config/driver/mysql-driver/index.js');
const consts = require('../consts/index.js');

const createTables = async () => {
    for (let tableObj in consts.tables)
        await checkIfTableExists(consts.tables[tableObj].tableName, consts.tables[tableObj].fields);
}

const checkIfTableExists = async (tableName, fields) => {
    try {
        await driver.runQuery(queries.CREATE_TABLE(tableName, fields));
    } catch (error) {
        console.log('Tabela já existente! ', tableName);

        return;
    }

    console.log('Tabela criada com sucesso!', tableName);
}

module.exports = {
    createTables
}