// Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = location.href;
  const href = link.href;

  if (url.includes(href)){
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar itens do orcamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemteno){
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas =document.querySelectorAll('.perguntas button');
function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls)
  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttributes("aria-expanded", ativa)

}
function eventosPerguntas(perguntas){
  perguntas.addEventListener('click', ativarPergunta)
}
perguntas.forEach(eventosPerguntas);

//Galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");


function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media){
    console.log(media);
    galeriaContainer.prepend(img);
  }
}
function eventosGaleria(img){
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);
//Plugin
if (window.SimpleAnime){
  new SimpleAnime();
}