'use strict';
// Dom Elements
const header = document.querySelector('.header');
const titulo = document.querySelector('.titulo');

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
  if(windowScroll > 170) {
    header.classList.add('scroll-up');
    titulo.classList.add('cambioTitulo')
  } else {
    header.classList.remove('scroll-up');
    titulo.classList.remove('cambioTitulo');


  }
}
