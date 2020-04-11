Vue.component('lista-tarefas', {
	data: function(){
		return {
			lista_tarefas: [
				{
					nome: 'Teste1',
					status: ''
				},
				{
					nome: 'Teste2',
					status: ''
				},
				{
					nome: 'Teste3',
					status: 'completo'
				},
			],
		}
	},
	template:`
	<div id='container-lista-tarefas'>
	<div v-for='(tarefa, index) in lista_tarefas'>
		<input value='tarefa.status' type='checkbox'>
			{{ tarefa.nome }}
		</input>
	</div>
	</div>

	`,
	mounted (){

	},
	methods: {

	},
});

new Vue({el: '#lista-tarefas'})
