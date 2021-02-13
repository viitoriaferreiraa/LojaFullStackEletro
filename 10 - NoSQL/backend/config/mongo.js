const mongoose = require ('mongoose');
function mongoConn(){
    mongoose.connect('mongodb://localhost/fseletro', 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDb conectado!')
    })
    .catch((error) => {
        console.log(error)
    })

}

module.exports = mongoConn();