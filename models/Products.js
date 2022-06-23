const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    produto: String,
    preco: Number,
    img: String
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;