let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function cliclouNoConsole(){
    console.log('O botão foi clicado!');
}

function clicouNoAlerta(){
    window.alert('Eu amo JS!');
}


function clicouNoPrompt(){
    let cidade = window.prompt('Insira o nome de uma cidade:');

    window.alert(`Estive em ${cidade} e lembrei de você.`)
}


function clicouNaSoma(){
    let valor1 = parseInt(window.prompt('Insira um número'));
    let valor2 = parseInt(window.prompt('Insira mais um número'));

    let soma = valor1 + valor2;
    let res = soma;

    window.alert(`A soma dos números é igual à ${res} :)`)
}