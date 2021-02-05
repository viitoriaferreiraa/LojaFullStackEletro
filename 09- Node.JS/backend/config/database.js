const db = require('mysql');
const Connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fseletro'
})

module.exports = Connection;