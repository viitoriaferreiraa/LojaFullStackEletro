module.exports = server => {
    const products = require('../controllers/products');
    server.get('/products', products.findAll);
}

