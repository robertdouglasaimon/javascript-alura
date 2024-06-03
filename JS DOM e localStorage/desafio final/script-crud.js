// 1 - Encontrar o botão adicionar tarefa.  // 2 - Observar as suas classes e funcionalidades.

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const areaDeTextoDoFormulario = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const botaoCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');

const btnRemoverTarefasConcluidas = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodasTarefas = document.querySelector('#btn-remover-todas');

let listaDeTarefas = JSON.parse(localStorage.getItem('listaDeTarefas')) || [];
let tarefaSelecionada = null
let liTarefaSelecionada = null

function atualizarTarefas() {
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas));
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>`

    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add('app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');


    
    botao.onclick = () => {
        // debugger
        const novaDescricao = prompt("Qual é o novo nome da tarefa?");
        // console.log('Nova descrição da tarefa: ', novaDescricao)
        //If que eu fiz para verificar string vazia/espaço vazio <3
        if(novaDescricao == '' || novaDescricao == null) {
            alert('Campo vazio ou Valor inválido! Preencha o campo novamente/Tente novamente com um valor válido.');
        } else {
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefas();
        }
    };

    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', './imagens/edit.png');
    botao.append(imagemBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(botao)
    
    if(tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete');
        botao.setAttribute('disabled', 'disabled');
    } else {
        li.onclick = () => {
        document.querySelectorAll('.app_section-task-list-item-active')
            .forEach(elemento => {
                elemento.classList.remove('app_section-task-list-item-active')
            });
        if(tarefaSelecionada == tarefa) {
            paragrafoDescricaoTarefa.textContent = '';
            tarefaSelecionada = null
            liTarefaSelecionada = null
            return
        }
        tarefaSelecionada = tarefa
        liTarefaSelecionada = li
        paragrafoDescricaoTarefa.textContent = tarefa.descricao

        li.classList.add('app_section-task-list-item-active');
        }
    }
    
    return li
}


btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: areaDeTextoDoFormulario.value 
    };
    listaDeTarefas.push(tarefa);
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
    atualizarTarefas();
    areaDeTextoDoFormulario.value = '';
    formAdicionarTarefa.classList.add('hidden');
});

listaDeTarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
});

//Exercicio 1 da aula 3 ⬇️
botaoCancelar.addEventListener('click', () => {
    areaDeTextoDoFormulario.value = '';
    formAdicionarTarefa.classList.add('hidden');
});

document.addEventListener('FocoFinalizado', () => {
    if(tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app_section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled');
        tarefaSelecionada.completa = true
        atualizarTarefas()
    }
});

const removerTarefas = (somenteCompletas) => {
    // const seletor = somenteCompletas ? '.app__section-task-list-item-complete': '.app__section-task-list-item'; IF TERNÁRIO


    //IF Padrão
    let seletor = 'app__section-task-list-item';
    if(somenteCompletas) {
        seletor = '.app__section-task-list-item-complete';
    }

//  OBS: Ambos os IF's fazem exatamente a mesma coisa. No entanto, eu prefiro o IF padrão mesmo. Esse ternário é menor em linhas, mas as vezes se torna confuso dependendo do contexto.. Ficamos com o clássico e auto-explicativo mesmo. :)

    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove()
    });
    listaDeTarefas = somenteCompletas ? listaDeTarefas.filter(tarefa => !tarefa.completa) : [];
    atualizarTarefas()
}


btnRemoverTarefasConcluidas.onclick = () => removerTarefas(true);
btnRemoverTodasTarefas.onclick = () => removerTarefas(false);