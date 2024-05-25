// Función para reproducir el audio
function playAudio() {
  // Accede al elemento de audio con el id "audioPlayer" y lo reproduce
  document.getElementById("audioPlayer").play();
  // Muestra el elemento de audio en la consola para fines de depuración
  console.log(document.getElementById("audioPlayer"));
  // Modifica las clases de los botones para mostrar y ocultar correctamente
  document.getElementById("boton-play").classList.remove("mostrar");
  document.getElementById("boton-pause").classList.remove("ocultar");
  document.getElementById("boton-play").classList.add("ocultar");
  document.getElementById("boton-pause").classList.remove("mostrar");
}

// Función para pausar la reproducción de audio
function pauseAudio() {
  // Pausa la reproducción del audio accediendo al elemento con el id "audioPlayer"
  document.getElementById("audioPlayer").pause();
  // Modifica las clases de los botones para mostrar y ocultar correctamente
  document.getElementById("boton-play").classList.remove("mostrar");
  document.getElementById("boton-pause").classList.remove("ocultar");
  document.getElementById("boton-pause").classList.add("ocultar");
  document.getElementById("boton-play").classList.add("mostrar");
}

// Función para mostrar una ventana emergente
function showPopUp(num) {
  // Construye el id del elemento de la ventana emergente usando el número proporcionado
  var popup = "popup" + String(num);
  // Muestra la ventana emergente estableciendo la propiedad visibility en "visible"
  document.getElementById(popup).style.visibility = "visible";
}

// Función para ocultar una ventana emergente
function hidePopUp(num) {
  // Construye el id del elemento de la ventana emergente usando el número proporcionado
  var popup = "popup" + String(num);
  // Oculta la ventana emergente estableciendo la propiedad visibility en "hidden"
  document.getElementById(popup).style.visibility = "hidden";
}
