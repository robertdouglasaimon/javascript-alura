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
      ? livros.filter(livro => livro.quantidade > 0) 
      : livros.filter(livro => livro.categoria === categoria);
    
    exibirOsLivrosNaTela(livrosFiltrados);
}