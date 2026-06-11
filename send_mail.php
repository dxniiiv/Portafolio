<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre  = htmlspecialchars($_POST['nombre']);
    $correo  = htmlspecialchars($_POST['correo']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'daniiielvargas27@gmail.com';
        $mail->Password   = 'jivbwgntzawhcxmq'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Remitente y destinatario
        $mail->setFrom('daniiielvargas27@gmail.com', 'Portafolio Daniel Vargas');
        $mail->addAddress('daniiielvargas27@gmail.com', 'Daniel Vargas');
        $mail->addReplyTo($correo, $nombre);

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = "Nuevo mensaje de contacto - $nombre";
        $mail->Body    = "
            <h3>Nuevo mensaje desde tu portafolio</h3>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Correo:</strong> $correo</p>
            <p><strong>Mensaje:</strong><br>$mensaje</p>
        ";

        $mail->send();

        // Redirigir con éxito
        header("Location: index.php?status=success");
        exit();

    } catch (Exception $e) {
        header("Location: index.php?status=error");
        exit();
    }
}
?>