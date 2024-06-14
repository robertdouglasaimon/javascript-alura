const botoes = document.querySelectorAll('.btn');

// const btnFiltrarLivrosDeFront = document.querySelector('#btnFiltrarLivrosFront');
// const btnFiltrarLivrosDeBack = document.querySelector('#btnFiltrarLivrosBack');
// const btnFiltrarLivrosDeDados = document.querySelector('#btnbtnFiltrarLivrosDados');
// const btnFiltrarLivrosDisponiveis = document.querySelector('#btnLivrosDisponiveis');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const identificadorDosBotoesDoFiltro = document.getElementById(this.id);
    const categoria = identificadorDosBotoesDoFiltro.value;
  
    let livrosFiltrados = categoria == 'disponivel' 
      ? filtrarPorDisponibilidade() 
      : filtrarPorCategoria(categoria);
    
    exibirOsLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel') {
      const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
      exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal); 
    }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = 
    `   
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}