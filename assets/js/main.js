const navMenu = document.getElementById('nav-menu'),
  navClose = document.getElementById('nav-close'),
  navToggle = document.getElementById('nav-toggle')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

ScrollReveal().reveal('.home', { delay: 500, scale: 2 })
