const ProductModel = require('../models/Products');
const BannerModel = require('../models/Banner');

exports.renderHome = async (req, res)=>{
    const products = await ProductModel.find();
    const banner = await BannerModel.findOne();
    res.render('home', { produtos: products, banner: banner });
}