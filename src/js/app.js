//todo Подключение модулей
//=============================================================================================
//! Библиотека для закрытия при свайпе offcanvas (код в global.js)
//import "./modules/jquery.touchSwipe.min.js";
//* подключение boostrap
import 'bootstrap';
//* jqueryMaskdinput
import "./modules/jquery.maskedinput.js";
//* Глобальный файл скриптов
import "./modules/global.js";
//* Класс webp и no-webp
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//* Перемещение блоков на определенных разрешениях
import * as DA from "./modules/functions.js";
DA.adaptDynamic();
//? Квиз
// import * as quiz from "./modules/quiz.js";
// quiz.quiz();
//? Таймер для квиза
// import * as timer from "./modules/quiz.js";
// timer.timer();
//? подключение fancybox
// import { Fancybox } from "@fancyapps/ui";

import "./modules/sliders.js";
import "./modules/main.js";
