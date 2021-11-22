const nav = document.querySelector('.nav');
const toggler = document.querySelector('.nav__toggler');

toggler.addEventListener('click', function() {
  nav.classList.toggle('nav--open');
});
