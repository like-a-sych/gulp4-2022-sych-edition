
//*Маска для ввода
$.mask.definitions.q = "[1,2,3,4,5,6,9]",
  $('input[type="tel"]').mask('+7q999999999');

$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
$('input[name="phone"]').one('click', function () {
  $(this).setCursorPosition(2);
});

//*Проверка формы бутстрапом
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');

      }, false);
    });
  }, false);
})();

//? ПРОВЕРКА ЧЕКБОКСА ЕСЛИ СТОИТ novalidate

// $(".form-check__input").click(function () {
//   if ($(this).closest('input:checkbox').is(':checked')) {
//     $(this).closest('form').find('button').prop('disabled', false);
//   } else {
//     $(this).closest('form').find('button').prop('disabled', true);
//   }
// });

//? Чтобы не прыгал header при открытии бутсраповских модалок
// $(".modal").on("show.bs.modal", function (e) {
//   $("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
// }),
//   $(".modal").on("hidden.bs.modal", function (e) {
//     $("header").css("padding-right", "0")
//   });

// $(".offcanvas").on("show.bs.offcanvas", function (e) {
//   $("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
// }), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
//   $("header").css("padding-right", "0")
// });

// $(".offcanvas").on("show.bs.offcanvas", function (e) {
//   $(".main-nav").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
// }), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
//   $(".main-nav").css("padding-right", "0")
// });

// $(".modal").on("show.bs.modal", function (e) {
//   $(".main-nav").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
// }),
//   $(".modal").on("hidden.bs.modal", function (e) {
//     $(".main-nav").css("padding-right", "0")
//   });


//? Сейчас работаем

// var date = new Date();
// var hourr = date.getHours();
// var week = date.getDay();

// if (hourr < 11 || hourr > 20) {
//   $('._worknow').addClass('none');
//   $('._online').addClass('none');
// }
// else {
//   $('._worknow').removeClass('none');
//   $('._online').removeClass('none');
// };

//? Отключить эффект :hover при скроле

// let body = document.body,
//   timer;

// window.addEventListener('scroll', function () {
//   clearTimeout(timer);
//   if (!body.classList.contains('disable-hover')) {
//     body.classList.add('disable-hover')
//   }

//   timer = setTimeout(function () {
//     body.classList.remove('disable-hover')
//   }, 500);
// }, false);


//? ПЛАВНЫЙ СКРОЛЛ К ЯКОРЯМ


// $('.to-anchor').click(function (event) {
//   $('#offcanvasRight').offcanvas('hide');
//   $('.modal').modal('hide');

//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//     &&
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: target.offset().top - 50
//       }, 500, function () {
//         // Callback after animation
//         // Must change focus!
//         var $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//           $target.focus(); // Set focus again
//         };
//       });
//     }
//   }
// });


//? ЗАКРЫТЬ МОБИЛЬНОЕ МЕНЮ СВАЙПОМ
//! подключить jquery.touchSwipe.min в app.js
// $(document).ready(function () {
//   $("#offcanvasRight").swipe({
//     allowPageScroll: "vertical",
//     swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData) {
//       if (phase == "move" && direction == "right") {
//         $('#offcanvasRight').offcanvas('hide');
//         return false;
//       }
//     }
//   });
// });


//? ДОБАВЛЕНИЕ КЛАССА ПРИ СКРОЛЛЕ ВНИЗ (ФИКСИРОВАНЫЙ ХЕДЕР)
// var minOffset = 50;
// window.onscroll = function () {
//   let has_class = document.body.classList.contains("is_scrolled");

//   if (minOffset < document.documentElement.scrollTop) {
//     if (!has_class) {
//       document.body.classList.add("is_scrolled");
//     }
//   } else if (has_class) {
//     document.body.classList.remove("is_scrolled")

//   }
// }

//? Карта YANDEX-map
//! Подключить - <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=0333b546-e4cd-4422-b583-f1193f0144a4"></script>

// if (document.getElementById('map')) {
//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//       center: [53.25759657116101, 50.22204004896543],
//       zoom: 17
//     }, {
//       searchControlProvider: 'yandex#search'
//     }),
//       destinations = {
//         'Офис': [53.25759657116101, 50.21889649999998],
//         'Производство': [53.193131571226566, 50.29483150000001],
//       },

//       myPlacemark = new ymaps.Placemark(destinations['Офис'], {
//         hintContent: 'Офис',
//         balloonContent: 'Россия, Самара, проспект Кирова, 415 '
//       }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#image',
//         // Своё изображение иконки метки.
//         iconImageHref: 'img/map.png',
//         // Размеры метки.
//         iconImageSize: [30, 35],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-5, -38]
//       }),
//       myPlacemark2 = new ymaps.Placemark(destinations['Производство'], {
//         hintContent: 'Производство',
//         balloonContent: 'Россия, Самара, проспект Кирова, 5'
//       }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#image',
//         // Своё изображение иконки метки.
//         iconImageHref: 'img/map.png',
//         // Размеры метки.
//         iconImageSize: [30, 35],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-5, -38]
//       });

//     myMap.geoObjects
//       .add(myPlacemark)
//       .add(myPlacemark2);
//     myMap.behaviors.disable('scrollZoom');
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

//       myMap.behaviors.disable('drag');
//     }
//   });
// }
