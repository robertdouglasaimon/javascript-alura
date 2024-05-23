/*
    Vamos praticar o que aprendemos até aqui?

1) Desenvolvendo interatividade com JavaScript e HTML
Imagine que você está trabalhando no projeto de um instrumento musical digital, similar ao Alura Midi, onde ao clicar nos botões, sons diferentes são reproduzidos. Sua tarefa é utilizar HTML e JavaScript para criar a interatividade desses botões:

Inicie com o botão que representa o som "Pom";
Utilize a tag button no HTML e adicione a funcionalidade de reprodução de som usando JavaScript.
Para fazer essas ações, você precisa vincular o som específico (que já está disponível em um arquivo de áudio) ao clique deste botão.

2) Resolvendo erros de nulo no JavaScript
Você está desenvolvendo um site que inclui a reprodução de sons ao clicar em botões. Ao testar o site, você se depara com um erro no console do navegador: o JavaScript está tentando acessar uma propriedade de um elemento que ainda não foi carregado, resultando em um erro de "nulo". Sua tarefa é corrigir esse erro, garantindo que o script só execute depois que todos os elementos necessários da página tenham sido carregados. Para fazer a correção, você precisa mover a tag <script> para o local apropriado no arquivo HTML.

3) Adicionando funcionalidade de áudio ao botão
Você está desenvolvendo um aplicativo web de instrumentos musicais e precisa criar uma interface que permita aos usuários tocar sons diferentes ao clicar em botões específicos. Já existe um botão com a classe tecla_pom e uma função tocaSomPom() que reproduz o som. Seu desafio é vincular a função tocaSomPom() ao evento de clique do botão tecla_pom sem usar o atributo onclick no HTML, mantendo as boas práticas de JavaScript.

4) Criando uma função para tocar sons
Agora, você identificou um segundo problema: os sons estão sendo automaticamente reproduzidos ao carregar a página, o que é bloqueado por padrão pelos navegadores por razões de experiência do usuário (algumas pessoas não gostam de ser surpreendidas por sons). Para resolver isso, você precisa modificar o arquivo JavaScript para que o som só seja reproduzido quando um botão específico for clicado. Crie uma função chamada tocaSomPom, que será responsável por reproduzir o som apenas quando invocada, e assegure que ela seja chamada corretamente quando o botão apropriado for clicado.

*/

function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
