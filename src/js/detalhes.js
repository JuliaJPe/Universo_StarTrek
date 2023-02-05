

function clickAccordion(t){
  var pai = document.getElementsByClassName('titulo')[t].parentElement;
  var img = document.getElementsByClassName('arrow')[t];
  var conteudo = pai.lastElementChild.classList.contains('hide');

  if(conteudo == true) {
    pai.lastElementChild.className="view";
    img.style.transform = "rotate("+90+"deg)";
  }
  else {
    pai.lastElementChild.className="hide";
    img.style.transform = "rotate("+0+"deg)";
  }
}