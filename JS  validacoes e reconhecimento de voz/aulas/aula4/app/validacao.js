/*-----------VALIDAÇÃO DA CONDIÇÃO-----------------------------------*/

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
       elementoChute.innerHTML += `<div>Valor Inválido: O numero secreto precisa estar entre ${menorValor} e ${maiorValor}.</div>`

       return
    }

    if(numero === numeroSecreto) {
       document.body.innerHTML = `
       <h2>Você acertou!</h2>
       <h3>O número secreto era ${numeroSecreto}</h3>
       `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `    
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML +=
        `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
