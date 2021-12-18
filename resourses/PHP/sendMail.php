<?php
$para      = $_GET["address"];
$asunto    = 'Store Order';

$headers = 'From: store.cartreport@gmail.com' . "\r\n";
$headers .= "Content-type:text/html; charset=UTF-8" . "\r\n";
$headers .='MIME-Version: 1.0' . "\r\n";

$mensaje = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Este es un mensaje</title>
<style type="text/css">
@import url('.'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'.');
*{
    font-family: '.'Open Sans'.', sans-serif;
    text-align: center;
}
h1{
    color: #8bc34a;
}
p{
    font-size: 2rem;
}
img{
    width: 10rem;
    height: 10rem;
}
</style>
</head>
<body>
<h1>Gracias por comprar con nosotros!</h1>
<p>Pronto un asesor te contactar&aacute; por este medio para verificar tus datos</p>

<h1>Proyecto desarrollado por Eduardo Romero O</h1>
</body>';

if (mail($para, $asunto, $mensaje, $headers)){
   echo "done";
}else{
    echo"failed";
}
?>