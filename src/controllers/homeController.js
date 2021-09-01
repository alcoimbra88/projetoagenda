const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {

  if(!req.session.user) return res.redirect('login/index');

  const contatos = await Contato.buscaContatos();
  res.render('index', {contatos});

};
