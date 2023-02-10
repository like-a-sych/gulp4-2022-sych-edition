<?php
session_start();
// Запрет на кэширование
header("Expires: Mon, 23 May 1995 02:00:00 GTM");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GTM");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
//****

$log == "";
$error = "no"; //флаг наличия ошибки

require_once 'JsHttpRequest.php';
$JsHttpRequest = new JsHttpRequest("UTF-8");

//Короткие имена переменных и обрезка пробелов img_title

$phone = trim($_POST['phone']);
$email = $_POST['email'];
$from = trim($_POST['from']);
$name = trim($_POST['name']);
$text = trim($_POST['text']);
$url = trim($_POST['url']);


$picture = "";

// Если поле выбора вложения не пустое - закачиваем его на сервер

if (!empty($_FILES['file']['tmp_name'])) {

  // Закачиваем файл

  $extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);

  $path = 'https://rosvent.dmgug.ru/wp-content/themes/rosvent' . '/files/' . md5(strtotime('now')) . '_' . md5($_FILES['file']['name']) . '.' . $extension;


  if (copy($_FILES['file']['tmp_name'], $path)) $picture = $path;
}


//Проверка наличия введенного текста комментария

setcookie("phone", $phone);

if (empty($phone)) {
  $log .= "<li>Необходимо указать номер телефона!</li>";
  $error = "yes";
}
// if (empty($email)) {
//   $log .= "<li>Необходимо указать Email!</li>";
//   $error = "yes";
// }
// if (empty($name)) {
//   $log .= "<li>Необходимо указать Имя!</li>";
//   $error = "yes";
// }




//Если нет ошибок отправляем email
if ($error == "no") {
  if ($_POST['token'] == $_SESSION['lastToken']) {
  } else {
    $_SESSION['lastToken'] = $_POST['token'];
    $prov = 0;
    setcookie('phone', $phone);
    $_COOKIE['phone'] = $phone;

    // Формирование самого письма
    $title = "Заявка с сайта: rosvent";
    $body = " Заявка с сайта: rosvent<br>
--------------------------------------------------<br><br>";

    //Отправка письма админу о новом комментарии
    $emailadmin = 'avocode.web01@yandex.ru'; //e-mail админа


    $to = $emailadmin;
    $sub = '=?UTF-8?B?' . base64_encode('Заявка с сайта rosvent') . '?=';

    if ($path) {
      $mes = "-------------------------------------------------- <br>";

      if ($from) {
        $mes .= "Заявка с формы: $from <br>";
      }
      if ($name) {
        $mes .= "Имя: $name <br>";
      }
      if ($phone) {
        $mes .= "Телефон: $phone <br>";
      }
      $mes .= "-------------------------------------------------- <br>";

      $mes .= "Файл: $path\n";
    } else {
      $mes = "-------------------------------------------------- \n";

      if ($from) {
        $mes .= "Заявка с формы: $from \n";
      }
      if ($name) {
        $mes .= "Имя: $name \n";
      }
      if ($phone) {
        $mes .= "Телефон: $phone \n";
      }
      $mes .= "-------------------------------------------------- \n";
    }


    // Вспомогательная функция для отправки почтового сообщения с вложением

    function send_mail($to, $sub, $html, $path)

    {

      $fp = fopen($path, "r");

      if (!$fp) {
        /* https://rosvent.dmgug.ru/ */
        print "Файл $path не может быть прочитан";

        exit();
      }

      $file = fread($fp, filesize($path));

      fclose($fp);



      $boundary = "--" . md5(uniqid(time())); // генерируем разделитель

      $headers .= "MIME-Version: 1.0\n";

      $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

      $multipart .= "--$boundary\n";

      $kod = 'UTF-8'; // или $kod = 'windows-1251';

      $multipart .= "Content-Type: text/html; charset=$kod\n";

      $multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";

      $multipart .= "$html";



      $message_part = "--$boundary\n";

      $message_part .= "Content-Type: application/octet-stream\n";

      $message_part .= "Content-Transfer-Encoding: base64\n";

      $message_part .= "Content-Disposition: attachment; filename = \"" . $path . "\"\n\n";

      $message_part .= chunk_split(base64_encode($file)) . "\n";

      $multipart .= $message_part . "--$boundary--\n";



      if (!mail($to, $sub, $multipart, $headers)) {

        echo "К сожалению, письмо не отправлено";

        exit();
      }
    }

    if (!empty($picture)) {


      send_mail($to, $sub, $mes, $picture);
    } else {

      // $from = "Заявка";



      $headers = 'From: rosvent.ru
';
      $headers .= 'MIME-Version: 1.0
';
      $headers .= 'Content-type: text/plain; charset=UTF-8
';
      mail($to, $sub, $mes, $headers);
      //****

    }
    $ok = "<div class='ok'><strong>Спасибо! Мы перезвоним вам, в ближайшее время!</strong></div>";


    //Помещаем результат в массив
    $GLOBALS['_RESULT'] = array(
      'error' => 'no',
      'text' => $name,
      'ok' => $ok
    );

  }
} else //если ошибки есть
{
  $log = "<ul class='no'>" . $log . "</ul>";

  //Отправляем результат в массив
  $GLOBALS['_RESULT'] = array(
    'error' => 'yes',
    'er_mess' => $log
  );
}
