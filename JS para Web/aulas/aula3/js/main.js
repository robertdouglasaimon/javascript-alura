//Som Pom ----------------------------------------------------
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

// function tocaSomClap(){
//     document.querySelector('#som_tecla_clap').play();
// }

// listaDeTeclas[1].onclick = tocaSomClap;