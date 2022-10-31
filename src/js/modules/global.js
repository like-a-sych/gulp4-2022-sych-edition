
//Маска для ввода
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

//Проверка формы бутстрапом
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

$(".form-check__input").click(function () {
  if ($(this).closest('input:checkbox').is(':checked')) {
    $(this).closest('form').find('button').prop('disabled', false);
  } else {
    $(this).closest('form').find('button').prop('disabled', true);
  }
});

// Чтобы не прыгал header при открытии бутсраповских модалок
$(".modal").on("show.bs.modal", function (e) {
  $("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}),
  $(".modal").on("hidden.bs.modal", function (e) {
    $("header").css("padding-right", "0")
  });

$(".offcanvas").on("show.bs.offcanvas", function (e) {
  $("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
  $("header").css("padding-right", "0")
});

$(".offcanvas").on("show.bs.offcanvas", function (e) {
  $(".main-nav").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
  $(".main-nav").css("padding-right", "0")
});

$(".modal").on("show.bs.modal", function (e) {
  $(".main-nav").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}),
  $(".modal").on("hidden.bs.modal", function (e) {
    $(".main-nav").css("padding-right", "0")
  });


//Сейчас работаем

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

//Отключить эффект :hover при скроле

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
