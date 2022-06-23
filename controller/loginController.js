const UserModel = require('../models/User');
let erro = '';

exports.login = (req, res)=>{
    res.render('login', { erro: erro });
};

exports.authenticate = async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const emailInDB = await UserModel.findOne({email: email});
    const passwordInDB = await UserModel.findOne({password: password});

    if(!emailInDB){
        erro = 'Email inválido!';
        return res.redirect('/login');
    }
    if(!passwordInDB){
        erro = 'Senha inválida!';
        return res.redirect('/login');
    }
    erro = '';
    req.session.user = 'Administrador autenticado!';

    res.redirect('/admin');
};