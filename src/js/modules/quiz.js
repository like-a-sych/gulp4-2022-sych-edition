export function quiz() {
	//?quiz-old
	// $(".quiz-variants__variant").click(function () {

	//   if ($(this).parent().parent().find($("input:checked")).length > 0) {
	//     $(this).closest(".step.active").next().addClass("active"),
	//       $(this).closest(".step.active").removeClass("active");
	//     //var s = $('.quiz').offset().top - 10; $("body,html").animate({ scrollTop: s }, 500);
	//     var i = $(this).closest('.quiz').find(".prg1 .line").attr("data-left");
	//     $(this).closest('.quiz').find(".prg1 .line").css("left", -1 * (parseInt(i) - 20) + "%"),
	//       $(this).closest('.quiz').find(".prg1 .line").attr("data-left", parseInt(i) - 20);
	//     var a = $(this).closest('.quiz').find(".current-step").html();
	//     $(this).parent().closest('.quiz').find('.current-step').html(a - 1);
	//     if (a == 2) {
	//       $(this).closest(".quiz").find(".progress-text").html('Все готово. <strong>Остался последний шаг</strong>');
	//       //$('#progress-text').addClass('final-step');
	//       $(this).closest(".section-5").find("._container").addClass("quiz-finish");
	//       //var s = $('.quiz').offset().top; $("body,html").animate({ scrollTop: s }, 500);
	//     }
	//     if (a == 2) { $(this).closest(".quiz").find('.rp-rule__span').html('вопрос') } else
	//       if (a == 3 || a == 4 || a == 5) { $(this).closest(".quiz").find('.rp-rule__span').html('вопроса') } else {
	//         $(this).closest(".quiz").find('.rp-rule__span').html('вопросов')
	//       }
	//   }
	//*quiz-new
	const arrVariants = document.querySelectorAll('.quiz-variants__variant input'); //собираем коллекцию всех вариантов квиза
	const arrSteps = document.querySelectorAll('.step'); //собираем коллекцию всех шагов квиза
	let currentStep = document.querySelector('.current-step'); //текущий шаг
	let line = document.querySelector('.line'); //линия прогресса
	let lineSequence = 100 / (arrSteps.length - 1); //считаем сколько шагов будет у линии
	let lineStart = -(100 - lineSequence); //получаем начальное значение линии
	line.style.left = lineStart + '%'; //устанавливаем полученное значение
	let counter = 0;
	for (let i = 0; i < arrVariants.length; i++) { //добавляем их в массив и вешаем на них эвент по клику
		arrVariants[i].addEventListener('change', function () {
			let inputChecked = arrVariants[i];
			if (inputChecked.checked) { //проверка на пустой checked
				lineStart += lineSequence;
				line.style.left = lineStart + '%'; //сдвигаем на полученный шаг
				currentStep.innerHTML = currentStep.innerHTML - 1; // счетчик шагов
				if (currentStep.innerHTML == '4' || currentStep.innerHTML == '3' || currentStep.innerHTML == '2') { // изменяем орфографию
					document.querySelector('._spelling').innerHTML = 'вопроса'
				} if (currentStep.innerHTML == '1') {
					document.querySelector('._spelling').innerHTML = 'вопрос';
				} else {
					document.querySelector('._spelling').innerHTML = 'вопросов';
				}
				if (arrSteps.length == counter + 2) { // т.к. шаг начинается с нуля, а первый и последний слайд не добавляют в counter инкремент, то добавляем 2
					document.getElementById('quiz-block').classList.add('final-quiz');
					document.querySelector('.progress-text').innerHTML = 'Остался последний шаг';
				} // добавление класса после финального шага
				arrSteps[counter].closest('.active').classList.remove('active'); //передача класса active после checked
				counter++;
				arrSteps[counter].classList.add('active');
			}
		})
	};

	//*Кнопки "пропустить" и "назад"

	// $(".quiz-variants__skip").click((function () {
	// 	$(this).closest('.quiz').find(".step.active").next().addClass("active"),
	// 		$(this).closest('.step.active').removeClass("active");

	// 	var e = $(this).data("step");

	// 	var t = $(this).closest('.quiz').find(".prg1 .line").attr("data-left");
	// 	$(this).closest('.quiz').find(".prg1 .line").css("left", -1 * (parseInt(t) - 25) + "%"),
	// 		$(this).closest('.quiz').find(".prg1 .line").attr("data-left", parseInt(t) - 25);
	// 	var a = $(".current-step").html();
	// })),

	// 	$(".quiz-variants__prev").click((function () {
	// 		$(this).closest('.quiz').find(".step.active").prev().addClass("active"),
	// 			$(this).closest('.step.active').removeClass("active");

	// 		var e = $(this).data("step");

	// 		var t = $(this).closest('.quiz').find(".prg1 .line").attr("data-left");

	// 		$(this).closest('.quiz').find(".prg1 .line").css("left", -1 * (parseInt(t) + 25) + "%"),
	// 			$(this).closest('.quiz').find(".prg1 .line").attr("data-left", parseInt(t) + 25);
	// 		var a = $(".current-step").html();
	// 		var a = $(this).closest('.quiz').find(".current-step").html();
	// 		$(this).parent().closest('.quiz').find('.current-step').html(parseInt(a) + 1);
	// 		if (a == 2) {
	// 			$(this).closest(".quiz").find(".progress-text").html('Все готово. <strong>Остался последний шаг</strong>');
	// 			//$('#progress-text').addClass('final-step');
	// 			$(this).closest(".section-9__container").addClass("quiz-finish");
	// 			//var s = $('.quiz').offset().top; $("body,html").animate({ scrollTop: s }, 500);
	// 		}
	// 		if (a == 2) { $(this).closest(".quiz-section").find('.rp-rule__span').html('вопрос') } else
	// 			if (a == 3 || a == 4 || a == 5) { $(this).closest(".quiz-section").find('.rp-rule__span').html('вопроса') } else {
	// 				$(this).closest(".quiz-section").find('.rp-rule__span').html('вопросов')
	// 			};
	// 	}));

	//* множественный выбор
	// $('.variant2').click(function () {
	// 	if ($(this).find('input').prop("checked")) {
	// 		$(this).addClass('active22');
	// 	}
	// 	else {
	// 		$(this).removeClass('active22');
	// 	}
	// });

	//*всплывающая подскака на бутсрапе

	// var popoverTriggerList, popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))).map((function (e) {
	// 	return new bootstrap.Popover(e)
	// }
	// ));
	// popoverList = (popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))).map((function (e) {
	// 	return new bootstrap.Popover(e)
	// }
	// ));
	// $("body").on("click", (function (e) {
	// 	$('[data-bs-toggle="popover"]').each((function () {
	// 		$(this).is(e.target) || 0 !== $(this).has(e.target).length || 0 !== $(".popover").has(e.target).length || $(this).popover("hide")
	// 	}
	// 	))
	// }
	// ));
};

export function timer() {
	//таймер для квиза


	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 25);
		let minutes = Math.floor((t / 1000 / 60) % 20);
		return {
			'total': t,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	function initializeClock(id, endtime) {
		let clock = document.getElementById(id);
		let minutesSpan = clock.querySelector('.minutes');
		let secondsSpan = clock.querySelector('.seconds');
		function updateClock() {
			let t = getTimeRemaining(endtime);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
		updateClock();
		let timeinterval = setInterval(updateClock, 1000);
	}
	let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
	let elementDo = document.querySelector(".countdown");
	if (elementDo) {
		initializeClock('countdown', deadline);
		initializeClock('countdown2', deadline);
	};
}


