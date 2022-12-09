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
  elemento.checked = true;

}
parametros.forEach(ativarProduto);