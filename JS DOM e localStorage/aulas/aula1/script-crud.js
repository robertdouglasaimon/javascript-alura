// 1 - Encontrar o botão adicionar tarefa.  // 2 - Observar as suas classes e funcionalidades.

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const areaDeTextoDoFormulario = document.querySelector('.app__form-textarea');

const listaDeTarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: areaDeTextoDoFormulario.value 
    }
    listaDeTarefas.push(tarefa);
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas));
});

