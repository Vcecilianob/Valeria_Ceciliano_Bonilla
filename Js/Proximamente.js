document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Inicio").addEventListener("click", function() {
        window.location.href = "HomePage_Cinemax.html";
    
    });
    document.getElementById("Preventa").addEventListener("click", function() {
        window.location.href = "Proximamente.html";
    });

    document.getElementById("Cartelera").addEventListener("click", function() {
        window.location.href = "Cartelera.html";
    });

    document.getElementById("Dulceria").addEventListener("click", function() {
        window.location.href = "Dulceria.html";
    });

    document.getElementById("Contacto").addEventListener("click", function() {
        window.location.href = "Contactanos.html";
    });

    document.getElementById("Opiniones").addEventListener("click", function() {
        window.location.href = "Opiniones.html";
    });
});

//video
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}ube
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}