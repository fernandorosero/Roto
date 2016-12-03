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

function Web_up(){
    alert("entra");
    $.ajax({
       url:'php/web_up.php',
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

function Web_down(){
    $.ajax({
       url:'php/web_down.php',
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

function Web_left(){
    $.ajax({
       url:'php/web_left.php',
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

function Web_right(){
    $.ajax({
       url:'php/web_right.php',
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

