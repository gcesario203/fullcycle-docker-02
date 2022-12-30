import constants from '../../consts/index.js'

const GET_PEOPLES = `SELECT * FROM ${constants.tables.people.tableName}`


const INSERT_PEOPLE = (name) =>
`
    INSERT INTO table_name (Name)
    VALUES (${name})
`
export default {
    GET_PEOPLES,
    INSERT_PEOPLE
}