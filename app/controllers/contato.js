module.exports = function (app) {
	var controller = {};

	var Contato = app.models.contato;
	
	controller.listaContatos = function (req, res) {};

	controller.obtemContato = function (req, res) {};

	controller.removeContato = function (req, res) {};

	controller.salvaContato = function (req, res) {};

	function adiciona(contatoNovo) {};

	function atualiza(contatoAlterar) {};

	return controller;
};