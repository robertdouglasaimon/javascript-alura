const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const focoTimer = 1500;

const curtoBt = document.querySelector('.app__card-button--curto');
const curtoTimer = 300;

const longoBt = document.querySelector('.app__card-button--longo');
const longoTimer = 900;

const startPauseBt = document.querySelector('#start-pause');
const startPauseIcon = document.querySelector('.app__card-primary-butto-icon');

let tempoDecorridoEmSegundo = 1500; // Altere este valor para ajustar o tempo da contagem regressiva
let intervaloId = null;

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const tempoNaTela = document.querySelector('#timer');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const somPlay = new Audio('./sons/play.wav');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');
const somPause = new Audio('./sons/pause.mp3');

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundo = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundo = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundo = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
    
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            tempoDecorridoEmSegundo = focoTimer;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            tempoDecorridoEmSegundo = curtoTimer;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            tempoDecorridoEmSegundo = longoTimer;
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundo <= 0) {
        audioTempoFinalizado.play();
        alert('Tempo finalizado!')

        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if(focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        
        zerar();
        somBeep.pause(); // Pausa o som beep
        return;
    }
    
    tempoDecorridoEmSegundo -= 1;
    mostrarTempo();
}


startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        // Pausar
        somPause.play();
        clearInterval(intervaloId);
        intervaloId = null;
        iniciarOuPausarBt.textContent = 'Começar';
        startPauseIcon.setAttribute('src', './imagens/play_arrow.png');
        somBeep.pause(); // Pausa o som beep
        musica.pause(); // Pausa a música principal
    } else {
        // Iniciar
        somPlay.play();
        setTimeout(() => {
            intervaloId = setInterval(() => {
                contagemRegressiva();
                // somBeep.play(); // Remova esta linha daqui
            }, 1000);
            iniciarOuPausarBt.textContent = 'Pausar';
            startPauseIcon.setAttribute('src', './imagens/pause.png');
        }, 0); // Espera 0 segundos antes de iniciar a contagem
    }
}



function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = 'Começar';
    startPauseIcon.setAttribute('src', './imagens/play_arrow.png'); // Muda para a imagem de play
    intervaloId = null;
    somBeep.pause(); // Pausa o som beep
    somBeep.currentTime = 0; // Reinicia o som beep
    musica.pause(); // Pausa a música principal
    musica.currentTime = 0; // Reinicia a música principal
}


function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundo * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second:'2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}


mostrarTempo();