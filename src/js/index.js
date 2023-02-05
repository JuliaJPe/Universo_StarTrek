const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
console.log(video.src);
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener('click', () => {
  modal.classList.add('aberto');
  video.setAttribute('src', linkDoVideo);
});


botaoFecharModal.addEventListener('click', () => {
  modal.classList.remove('aberto');
  video.setAttribute('src', '');
});


