const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    produto: String,
    preco: String,
    img: String
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;