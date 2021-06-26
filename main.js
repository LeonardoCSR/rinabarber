const nav = document.querySelector('#header nav') // PROCURA DE SELETOR #HEADER NAV
const toggle = document.querySelectorAll('nav .toggle') // PROCURA DE TODOS OS SELETORES .TOGGLE DENTRO DO NAV
const links = document.querySelectorAll('nav ul li a')

// FOR = PARA CONSTANTE ELEMENT
for (const element of toggle) {
  //EVENTO DE ESCUTA
  element.addEventListener('click', function () {
    //PROCURA A CLASSE DO NAV E ADICIONA/REMOVE O SHOW
    nav.classList.toggle('show')
  })
}

/* quando clicar no links do menu ele fecha*/
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    // remove do nav a classe show
  })
}


  // seleciona o seletor do header
  const header = document.querySelector('#header')
  // obtem a altura do header
  const navHeight = header.offsetHeight
  // verifica se o scroll e maior que a altura do header
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //adiciona a classe no header de scroll
    header.classList.add('scroll')
  } else {
    //remove a classe do header
    header.classList.remove('scroll')
  }
}

// TESTIMONIALS SLIDER CAROUSEL SWIPER

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  } 
})

// Scroll reveal mostrar elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// BOTAO PARA VOLTAR PARA O TOP
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// agrupamento de funcoes
// menu ativo
// WHEN SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

