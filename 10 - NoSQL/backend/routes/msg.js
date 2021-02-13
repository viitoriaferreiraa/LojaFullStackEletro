module.exports = server => {
    Msg = require('../models/msg');
    server.get('/msg', async(req,res ) => {
        const result = await Msg.find()
        res.send(result)
    });
    server.post('/msg', async(req,res) => {
        const {nome,msg} = req.body
        const result = await Msg.create({nome,msg})
        res.send(result)
    });
}