function Adelante(){
    //$('#click-delante').click(function(){


        // $("#medir").hide('slow'); // oculta el boton
        // $("#load-midiendo").show('slow'); // muestra el load (midiendo)
         //$('#salida').hide('slow'); // oculta la salida (si hay algo)
        alert("entra");
                            // petición ajax al servidor
        $.ajax({
                url:'php/delante.php',
                type:'POST', // metodo POST
                // Si todo sale bien
                success: function(response){
                        $('#salida').show('slow'); // muestra la salida (Distancia)
                       // $('#salida h1').text(response); // muestra la salida (Distancia)
                       // $("#medir").show('slow'); // Muestra el boton medir
                       // $("#load-midiendo").hide('slow'); // oculta el load
                       // $('#set-8 h1').text('Volver Medir'); // cambia de texto a "Volver a Medir"
                }
        }); // fin ajax
    //}); // fin click                
}



