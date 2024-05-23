//Som Pom ----------------------------------------------------
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;


/* Sua missão da vez é utilizar a mesma lógica de atribuir funções a elementos da lista, porém agora para tocar o arquivo de áudio com o nome TocaSomClap ao clicar no botão Clap. Esse botão é o segundo elemento da lista de elementos.*/

//Resolução:

//Som Clap ----------------------------------------------------

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

listaDeTeclas[1].onclick = tocaSomClap;