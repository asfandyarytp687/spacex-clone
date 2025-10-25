const hamburger = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrolled = false;

hamburger.addEventListener('click', navToggle);
window.addEventListener('scroll', scrollPage);

function navToggle() {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('show-menu');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
}

function countUp() {
  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100; // Adjust the divisor to change speed

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCount, 75);
      } 
      else {
        counter.innerText = target;
      }
    }
    updateCount()
  })
}

function scrollPage() {
  const scrollPos = window.scrollY;
  
  if (scrollPos > 100 && !scrolled) {
    countUp()
    scrolled = true;
  } else if (scrollPos < 100 && scrolled) {
    resetCounters()
    scrolled = false;
  }
}

function resetCounters() {
  counters.forEach(counter => {
    counter.innerText = '0';
  });
}

