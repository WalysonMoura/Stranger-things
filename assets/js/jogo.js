function scrollHeader() {
  const header = document.getElementById('header')
  // Quando a rolagem for maior que 80 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
