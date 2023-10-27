function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "Entradas":
            document.querySelector('.Menu1').style.display = "block";
            document.querySelector('.Menu2').style.display = "none";
            document.querySelector('.Menu3').style.display = "none";
            break;
            
        case "Platos":
            document.querySelector('.Menu1').style.display = "none";
            document.querySelector('.Menu2').style.display = "block";
            document.querySelector('.Menu3').style.display = "none";
            break;

        case "Postres":
            document.querySelector('.Menu1').style.display = "none";
            document.querySelector('.Menu2').style.display = "none";
            document.querySelector('.Menu3').style.display = "block"; 
            break;


        default:
            document.querySelector('.Menu1').style.display = "none";
            document.querySelector('.Menu2').style.display = "none";
            document.querySelector('.Menu3').style.display = "none";
            break;
    }
}

document.getElementById('menuOpciones').addEventListener('change', galeria);


document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".food-image");
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

const menuOpciones = document.getElementById("menuOpciones");
const restaurantImage = document.getElementById("restaurantImage");

menuOpciones.addEventListener("change", function() {
    const selectedOption = menuOpciones.value;

    if (selectedOption === "Entradas" || selectedOption === "Platos" || selectedOption === "Postres") {
        restaurantImage.style.display = "none"; // Oculta la imagen
    } else {
        restaurantImage.style.display = "block"; // Muestra la imagen
    }
});
