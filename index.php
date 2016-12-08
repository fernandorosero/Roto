<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Robo MN</title>
        <!-- Estilos -->
        <link rel="stylesheet" type="text/css" href="css/estilos.css"/>
        <!-- JavaScript -->
        <script src="js/roto.js"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

    </head>
    <body onload="javascript:Inicializacion();">
        <div id="cuerpo">
            <div id="imagen">
                <p>Robot M&N</p>
                <table id="uDlR">
                    <tr>
                        <td></td>
                        <td><button class="btn btn-warning"
                                    id="click-up"
                                    onclick="javascript:CambiaUpDown(1);">Arriba</button></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-warning"
                                    id="click-left"
                                    onclick="javascript:CambiaLeftRight(1);">Izq</button></td>
                        <td>
                        <?php
                            //echo '<img id="imagen" src="http://192.168.1.109:8001"/>';
                        ?>
                        </td>
                        <td><button class="btn btn-warning"
                                    id="click-right"
                                    onclick="javascript:CambiaLeftRight(-1);">Der</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button class="btn btn-warning"
                                    id="click-down"
                                    onclick="javascript:CambiaUpDown(-1);">Abajo</button></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div id="mandoControl">
                <div>
                    <input type="hidden" id="servoUPDOWN" value=""/>
                    <input type="hidden" id="servoLR" value=""
                </div>
                <h3>Mando de Control</h3>
                <table>
                    <tr>
                        <td></td>
                        <td>
                            <button class="btn btn-success btn-lg glyphicon glyphicon-arrow-up"
                                    id="click-delante"
                                    onclick="javascript:Adelante();"
                                    />
                        </td>
                        <td></td>
                    </tr>
                        <tr>
                        <td>
                            <button class="btn btn-primary btn-lg glyphicon glyphicon-arrow-left"
                                    id="click-izquierda"
                                    onclick="javascript:Izquierda();"
                                    />
                        </td>
                        <td>
                            <button id="click-stop" class="btn btn-danger btn-lg glyphicon glyphicon-remove-sign"
                                    onclick="javascript:Stop();"/>
                        </td>
                        <td>
                            <button id="click-derecha" class="btn btn-primary btn-lg glyphicon glyphicon-arrow-right"
                                    onclick="javascript:Derecha();"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button id="click-atras" class="btn btn-success btn-lg glyphicon glyphicon-arrow-down"
                                    onclick="javascript:Atras();"/>
                        </td>
                        <td></td>
                    </tr>
                </table>
                <div id="botonAutomatico">
                    <button id="click-automatico" class="btn btn-warning btn-lg"
                            onclick="javascript:AutoRobotMR();">Autom&aacute;tico - Ultrasonido</button>
                </div> 
               <!-- Contendor, que muestra la salida (Distancia)  -->
                <div id="salida" style="display:none">Salida:
                    <h4></h4>
                </div> 	
            </div>
        </div>
    </body>
</html>