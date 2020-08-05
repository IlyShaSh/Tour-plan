$(document).ready(function () {
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

  /* function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [7.47302614, 80],
      zoom: 10
    });
  }

  ymaps.ready(init); */

  $('.parallax-window').parallax({
    imageSrc: '../img/newsletter-bg.jpg',
    speed: 0.5,
    zIndex: -100,
    androidFix: false,
  });

  var menuButton = $(".menu-button");
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass('navbar-bottom--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
    $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  };

  function closeModal(event) {
    // Функция, с помощью которой нас не перебрасывает наверх страницы (отменяется якорная ссылка)
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      closeModal(event);
    }
  });

  $(".newsletter-form").validate({
    errorClass: "invalid-2",
  });

  $(document).ready(function () {
    $('.phone').mask('+7 (999) 999-99-99', {
      'translation': {
        9: {
          pattern: /[0-9]/
        },
      },
    });
  });

  $.validator.addMethod("regex", function (value, element, regexpr) {
    return regexpr.test(value);
  }, "The name must contain only latin letters without spaces");


  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z]+$/
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          minlength: 10
        }
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Provide a name",
          minlength: "The name should not be shorter than 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });


  AOS.init();

});