'use strict';

const body = document.body;
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const menuLinks = document.querySelectorAll('.links__link');
const form = document.querySelector('.form');
const backToTop = document.querySelector('.back');

if (burger) {
  burger.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.add('page__body--with-menu');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.remove('page__body--with-menu');
  });
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('page__body--with-menu');
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
}

if (backToTop) {
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('back--visible');
    } else {
      backToTop.classList.remove('back--visible');
    }
  });
}
