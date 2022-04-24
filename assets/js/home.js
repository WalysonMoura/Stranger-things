/*=============== LINK ATIVO DE SEÇÕES DE ROLAGEM ===============
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


=============== ALTERAR CABEÇALHO DE FUNDO ===============
function scrollHeader(){
  
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 80 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
      
    
    
}
window.addEventListener('scroll', scrollHeader)


*/

    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    
    
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("c-body__disabled");
    }
    
    
    cancelBtn.onclick = ()=>{
      body.classList.remove("c-body__disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    /*
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
*/
function clicar(){

  let audio = new Audio("assets/audio/audio.mp3");
  
  audio.play();
  
  
}

const i = document.querySelectorAll('.fly-in')
setTimeout( () => {
  i.forEach( i=> i.classList.remove('fly-in'))      
}, 100)


 
