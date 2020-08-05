<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$buttonName = $_POST['name'];
$valueName = $buttonName->getAttribute('name');
echo $valueName;
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if (buttonName == "footer__button") {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}
else if (buttonName == "subscribe__button") {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новый пользователь подписался на вашу новостную расслыку!</h2>
    <b>Почта:</b><br>$email
    ";
}
else if (buttonName == "modal__button") {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'bicyclestandard534@gmail.com'; // Логин на почте
    $mail->Password   = 'ShuriginIlya534'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('bicyclestandard534@gmail.com', 'Ilya Shurygin'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('shuryginim@yandex.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if (($buttonName == "modal__button") || ($buttonName == "footer__button")):
    header('Location: thankyou.html');
else:
  header('Location: subscription.html');
endif;