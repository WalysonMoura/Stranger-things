function scrollHeader(){
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 80 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function assistir(){
  alert("Dirija-se à sala do 3° ano B , o ESPETÁCULO já vai COMEÇAR!!!✨ ");
}
function clicar(){

  let audio = new Audio("../assets/audio/audio.mp3");
  
  audio.play();
  
}
