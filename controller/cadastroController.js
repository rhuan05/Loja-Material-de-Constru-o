const UserModel = require('../models/User');
let erro = '';

exports.cadastro = (req, res)=>{
    res.render('cadastro', { erro: erro });
};

exports.cadastrarUsuario = async (req, res)=>{
    const userDataForm = req.body;

    const userForDB = new UserModel({
        email: userDataForm.email,
        password: userDataForm.password,
    });

    try{
        await userForDB.save();
        res.send('Usuário cadastrado.');
    }catch(error){
        console.log('DEU RUIM AO CADASTRAR USUÁRIO.');
        console.log(error);
    }
};