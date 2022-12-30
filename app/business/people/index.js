import driver from '../../config/driver/mysql/index.js'
import queries from './queries/index.js'

const get = async () => {
    let response =  await driver.runQuery(queries.GET_PEOPLES);

    if (response.results.length != 0)
        return response.results;

    const mocks = ['Zezinho', 'huguinho', 'Luisinho'];
    let results = [];

    for (let mock in mocks)
        results.push( await driver.runQuery(queries.INSERT_PEOPLE(mock)));

    response =  await driver.runQuery(queries.GET_PEOPLES);

    return response.results;
}

export default {
    get
}