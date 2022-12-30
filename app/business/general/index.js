import queries from './queries/index.js'
import driver from '../../config/driver/mysql-driver/index.js'
import consts from '../consts/index.js'

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

export default {
    createTables
}