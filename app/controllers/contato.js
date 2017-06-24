module.exports = function () {
	var controller = {};
	
	controller.listaContatos = function (req, res) {};

	controller.obtemContato = function (req, res) {};

	controller.removeContato = function (req, res) {};

	controller.salvaContato = function (req, res) {
		var contato = req.body;
		contato = contato._id ? atualiza(contato) : adiciona(contato);
		res.json(contato);
	};

	function adiciona(contatoNovo) {
		contatoNovo._id = ++id_contato_inc;
		contatos.push(contatoNovo);
		return contatoNovo;
	};

	function atualiza(contatoAlterar) {
		contatos = contatos.map(function (contato) {
			if(contato._id == contatoAlterar._id){
				contato = contatoAlterar;
			}
			return contato;
		});

		return contatoAlterar;
	}

	return controller;
};