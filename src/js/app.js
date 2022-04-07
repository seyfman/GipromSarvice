import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

$(document).ready(function () {


  //initialize swiper when document ready === Слайдер
  let swiper = new Swiper('.swiper', {
    modules: [Pagination],
    // Optional parameters
    breakpoints: {
      320: { slidesPerView: 1.5, },
      574: { slidesPerView: 2, },
      768: { slidesPerView: 2.5, },
      992: { slidesPerView: 3, },
      1050: { slidesPerView: 3.5, },
      1200: { slidesPerView: 4, },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });


  // === Менюха ===
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.header').height()) {
      $('.nav-bar').removeClass("nav-bar--active");
    } else {
      $('.nav-bar').addClass("nav-bar--active");
    }
  });



  // === Плавный скролл ===
  $('.li-nk').click(function (e) { // отслеживаем клик по кнопке с классом li-nk
    e.preventDefault();
    var scroll_el = $(this).attr('href'); // берем у него содержимое атрибута href, которое начинается на "#section" или ".section"
    $('html, body').animate({
      scrollTop: $(scroll_el).offset().top - -1 // отступ (пиксели)
    }, 1000); // скорость (миллисекунды)
    return false; // отключаем действие по умолчанию
  });


  // === для модального окна Объекты ===

  // открытие модального окна
  $('.object__discription-link').click(function (e) {
    e.preventDefault();
    $('.object-modal').css("display", "flex").hide().fadeIn();
    $('.object-modal').addClass('object-modal--active')
    $('body').addClass('no-scroll')
    $('#object-1').addClass('object-modal__map--active')
  });
  // закрытие модального окна
  $('.object-modal__close-btn').click(function (e) {
    e.preventDefault();
    $('.object-modal').fadeOut();
    $('.object-modal').removeClass('object-modal--active')
    $('body').removeClass('no-scroll')
  });

  // === Табы ===
  $('.object-modal__item-tab').click(function (e) {
    $('.object-modal__item-tab').removeClass('object-modal__item-tab--active');
    $(this).addClass('object-modal__item-tab--active');
    $('.object-modal__map').removeClass('object-modal__map--active');
    $('.object-modal__map').hide().eq($(this).index()).fadeIn().removeClass('object-modal__map--active');
  }); $('.object-modal__map').hide().eq(0).fadeIn().addClass('object-modal__map--active');



  // === для модального окна Все новости ===
  // открытие модального окна
  $('.news__btn').click(function (e) {
    e.preventDefault();
    $('.all-news').hide().fadeIn();
    $('.all-news').addClass('all-news--active')
    $('body').addClass('no-scroll')
  });
  // закрытие модального окна
  $('.all-news__close').click(function (e) {
    e.preventDefault();
    $('.all-news').fadeOut();
    $('.all-news').removeClass('all-news--active')
    $('body').removeClass('no-scroll')
  });


  // === для модального окна Ленты новостей ===
  // открытие модального окна
  $('.all-news__btn').click(function (e) {
    e.preventDefault();
    $('.news-list').hide().fadeIn();
    $('.news-list').addClass('news-list--active')
    $('body').addClass('no-scroll')
  });
  // закрытие модального окна
  $('.news-list__top-close').click(function (e) {
    e.preventDefault();
    $('.news-list').fadeOut();
    $('.news-list').removeClass('news-list--active')
    $('body').removeClass('no-scroll')
  });

  // === для модального окна Новость-1 ===
  // открытие модального окна
  $('.all-news__item-btn-1').click(function (e) {
    e.preventDefault();
    $('#modal-news-1').hide().fadeIn();
    $('#modal-news-1').addClass('modal-news--active')
    $('body').addClass('no-scroll')
  });
  // закрытие модального окна
  $('.news-list__top-close').click(function (e) {
    e.preventDefault();
    $('#modal-news-1').fadeOut();
    $('#modal-news-1').removeClass('modal-news--active')
    $('body').removeClass('no-scroll')
  });

  // === для модального окна Новость-2 ===
  // открытие модального окна
  $('.all-news__item-btn-2').click(function (e) {
    e.preventDefault();
    $('#modal-news-2').hide().fadeIn();
    $('#modal-news-2').addClass('modal-news--active')
    $('body').addClass('no-scroll')
  });
  // закрытие модального окна
  $('.news-list__top-close').click(function (e) {
    e.preventDefault();
    $('#modal-news-2').fadeOut();
    $('#modal-news-2').removeClass('modal-news--active')
    $('body').removeClass('no-scroll')
  });

  // === для модального окна Новость-3 ===
  // открытие модального окна
  $('.all-news__item-btn-3').click(function (e) {
    e.preventDefault();
    $('#modal-news-3').hide().fadeIn();
    $('#modal-news-3').addClass('modal-news--active')
    $('body').addClass('no-scroll')
  });
  // закрытие модального окна
  $('.news-list__top-close').click(function (e) {
    e.preventDefault();
    $('#modal-news-3').fadeOut();
    $('#modal-news-3').removeClass('modal-news--active')
    $('body').removeClass('no-scroll')
  });

  // === для модального окна Контакты ===
  // открытие модального окна
  $('.footer__item-link').click(function (e) {
    e.preventDefault();
    $('.modal-contact').hide().fadeIn();
    $('.modal-contact').addClass('modal-contact--active')
    $('body').addClass('no-scroll')
  });
  // закрытие модального окна
  $('.modal-contact__closed').click(function (e) {
    e.preventDefault();
    $('.modal-contact').fadeOut();
    $('.modal-contact').removeClass('modal-contact--active')
    $('body').removeClass('no-scroll')
  });


});



// import('./modules/main.js')

