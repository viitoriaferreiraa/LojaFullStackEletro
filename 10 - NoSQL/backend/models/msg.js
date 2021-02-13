const {Schema, model} = require('mongoose');

const MsgSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    }
})

schemaModel = model('msg', MsgSchema)

module.exports = schemaModel