<?php
    $posicion = $_POST["valorUPDOWN"];
     echo exec('sudo python /var/www/Roto/python/web_updown.py '.$posicion);
?>     

