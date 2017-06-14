var contatos = [
{_id:1, nome: 'Iarlen', email: 'iarlem@gmail.com'},
{_id:2, nome: 'Jonas', email: 'jonas@gmail.com'},
{_id:3, nome: 'Joao', email: 'joao@gmail.com'},
{_id:4, nome: 'Antoin', email: 'antoin@gmail.com'},
{_id:5, nome: 'Italo', email: 'italo@gmail.com'},
{_id:6, nome: 'Rodrigo', email: 'rodrigo@gmail.com'},
{_id:7, nome: 'Messias', email: 'messias@gmail.com'},
{_id:8, nome: 'Jack', email: 'jack@gmail.com'}
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

	controller.removeContato = function(req, res){
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato){
			return contato._id != idContato;
		});

		res.status(204).end();
	};

	return controller;
};