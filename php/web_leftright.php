<?php
    $posicion = $_POST["valorLR"];
    echo exec('sudo python /var/www/Roto/python/web_leftright.py '.$posicion.'');
?>     

