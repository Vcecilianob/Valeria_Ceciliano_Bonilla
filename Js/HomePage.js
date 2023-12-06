
        let micarrusel = {};
        let foto = 0;
        let total = 0;
        
        //cargar las imagenes y titulo de cada foto.
        micarrusel = [{ imageurl: "Img/1.jpg"},
            { imageurl: "Img/2.jpg" },
            { imageurl: "Img/3.jpg" },
            { imageurl: "Img/4.jpg"},
        ];
        
        
        //funcion que permite cambiar las imagenes (anterior y siguiente)
        let cambiar = function(mas) {
            total = micarrusel.length;
            foto = foto + mas;
            if (foto > total) {
                foto = 1
            }
            if (foto < 1) {
                foto = total;
            }
        
            //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
            document.thumb.src = micarrusel[foto - 1].imageurl;
            titulo = document.getElementById('titulo');
            titulo.innerText = micarrusel[foto - 1].titulo;
        }



function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "Desamparados":
            document.querySelector('.galeriaCine1').style.display = "block";
            document.querySelector('.galeriaCine2').style.display = "none";
            document.querySelector('.galeriaCine3').style.display = "none";
            document.querySelector('.galeriaCine4').style.display = "none";
            ocultarTextoYVideos(); 
            break;
            
        case "Alajuela":
            document.querySelector('.galeriaCine1').style.display = "none";
            document.querySelector('.galeriaCine2').style.display = "block";
            document.querySelector('.galeriaCine3').style.display = "none";
            document.querySelector('.galeriaCine4').style.display = "none";
            ocultarTextoYVideos(); 
            break;

        case "Heredia":
            document.querySelector('.galeriaCine1').style.display = "none";
            document.querySelector('.galeriaCine2').style.display = "none";
            document.querySelector('.galeriaCine3').style.display = "block";
            document.querySelector('.galeriaCine4').style.display = "none";
            ocultarTextoYVideos(); 
            break;

        case "Cartago":
            document.querySelector('.galeriaCine1').style.display = "none";
            document.querySelector('.galeriaCine2').style.display = "none";
            document.querySelector('.galeriaCine3').style.display = "none";
            document.querySelector('.galeriaCine4').style.display = "block";
            ocultarTextoYVideos(); 
            break;

        default:
            document.querySelector('.galeriaCine1').style.display = "none";
            document.querySelector('.galeriaCine2').style.display = "none";
            document.querySelector('.galeriaCine3').style.display = "none";
            document.querySelector('.galeriaCine4').style.display = "none";
            mostrarTextoYVideos();
    }
}

document.getElementById('menuOpciones').addEventListener('change', galeria);

function ocultarTextoYVideos() {
    document.querySelector('.text-container').style.display = "none"; 
    document.querySelector('.videos').style.display = "none"; 
}

function mostrarTextoYVideos() {
    document.querySelector('.text-container').style.display = "block"; 
    document.querySelector('.videos').style.display = "flex"; 
}

document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".movie-image");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");
    const salir = document.getElementById("salir");
    let indiceActual = 0;

    mostrarImagen(indiceActual);

    anterior.addEventListener("click", function () {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(indiceActual);
    });

    siguiente.addEventListener("click", function () {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen(indiceActual);
    });

    salir.addEventListener("click", function () {
        imagenes.forEach((imagen) => {
            imagen.style.display = "none";
        });
    });
});


function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }
   
        
            