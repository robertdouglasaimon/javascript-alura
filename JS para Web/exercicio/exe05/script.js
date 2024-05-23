let botao = document.querySelector('.botao');
let quadrado = document.querySelector('.quadrado');
let nomeDaCor = document.querySelector('.nomeDaCor');

let cores = ['vermelho', 'azul', 'amarelo', 'verde'];
let idAtualDaCorUsadaNoArray = cores.indexOf('verde'); 

function mudarCor(cor) {
    // Remover a classe atual do quadrado e do nomeDaCor
    quadrado.classList.remove(cores[idAtualDaCorUsadaNoArray]);
    nomeDaCor.classList.remove(cores[idAtualDaCorUsadaNoArray]);

    // Encontrar o índice da cor no array de cores
    idAtualDaCorUsadaNoArray = cores.indexOf(cor);

    // Adicionar a nova cor ao quadrado
    quadrado.classList.add(cor);

    // Atualizar o texto do nome da cor
    nomeDaCor.textContent = cor.charAt(0).toUpperCase() + cor.slice(1);

    // Adicionar a nova cor ao nomeDaCor apenas para colorir o texto
    nomeDaCor.classList.add(cor);
}

// Adicionar o event listener ao botão
botao.addEventListener('click', function() {
    // Avançar para a próxima cor no array de cores
    idAtualDaCorUsadaNoArray++;
    
    // Verificar se chegou ao final do array e voltar ao início
    if (idAtualDaCorUsadaNoArray >= cores.length) {
        idAtualDaCorUsadaNoArray = 0;
    }

    // Chamar mudarCor com a cor atual
    mudarCor(cores[idAtualDaCorUsadaNoArray]);
});
