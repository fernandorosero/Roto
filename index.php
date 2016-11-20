<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Robo MN</title>
        <!-- Estilos -->
        <link rel="stylesheet" type="text/css" href="css/estilos.css"/>
        <!-- JavaScript -->
        <script type="text/javascript" src="//localhost/Detinec/view/js/util.js"></script> 
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script src="js/roto.js"></script>

    </head>
    <body>
        <div id="cuerpo">
            <div id="imagen">
                <?php
                    echo'<p>Robot M&N</p>';
                    echo '<img id="imagen" src="http://192.168.1.109:8001"/>';
                ?>
            </div>
            <div id="mandoControl">
                <h3>Mando de Control</h3>
                <table>
                    <tr>
                        <td></td>
                        <td>
                            <button class="btn btn-success glyphicon glyphicon-arrow-up"
                                    id="click-delante"
                                    onclick="javascript:Adelante();"
                                    />
                        </td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>
                            <button id="izquierda" class="btn btn-primary glyphicon glyphicon-arrow-left"
                                    onclick="javascript:Izquierda();"/>
                        </td>
                        <td>
                            <button id="stop" class="btn btn-danger glyphicon glyphicon-remove-sign"
                                    onclick="javascript:Stop();"/>
                        </td>
                        <td>
                            <button id="derecha" class="btn btn-primary glyphicon glyphicon-arrow-right"
                                    onclick="javascript:Derecha();"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button id="atras" class="btn btn-success glyphicon glyphicon-arrow-down"
                                    onclick="javascript:Atras();"/>
                        </td>
                        <td></td>
                    </tr>
                </table>
                 
                <div id="salida">Salida:</div>
            </div>
        </div>
    </body>
</html>