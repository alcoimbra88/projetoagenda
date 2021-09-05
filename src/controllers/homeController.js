const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {

  if(!req.session.user) {
    return res.redirect('login/index')
  } else {
  const contatos = await Contato.buscaContatos({usuario: req.session.user.email});
  res.render('index', {contatos});
};
}
