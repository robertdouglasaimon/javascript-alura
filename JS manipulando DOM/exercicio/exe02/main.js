const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const focoTimer = 1500;

const curtoBt = document.querySelector('.app__card-button--curto');
const curtoTimer = 300;

const longoBt = document.querySelector('.app__card-button--longo');
const longoTimer = 900;

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');


focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    // html.setAttribute('data-contexto', 'foco');
    // banner.setAttribute('src', './imagens/foco.png')
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');

    // html.setAttribute('data-contexto', 'descanso-curto');
    // banner.setAttribute('src', './imagens/descanso-curto.png');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');

    // html.setAttribute('data-contexto', 'descanso-longo')
    // banner.setAttribute('src', './imagens/descanso-longo.png');
});

function alterarContexto(contexto) {
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
