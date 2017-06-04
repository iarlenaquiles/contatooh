var contatos = [
{_id:1, nome: 'Iarlen', email: 'iarlem@g.com'},
{_id:2, nome: 'Jonas', email: 'jonas@g.com'}
];
module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};

	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];

		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};

	return controller;
};