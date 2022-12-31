const driver = require('../../config/driver/mysql-driver/index.js')
const queries = require('./queries/index.js')
const utils = require('../../utils/index.js')

const create = async (name) => await driver.runQuery(queries.INSERT_PEOPLE(name));

const get = async () => {
    let response = [];

    try {
        response = await driver.runQuery(queries.GET_PEOPLES);

        if ((response || []).length != 0) {
            const randIndex = utils.randomIntFromInterval(0, response.length - 1);

            const newName = utils.shuffleArray([...response[randIndex].Name])

            await create(newName.join(''));

            response = await driver.runQuery(queries.GET_PEOPLES);

            return response;
        }

        const mocks = ['Zezinho', 'huguinho', 'Luisinho'];
        let results = [];

        for (let mock in mocks)
            results.push(await create(mocks[mock]));

        response = await driver.runQuery(queries.GET_PEOPLES);
    } catch (error) {
        console.log('erro na busca! ', error)
    }

    return response.map(x => x = { ...x });
}

module.exports = {
    get,
    create
}