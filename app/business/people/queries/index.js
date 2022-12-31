const constants = require('../../consts/index.js');

const GET_PEOPLES = `SELECT * FROM ${constants.tables.people.tableName}`


const INSERT_PEOPLE = (name) =>
`
    INSERT INTO ${constants.tables.people.tableName} (Name)
    VALUES ('${name}')
`
module.exports = {
    GET_PEOPLES,
    INSERT_PEOPLE
}