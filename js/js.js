// Creamos una variable contador para saber cuantas figuras se han colocado correctamente
var cont=0;


// Creamos las variables de los audios para reproducirlos
var correct = document.createElement('audio');
correct.src = 'audio/Correct.wav';

var victory = document.createElement('audio');
victory.src = 'audio/Victory.wav';

var wrong = document.createElement('audio');
wrong.src = 'audio/Wrong.wav';


// Para colocar las figuras aleatoriamente vamos sacando numeros aleatorios dado el tamaño del array
// y eliminamos las figuras sacadas. Finalmente introducimos el codigo html en el div

function figurasAleat() {
      var figuras=["Cir","Tri","Cua","Est"];
      var codFig="";
      for(var i=0;i<4;i++){
        var aleat=Math.floor(Math.random()*(figuras.length));
        codFig+="<div id=\""+figuras[aleat]+"2\"><img src=\"img/"+figuras[aleat]+"V.png\" /></div>";
        figuras.splice(aleat,1);
      }
      return codFig;
    }

$("#FigurasV").html(figurasAleat());



// Creamos las figuras que se pueden arrastrar y les añadimos el atributo rever para que vuelvan a su sitio

 $("#Tri1").draggable({ revert: true });
 $("#Est1").draggable({ revert: true });
 $("#Cir1").draggable({ revert: true });
 $("#Cua1").draggable({ revert: true });

// Creamos las figuras donde se pueden colocar las que se arrastran y todas tendran las mismas caracteristicas.

 $("#Tri2").droppable({
   drop: function(event, ui) {
    // Primero comprobamos que la figura que suelta es la que queremos
        if(ui.draggable.attr("id")=="Tri1"){
          // Ocultamos la figura gris, si la quitamos las figuras caerian
   	        $("#Tri1").css('visibility','hidden');
            // Cambiamos la imagen bordeada por la que tiene color
            $(this).html('<img id=\"Tri1\" src=\"img/TriC.png\"/>');
            // Le introducimos una animación para que se difumine y aparezca de nuevo
            $(this).animate({opacity:"0.2"},500);
            $(this).animate({opacity:"1"},600);
            // Sumamos 1 al contador porque ha acertado
            cont++;
            // Comprobamos si el contador es 4, significaria que ya ha ganado
            if(cont==4){
              // Reproducimos el audio y mostramos los mensajes
                victory.play();
                alert("¡ENHORABUENA, HAS GANADO!");
            } else {
                correct.play();
            }
    // Si la figura no es la correcta reproducimos el audio de error y su mensaje correspondiente
        } else {
            wrong.play();
            alert("NO ES CORRECTA LA FIGURA");
        }
    }
 });

  $("#Est2").droppable({
   drop: function(event, ui) {
        if(ui.draggable.attr("id")=="Est1"){
   	        $("#Est1").css('visibility','hidden');
            $(this).html('<img id=\"Est1\" src=\"img/EstC.png\"/>');
            $(this).animate({opacity:"0.2"},500);
            $(this).animate({opacity:"1"},600);
            cont++;
            if(cont==4){
                victory.play();
                alert("¡ENHORABUENA, HAS GANADO!");
            } else {
                correct.play();
            }
        } else {
            wrong.play();
            alert("NO ES CORRECTA LA FIGURA");
        }
      }
 });

   $("#Cir2").droppable({
   drop: function(event, ui) {
        if(ui.draggable.attr("id")=="Cir1"){
   	        $("#Cir1").css('visibility','hidden');
            $(this).html('<img id=\"Cir1\" src=\"img/CirC.png\"/>');
            $(this).animate({opacity:"0.2"},500);
            $(this).animate({opacity:"1"},600);
            cont++;
            if(cont==4){
                victory.play();
                alert("¡ENHORABUENA, HAS GANADO!");
            } else {
                correct.play();
            }
        } else {
            wrong.play();
            alert("NO ES CORRECTA LA FIGURA");
        }
      }
   }
 );

    $("#Cua2").droppable({
   drop: function(event, ui) {
        if(ui.draggable.attr("id")=="Cua1"){
   	        $("#Cua1").css('visibility','hidden');
            $(this).html('<img id=\"Cua1\" src=\"img/CuaC.png\"/>');
            $(this).animate({opacity:"0.2"},500);
            $(this).animate({opacity:"1"},600);
            cont++;
            if(cont==4){
                victory.play();
                alert("¡ENHORABUENA, HAS GANADO!");
            } else {
                correct.play();
            }
        } else {
            wrong.play();
            alert("NO ES CORRECTA LA FIGURA");
      }
    }
 });


function reiniciar(){
  window.location.reload();
}

/*

HE INTENTADO REINICIAR EL JUEGO SIN REFRESCAR LA PAGINA PERO CON EL SIGUIENTE CODIGO NO FUNCIONAN LOS ELEMENTOS DROPPABLE

function reiniciar(){
  $("#FigurasV").html(figurasAleat());
  $("#Tri1").css('visibility','visible');
  $("#Est1").css('visibility','visible');
  $("#Cir1").css('visibility','visible');
  $("#Cua1").css('visibility','visible');

}

*/