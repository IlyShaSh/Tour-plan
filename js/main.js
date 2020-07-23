var hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  effect: "coverflow"
});

var reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
});

ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [7.47302614, 80],
    zoom: 10
  });
}

$('.parallax-window').parallax({
  imageSrc: '../img/newsletter-bg.jpg',
  speed: 0.5,
  zIndex: -100,
  androidFix: false,
});