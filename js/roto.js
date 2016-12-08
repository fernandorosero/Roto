function Inicializacion(){
    $('#servoUPDOWN').val('2.5');
    $('#servoLR').val('8.2');
    var parametrosud = {
        "valorUPDOWN" : $('#servoUPDOWN').val()
    };
    $.ajax({
       data: parametrosud, 
       url: 'php/web_updown.php',
       type: 'POST',
       success: function(){
           
       }
    });
    
    var parametroslr = {
        "valorLR" : $('#servoLR').val()
    };
    $.ajax({
       data: parametroslr,
       url: 'php/web_leftright.php',
       type: 'POST',
       success : function(){
           
       }
    });
}

function AutoRobotMR(){
    $.ajax({
        url:'php/autorobosonido.php',
        type: 'POST',
        success: function(response){
            
        }
    });
}

function Adelante(){
    //$('#click-delante').click(function(){
    // $("#medir").hide('slow'); // oculta el boton
    // $("#load-midiendo").show('slow'); // muestra el load (midiendo)
    //$('#salida').hide('slow'); // oculta la salida (si hay algo)
    // petición ajax al servidor
    $.ajax({
        url:'php/delante.php',
        type:'POST', // metodo POST
        // Si todo sale bien
        success: function(response){
                $('#salida').show('slow'); // muestra la salida (Distancia)
                if(response == ''){
                $('#salida h4').text("No devuelve datos adelante");
            }else{
                $('#salida h4').text(response);
            }// $("#medir").show('slow'); // Muestra el boton medir
               // $("#load-midiendo").hide('slow'); // oculta el load
               // $('#set-8 h1').text('Volver Medir'); // cambia de texto a "Volver a Medir"
        },
        error: function(){
            $('#salida h4').show('slow');
            $('#salida h4').text('ERROR');
        }
    }); // fin ajax
    //}); // fin click                
}

function Atras(){
    $.ajax({
        url:'php/atras.php',
        type:'POST',
        success: function(response){
            $('#salida').show('slow');
            if(response == ''){
                $('#salida h4').text("No devuelve datos atras");
            }else{
                $('#salida h4').text(response);
            }
        },
        error: function(){
            $('#salida h4').show('slow');
            $('#salida h4').text('ERROR');
        }
    });
}

function Izquierda(){
    $.ajax({
        url:'php/izquierda.php',
        type:'POST',
        success: function(response){
            $('#salida').show('slow');
            if(response == ''){
                $('#salida h4').text("No devuelve datos izq");
            }else{
                $('#salida h4').text(response);
            }
        },
        error: function(){
            $('#salida h4').show('slow');
            $('#salida h4').text('ERROR');
        }
    });
}

function Derecha(){
    $.ajax({
        url:'php/derecha.php',
        type:'POST',
        success: function(response){
            $('#salida').show('slow');
            if(response == ''){
                $('#salida h4').text('No devuelve datos derecha');
            }else{
                $('#salida h4').text(response);
            }
        },
        error: function(){
            $('#salida').show('slow');
            $('#salida h4').text('ERROR');
        }
    });
}

function Stop(){
    $.ajax({
        url:'php/stop.php',
        type:'POST',
        success: function(response){
            $('#salida').show('slow');
            if(response == ''){
                $('#salida h4').text('No devuelve datos Stop');
            }else
            {
                $('#salida h4').text(response);
            }
        },
        error: function(){
            $('#salida h4').show('slow');
            $('#salida h4').text('ERROR');
        }
    });
}

//************* INICIO CAMARA WEB **************//
function CambiaUpDown(valor){
    var valorUpDown = parseFloat($('#servoUPDOWN').val()) + parseFloat(valor); 
    
    if (valorUpDown >= 2.5 && valorUpDown <= 5.5){
        $('#servoUPDOWN').val(valorUpDown);
        Web_UpDown();
    }
}

function CambiaLeftRight(valor){
    var valorLeftRight = parseFloat($('#servoLR').val()) + parseFloat(valor);
    
    if (valorLeftRight >= 3.1 && valorLeftRight <= 13.2){
        $('#servoLR').val(valorLeftRight);
        Web_LeftRight();
    }
}

function Web_UpDown(){
    var parametroup = {
        "valorUPDOWN" : $('#servoUPDOWN').val()
    };
    $.ajax({
       data: parametroup, 
       url:'php/web_updown.php',
       type:'POST',
       success: function(response){
           $('#salida').show('slow');
           if(response == ''){
            $('#salida h4').text('NO WEB CAM');
           }
           else{
               $('#salida h4').text(response);
           }
       },
       error: function(){
           $('#salida h4').show('slow');
           $('#salida h4').text('ERROR');
       }
    });
}

function Web_LeftRight(){
    var parametroslr = {
        "valorLR" : $('#servoLR').val()
    };
    $.ajax({
       data: parametroslr,
       url:'php/web_leftright.php',
       type:'POST',
       success: function(response){
           $('#salida').show('slow');
           if(response == ''){
            $('#salida h4').text('NO WEB CAM');
           }
           else{
               $('#salida h4').text(response);
           }
       },
       error: function(){
           $('#salida h4').show('slow');
           $('#salida h4').text('ERROR');
       }
    });
}

//************* FIN CAMARA WEB **************//

