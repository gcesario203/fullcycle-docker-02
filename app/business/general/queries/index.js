const CREATE_TABLE = (tableName, fields) => 
    `
        CREATE TABLE ${tableName} (
            ${fields}
        )
    `

module.exports = {
    CREATE_TABLE
}                                            