const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const focoTimer = 1500;

const curtoBt = document.querySelector('.app__card-button--curto');
const curtoTimer = 300;

const longoBt = document.querySelector('.app__card-button--longo');
const longoTimer = 900;

const startPauseBt = document.querySelector('#start-pause');
let tempoDecorridoEmSegundo = 5;
let intervaloId = null;

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;


musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    // html.setAttribute('data-contexto', 'foco');
    // banner.setAttribute('src', './imagens/foco.png')

    focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    // html.setAttribute('data-contexto', 'descanso-curto');
    // banner.setAttribute('src', './imagens/descanso-curto.png');

    curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    // html.setAttribute('data-contexto', 'descanso-longo')
    // banner.setAttribute('src', './imagens/descanso-longo.png');

    longoBt.classList.add('active')
});

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`)

    switch (contexto) {
            case "foco":
                titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
    
                break; 
            case "descanso-curto":
                titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong> `
    
                break ;
            case "descanso-longo":
                titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong> `
    
                break;
            default:
                break;
        }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundo <= 0) {
        zerar();
        alert('Tempo finalizado!');
        return;
    }
    tempoDecorridoEmSegundo -= 1;
    console.log('Temporizador:' + tempoDecorridoEmSegundo);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}