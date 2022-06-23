const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const homeController = require('../controller/homeController');
const loginController = require('../controller/loginController');
const cadastroController = require('../controller/cadastroController');

// Upload de imagens com Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
        exports.filename = fileName = file.originalname;
    }
});

// Middleware
function verificaAutenticacao (req, res, next){
    if(req.session.user){
        next();
        return;
    }
    
    res.redirect('/login');
};

// Rotas
router.get('/', homeController.renderHome);

router.get('/admin', verificaAutenticacao, adminController.renderAdmin);
router.post('/admin', multer({storage}).single('file'), adminController.newProduct);
router.post('/admin/delete', adminController.delete);
router.post('/admin/banner', multer({storage}).single('fileBanner'), adminController.bannerImg);

router.get('/login', loginController.login);
router.post('/authenticate', loginController.authenticate);

router.get('/cadastro', cadastroController.cadastro);
router.post('/cadastro', cadastroController.cadastrarUsuario);

module.exports = router;