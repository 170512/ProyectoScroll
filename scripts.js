'use strict';
// Dom Elements
const header = document.querySelector('.header');
const titulo = document.querySelector('.titulo');
const links = document.querySelector('.links')
// Event Listeners - Este escucha el evento de scroll
document.addEventListener('scroll', scrollController)

// Funciones
// -- scrollController maneja los distintos efectos que dependen del scroll
function scrollController() {
  // Constante que guarda el valor del scroll que ha hecho la ventana
  const windowScroll = window.pageYOffset;
  headerHeightChange(windowScroll);
}

// headerHeightChange cambia el alto del header y su opacidad
function headerHeightChange(windowScroll) {
  if(windowScroll > 0) {
    header.classList.add('scroll-up');
    titulo.classList.add('cambioTitulo');
    links.classList.remove('hidden');
  } else {
    header.classList.remove('scroll-up');
    titulo.classList.remove('cambioTitulo');
    links.classList.add('hidden');

  }
}

// --------------===Funcionlidad Carrousel===--------------
const carrouselItems = document.querySelectorAll('.carrouselItem');
const imageWidth=document.querySelector('.imageContainer');
const imageSize = imageWidth.offsetWidth
const arrowLeft= document.querySelector('.arrow-left');
const arrowRight= document.querySelector('.arrow-right');

arrowLeft.addEventListener('click',slideLeft);
arrowRight.addEventListener('click',slideRight);

console.log(imageSize);

const totalWidth = (carrouselItems.length -1)* imageSize;//corregir dinamico
let carrouselCounter = 0;

automaticCarrousel();

function automaticCarrousel(){
    setTimeout(()=>{
    slideRight(totalWidth);
    // slideLeft();
    automaticCarrousel();

  },3000);
}
function slideRight() {
  if(carrouselCounter == -totalWidth) {
    carrouselCounter = 0;
  } else {
    carrouselCounter -= imageSize;
    console.log(imageSize);
  }
  carrouselMove(carrouselCounter);
}

function slideLeft() {
  if(carrouselCounter == 0) {
    carrouselCounter = -totalWidth;
  } else {
    carrouselCounter += imageSize;
  }
  carrouselMove(carrouselCounter);
}

function carrouselMove(carrouselCounter){
  for(let item of carrouselItems)
  {
    item.style.transform = "translateX("+ carrouselCounter + "px)"

  }
}
