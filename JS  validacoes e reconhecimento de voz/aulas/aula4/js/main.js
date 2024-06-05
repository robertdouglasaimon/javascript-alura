const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', microLigado);

function microLigado(e) {
    chute = e.results [0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>    
    `
}




/*-----------VALIDAÇÃO DA CONDIÇÃO-----------------------------------*/

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
       elementoChute.innerHTML += `<div>Valor Inválido: O numero secreto precisa estar entre ${menorValor} e ${maiorValor}.</div>`
    }

    if(numero === numeroSecreto) {
       document.body.innerHTML = `
       <h2>Você acertou!</h2>
       <h3>O número secreto era ${numeroSecreto}</h3>
       `;
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
