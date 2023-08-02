$(function(){

  console.log('pfpfp')
  console.log('pipi')
  console.log('lll')

  $('.winners__link').on('click', function(e){

    e.preventDefault();

    $('.winners__link').removeClass('winners__link--active');
    $(this).addClass('winners__link--active');

    $('.winners__bottom-item').removeClass('winners__bottom-item--active');
    $($(this).attr('href')).addClass('winners__bottom-item--active');

  });

  $('.header__menu').on('click', function(){

    $('.menu--small').toggleClass('menu--active');

  });

  if (window.innerWidth >= 1200) {

    $('.gallery__link').on('click', function(){

      $('.gallery__all-pictures').removeClass('gallery__all-pictures--hidden');

    });

  }

  $('.gallery__all-close').on('click', function(){

    $('.gallery__all-pictures').addClass('gallery__all-pictures--hidden');
    $('body').removeClass('hidden');

  });

  $('.gallery__small-item').on('click', function(){

    $('.gallery__big-img-box').removeClass('gallery__big-img-box--active');
    $($(this).attr('href')).addClass('gallery__big-img-box--active');
    
  });

  $('.gallery__link').on('click', function(d){

    d.preventDefault();

    $('.gallery__big-img-box').removeClass('gallery__big-img-box--active');
    $($(this).attr('href')).addClass('gallery__big-img-box--active');

    $('body').addClass('hidden');

  });

  swiper.on('transitionEnd', function() {

    const slickAlt = $('.swiper-slide-active .video__img').attr('alt');
    const slickDate = $('.swiper-slide-active .video__img').attr('data-date');

    $('.video__text').text(slickAlt);
    $('.video__date').text(slickDate);

  });
  
  function eclOfNum(n, titles) {

    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

  }

  function getTimeRemaining(endtime) {

    // const total = Date.parse(endtime) - Date.parse(new Date());
    new Date("2021-12-20T18:15Z");
    const total = Date.parse(endtime) - Date.parse(new Date());
    
    // const total = new Date("2021-12-20T18:15Z");
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
   
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };

  }
 
  function initializeClock(id, endtime) {

    const clock = document.querySelector('.timer__clock');
    const daysSpan = clock.querySelector('.timer__days');
    const hoursSpan = clock.querySelector('.timer__hours');
    const minutesSpan = clock.querySelector('.timer__minutes');
    const secondsSpan = clock.querySelector('.timer__seconds');

    const _day = document.querySelector('.timer__day');
    const _hour = document.querySelector('.timer__hour');
    const _minute = document.querySelector('.timer__minute');

    const daysTime = document.querySelector('.timer__days');
    const hoursTime = document.querySelector('.timer__hours');
    const minutesTime = document.querySelector('.timer__minutes');
 
    function updateClock() {

      const t = getTimeRemaining(endtime);
 
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      _day.innerHTML = eclOfNum((daysTime.innerHTML), ['день', 'дня', 'дней']);
      _hour.innerHTML = eclOfNum((hoursTime.innerHTML), ['час', 'часа', 'часов']);
      _minute.innerHTML = eclOfNum((minutesTime.innerHTML), ['минута', 'минуты','минут']);
 
      if (t.total <= 0) {

        clearInterval(timeinterval);

      }

    }
 
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);

  }
 
  if (document.querySelector('.timer__clock')) {

    const deadline = $('.timer__clock').attr('data-time');
    initializeClock('.timer__clock', deadline);

  }

});

var swiperFive = new Swiper('.swiper-five', {

  slidesPerView: 1,
  spaceBetween: 0, 
  speed: 500,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.video__swiper-next',
    prevEl: '.video__swiper-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -450,
    },
  }

});

var swiper = new Swiper('.swiper-one', {

  slidesPerView: 1,
  spaceBetween: 0, 
  speed: 500,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.video__swiper-next',
    prevEl: '.video__swiper-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -450,
    },
  }

});

var swiperTwo = new Swiper('.swiper-two', {

  slidesPerView: 1,
  spaceBetween: 0, 
  speed: 500,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.gallery__swiper-next',
    prevEl: '.gallery__swiper-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -450,
    },
  }

});

var swiperThree = new Swiper('.swiper-three', {

  slidesPerView: 3, 
  spaceBetween: 20, 
  loop: true,
  navigation: {
    nextEl: '.info-partners__swiper-next',
    prevEl: '.info-partners__swiper-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 4,
      spaceBetween: 15, 
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 74,
    },
  }

});

Fancybox.bind("[data-fancybox]", {});