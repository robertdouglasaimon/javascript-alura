const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const focoTimer = 1500;

const curtoBt = document.querySelector('.app__card-button--curto');
const curtoTimer = 300;

const longoBt = document.querySelector('.app__card-button--longo');
const longoTimer = 900;


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
});

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
});

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
});
