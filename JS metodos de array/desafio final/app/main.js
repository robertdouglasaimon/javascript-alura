let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI() //get - Busca os itens da API.

async function getBuscarLivrosDaAPI() {
    try {
        const resposta = await fetch(endpointDaAPI);
        
        if (!resposta.ok) throw new Error(`HTTP error! status: ${resposta.status}`); // Condicional para saber se há algum possivel erro na 'resposta' da API, caso tenha, o catch lá embaixo vai mandar no console.log,
        livros = await resposta.json();
        let livrosComDesconto = aplicarDesconto(livros);
        exibirOsLivrosNaTela(livrosComDesconto);
        } catch (error) {
            console.log('Erro ao buscar os livros:', error);
        }
}

