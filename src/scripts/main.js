'use strict';

const form = document.querySelector('.follow__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0 });
  form.reset();
});

const windowWidth = window.innerWidth;

const indicatorFirst = document.getElementById('scroll-btn-1');
const indicatorSecond = document.getElementById('scroll-btn-2');
const indicatorThird = document.getElementById('scroll-btn-3');
const indicatorFourth = document.getElementById('scroll-btn-4');
const indicators = document.querySelectorAll('.scroll-indicator');
const scrollBar = document.querySelector('.scroll__images');

function handleScroll(number) {
  const indicator = document.querySelector(`#scroll-btn-${number}`);

  indicators.forEach(indicator => indicator.classList.remove('scroll-indicator--active'));

  ['1', '2', '3', '4'].forEach(num => {
    if (scrollBar.classList.contains(`scroll__images--${num}`)) {
      scrollBar.classList.remove(`scroll__images--${num}`)
    }
  });

  indicator.classList.add('scroll-indicator--active');
  scrollBar.classList.add(`scroll__images--${number}`);
}

indicatorFirst.addEventListener('click', () => handleScroll('1'))
indicatorSecond.addEventListener('click', () => handleScroll('2'))
indicatorThird.addEventListener('click', () => handleScroll('3'))
indicatorFourth.addEventListener('click', () => handleScroll('4'))
