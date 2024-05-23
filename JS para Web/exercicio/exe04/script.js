let contador = 0;
const botao = document.getElementById('contadorBotao');

botao.addEventListener('click', () => {
    contador += 1;

    console.log(`Contador ${contador}`);


    let res = document.querySelector('.res');

    res.innerHTML = `Número ${contador}.`
});

