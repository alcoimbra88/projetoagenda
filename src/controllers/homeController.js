const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {

  if(!req.session.user) return res.render('login');
   
  const contatos = await Contato.buscaContatos();
  res.render('index', {contatos});

};
