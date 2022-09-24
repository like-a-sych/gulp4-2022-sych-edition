// Подключение модулей

// подключение boostrap
import 'bootstrap';

// jqueryMaskdinput
import * as MaskInput from "./modules/jquery.maskedinput.js";
MaskInput.mask();

// Класс webp и no-webp
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// Перемещение блоков на определенных разрешениях
import * as DA from "./modules/functions.js";
DA.adaptDynamic();

/* // Квиз
import * as quiz from "./modules/quiz.js";
quiz.quiz();

// Таймер для квиза
import * as timer from "./modules/quiz.js";
timer.timer(); */


// Глобальный файл скриптов
import * as glogaljs from "./modules/global.js";
glogaljs.global();


// подключение fancybox
/* import { Fancybox } from "@fancyapps/ui"; */

// подключение swiper
/* import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); */
