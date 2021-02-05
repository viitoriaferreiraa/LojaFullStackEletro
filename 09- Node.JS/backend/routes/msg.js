module.exports = server => {
    const msg = require('../controllers/msg');
    server.get('/msg', msg.findAll);
    server.post('/msg', msg.create);
}