
function playAudio() {
  document.getElementById("audioPlayer").play();
  console.log( document.getElementById("audioPlayer"))
  document.getElementById("boton-play").classList.remove("mostrar");
  document.getElementById("boton-pause").classList.remove("ocultar");
  document.getElementById("boton-play").classList.add("ocultar");
  document.getElementById("boton-pause").classList.remove("mostrar");
}

function pauseAudio() {
    document.getElementById("audioPlayer").pause();
    document.getElementById("boton-play").classList.remove("mostrar");
    document.getElementById("boton-pause").classList.remove("ocultar");

    document.getElementById("boton-pause").classList.add("ocultar");
    document.getElementById("boton-play").classList.add("mostrar");

}

function showPopUp(num) {
	var popup = "popup" + String(num);
  console.log(popup)
	document.getElementById(popup).style.visibility= "visible";
}

//Desactiva la visibilidad del elemento con id "popup+num"
function hidePopUp(num) {
	var popup = "popup" + String(num);
	document.getElementById(popup).style.visibility= "hidden";
}


