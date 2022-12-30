const CREATE_TABLE = (tableName, fields) => 
    `
        CREATE TABLE ${tableName} (
            ${fields}
        )
    `

export default {
    CREATE_TABLE
}                                            