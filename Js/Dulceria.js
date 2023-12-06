//MENU 1
window.onload = function() {
    document.getElementById("Combos").onchange = function(e) {
        var a = e.target.value;
        var imagen = "";
        switch (a) {
            case "Palomitas de Caramelo + Bebida":
                imagen = "Img/caramelo1.png";
                break;
            case "Palomitas de Caramelo + Bebida + Dulce":
                imagen = "Img/caramelo2.png";
                break;
            case "Palomitas de Caramelo + Bebida + Acompañamiento":
                imagen = "Img/caramelo3.png";
                break;
            case "Palomitas de Queso Chedar + Bebida":
                imagen = "Img/Cheddar3.png";
                break;
            case "Palomitas de Queso Chedar + Bebida + Dulce":
                imagen = "Img/Cheddar2.png";
                break;
            case "Palomitas de Queso Chedar + Bebida + Acompañamiento":
                imagen = "Img/Cheddar1.png";
                break;
            case "Palomitas de Mantequilla + Bebida":
                imagen = "Img/Mantequilla1.png";
                break;
            case "Palomitas de Mantequilla + Bebida + Dulce":
                imagen = "Img/Mantequilla2.png";
                break;
            case "Palomitas de Mantequilla + Bebida + Acompañamiento":
                imagen = "Img/Mantequilla3.png";
                break;
            default:
                imagen = "";
                break;
        }

        var imagenElement = document.getElementById("imagen");
        imagenElement.src = imagen;
    }

    document.getElementById("Tamaño").onchange = function(es) {
        var n = es.target.value;
    }
}

function calcular() {
    var a = document.getElementById("Combos").value;
    var n = document.getElementById("Tamaño").value;

    if (a === "Combos:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1">Seleccione un combo...</p>'
        });
    } else if (n === "Tamaños:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1">Seleccione un tamaño...</p>'
        });
    } else {
        var montoCuota = 0;
        var imagenCombo = "";
        switch (a) {
            case "Palomitas de Caramelo + Bebida":
                imagenCombo = "Img/caramelo1.png";
                if (n === "Pequeño") {
                    montoCuota = 4000;
                } else if (n === "Regular") {
                    montoCuota = 5500;
                } else {
                    montoCuota = 6500;
                } 
                break;

                case "Palomitas de Caramelo + Bebida + Dulce":
                    imagenCombo = "Img/caramelo2.png";
                if (n === "Pequeño") {
                    montoCuota = 5000;
                } else if (n === "Regular") {
                    montoCuota = 6500;
                } else {
                    montoCuota = 8000;
                } 
                break;

                case "Palomitas de Caramelo + Bebida + Acompañamiento":
                    imagenCombo = "Img/caramelo3.png";
                if (n === "Pequeño") {
                    montoCuota = 6500;
                } else if (n === "Regular") {
                    montoCuota = 8000;
                } else {
                    montoCuota = 10000;
                } 
                break;

//CHEDDAR
            case "Palomitas de Queso Chedar + Bebida":
                imagenCombo = "Img/Cheddar3.png";
                if (n === "Pequeño") {
                    montoCuota = 4000;
                } else if (n === "Regular") {
                    montoCuota = 5500;
                } else {
                    montoCuota = 6500;
                } 
                break;

                case "Palomitas de Queso Chedar + Bebida + Dulce":
                    imagenCombo = "Img/Cheddar2.png";
                if (n === "Pequeño") {
                    montoCuota = 5000;
                } else if (n === "Regular") {
                    montoCuota = 6500;
                } else {
                    montoCuota = 8000;
                } 
                break;

                case "Palomitas de Queso Chedar + Bebida + Acompañamiento":
                    imagenCombo = "Img/Cheddar1.png";
                if (n === "Pequeño") {
                    montoCuota = 6500;
                } else if (n === "Regular") {
                    montoCuota = 8000;
                } else {
                    montoCuota = 10000;
                } 
                break;
    

//MANTEQUILLA
                case "Palomitas de Mantequilla + Bebida":
                imagenCombo = "Img/Mantequilla1.png";
                if (n === "Pequeño") {
                    montoCuota = 4000;
                } else if (n === "Regular") {
                    montoCuota = 5500;
                } else {
                    montoCuota = 6500;
                } 
                break;

                case "Palomitas de Mantequilla + Bebida + Dulce":
                    imagenCombo = "Img/Mantequilla2.png";
                if (n === "Pequeño") {
                    montoCuota = 5000;
                } else if (n === "Regular") {
                    montoCuota = 6500;
                } else {
                    montoCuota = 8000;
                } 
                break;

                case "Palomitas de Mantequilla + Bebida + Acompañamiento":
                    imagenCombo = "Img/Mantequilla3.png";
                if (n === "Pequeño") {
                    montoCuota = 6500;
                } else if (n === "Regular") {
                    montoCuota = 8000;
                } else {
                    montoCuota = 10000;
                } 
                break;

            default:
                break;
        }
        Swal.fire({
            imageUrl: imagenCombo,
            html: "<p><strong>Monto final:</strong></p>" + "₡" + montoCuota,
            imageAlt: "Combo",
            confirmButtonText: 'Confirmar',
            customClass: {
                confirmButton: 'mi-boton' 
            }
        });
    }
}


