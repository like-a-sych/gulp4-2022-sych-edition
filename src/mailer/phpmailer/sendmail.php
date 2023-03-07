<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require(__DIR__."/PHPMailer/src/Exception.php");
require(__DIR__."/PHPMailer/src/PHPMailer.php");

if ($_POST['invisible'] != '') {
	die('Ботам - нет!');
} else {
	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('info@dvernoff.ru', 'ДВЕРНОФФ'); // Указать нужный E-mail
	//Кому отправить
	$mail->addAddress('avocode.web01@yandex.ru'); // Указать нужный E-mail
	//Тема письма
	$mail->Subject = 'Заявка с сайта ДВЕРНОФФ';

	$phone = trim($_POST['phone']);
	$from = trim($_POST['from']);
	$email = trim($_POST['email']);
	$name = trim($_POST['name']);
	$invisible = trim($_POST['invisible']);
	$question1 = trim($_POST['question-1']);
	$question2 = trim($_POST['question-2']);
	$question3 = trim($_POST['question-3']);
	$question4 = trim($_POST['question-4']);


	//Тело письма
	$body = '<h1>'. $from . '</h1>';


	if(!empty($phone)){
		$body.='<p><strong>Телефон:</strong> '. $phone . '</p>';
	}
	if(!empty($email)){
		$body.='<p><strong>Email:</strong> '. $email . '</p>';
	}
	if(!empty($name)){
		$body.='<p><strong>Имя:</strong> '. $name . '</p>';
	}
	if(!empty($question1)){
		$body.='<p><strong>Вопрос №1:</strong> '. $question1 . '</p>';
	}
	if(!empty($question2)){
		$body.='<p><strong>Вопрос №2:</strong> '. $question2 . '</p>';
	}
	if(!empty($question3)){
		$body.='<p><strong>Вопрос №3:</strong> '. $question3 . '</p>';
	}
	if(!empty($question4)){
		$body.='<p><strong>Вопрос №4:</strong> '. $question4 . '</p>';
	}



	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Файл во вложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}


	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
}
?>