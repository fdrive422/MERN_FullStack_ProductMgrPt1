const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/products', ProductController.createProduct);

    // this route (not required in assignment) added to verify data created via GET request
    app.get('/api/products', ProductController.findAllProducts);
}
