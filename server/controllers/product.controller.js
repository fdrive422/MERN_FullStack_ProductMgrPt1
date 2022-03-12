const Product = require('../models/product.model.js');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProdCreated) => {
                console.log(newProdCreated);
                res.json(newProdCreated);
            })
            .catch((err) => {
                console.log("Create newProd failed");
                res.json({ message: 'Something went wrong with creating newProduct', error: err });
            });
    },

    // this controller (not required in assignment) added to verify data created via GET request
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("Find allProducts failed");
                res.json({ message: "Something went wrong with findAllProducts", error: err });
            });
    },

};