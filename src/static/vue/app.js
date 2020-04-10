Vue.component('lista-tarefas', {
	data: function(){
		return {
			lista_tarefas: [
				{
					nome: 'Teste1'
				},
				{
					nome: 'Teste2'
				},
				{
					nome: 'Teste3'
				},
			]
		}
	},
	template:`
	<div id='container-lista-tarefas'>
	<div v-for='(tarefa, index) in lista_tarefas'>
	{{ tarefa.nome }}
	</div>
	</div>

	`,
	mounted (){

	},
	methods: {

	},
});

new Vue({el: '#lista-tarefas'})
