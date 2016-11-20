<?php
    // Ejecuta como root, el script python encargado de controlar el sensor ultrasonido
    echo exec('sudo python /var/www/Roto/python/izquierda.py');
    // La salida la imprime con el echo
?>

