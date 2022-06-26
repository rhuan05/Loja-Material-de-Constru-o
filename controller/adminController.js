const ProductModel = require('../models/Products');
const BannerModel = require('../models/Banner');
let erro = '';

exports.renderAdmin = async (req, res)=>{
    const productsInDB = await ProductModel.find();
    res.render('admin', { produtos: productsInDB, erro: erro });
}

exports.newProduct = async (req, res)=>{
    const productsInDB = await ProductModel.find();
    const product = req.body;

    if(!product.nomeProduto){
        let erro = 'Para inserir o seu produto é preciso preencher o campo "nome".';
        res.render('admin', { produtos: productsInDB, erro: erro });
        return;
    }
    if(!product.precoProduto){
        let erro = 'Para inserir o seu produto é preciso preencher o campo "preco".';
        res.render('admin', { produtos: productsInDB, erro: erro });
        return;
    }
    if(!req.file.originalname){
        let erro = 'Para inserir o seu produto é preciso adicionar uma imagem.';
        res.render('admin', { produtos: productsInDB, erro: erro });
        console.log(product);
        return;
    }
    {
        let erro = '';
    }

    const productForDB = new ProductModel({
        produto: product.nomeProduto,
        preco: product.precoProduto,
        img: `https://lojamaterialdeconstrucoes.herokuapp.com/files/${req.file.originalname}`
    });

    try{
        await productForDB.save();
        const productsInDB = await ProductModel.find();
        res.render('admin', { produtos: productsInDB, erro: erro });
    }catch(error){
        console.log('DEU RUIM NO CADASTRO DO PRODUTO.');
        console.log(error);
    }
}

exports.delete = async (req, res)=>{
    const id = req.body.id;

    await ProductModel.findByIdAndRemove(id);
    res.redirect('/admin');
}

exports.bannerImg = async (req, res)=>{
    const bannerForDB = new BannerModel({
        imgBanner: `https://lojamaterialdeconstrucoes.herokuapp.com/files/${req.file.originalname}`
    });

    const imgInDB = await BannerModel.find();
    if(imgInDB.length >= 1){
        await BannerModel.findOneAndRemove('imgBanner');
    }

    try{
        await bannerForDB.save();
        res.redirect('/admin');
    }catch(error){
        console.log(error);
    }
}
