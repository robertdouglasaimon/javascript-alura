const containerVideos = document.querySelector('.videos__container');

const api = fetch('http://localhost:3000/videos')
.then(res => (res.json()))
.then((videos) => 
    videos.forEach((videos) => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${videos.url}" title="${videos.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
            <img class="img-canal" src="${videos.imagem} alt="Logo do Canal">
            <h3 class="titulo-video">${videos.titulo}</h3>
            <p class="titulo-canal">${videos.descricao}</p>
            </div>
        </li>
        `;
    })
)

//Comando para captar e monstrar algum possível erro com o link da API.
.catch((erros) =>{
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${erros}! `;
});