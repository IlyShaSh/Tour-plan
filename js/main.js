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
        phone: {
          minlength: "Please enter at least 10 characters."
        },
      },
    });
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

  AOS.init();

  $(".map").click(function () {
    let map = $(".map");
    map.append('<iframe class="map-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0046814309244!2d79.80141631459692!3d7.574466994537737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3ae2c96110de8289%3A0x3fd7668bc2d85eb9!2sGrand%20Hilton%20Hotel!5e0!3m2!1sru!2sru!4v1595426622162!5m2!1sru!2sru" aria-hidden="false" tabindex="0"></iframe>');
    map.removeClass('map-google');
  });
});