window.onload = function() {
    document.getElementById("Personaje").onchange = function(e) {
        a = e.target.value;
        if (a == "Ariel") {
            var imagen = "Img/Ariel.jpg";
        } else if (a == "Iron Man") {
            var imagen = "Img/Iron.jpg";
        } else if (a == "Harry Potter") {
            var imagen = "Img/Harry.jpg";
        } else if (a == "Olaf") {
            var imagen = "Img/Olaf.jpg";
        } else if (a == "Darth Vader") {
            var imagen = "Img/Darth.jpg";
        } else if (a == "Shrek") {
            var imagen = "Img/Shrek.jpg";
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("Tamaño").onchange = function(es) {
        n = es.target.value;
    }
}


function calcular() {
    if (document.getElementById("Personaje").value == "Personajes:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Seleccione un personaje... </p> '
        })
    } else {
        if (document.getElementById("Tamaño").value == "Tamaños:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="formatos1"> Seleccione un tamaño .. </p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "Ariel") {
                if (n == "Regular") {
                    montoCuota = 4000;
                    swal.fire({
                        imageUrl: "Img/Ariel.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Ariel <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Ariel Funko",
                    })

                    
                } else if (n == "Super") {
                    montoCuota = 8000;
                    swal.fire({
                        imageUrl: "Img/Ariel.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Ariel <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Ariel Funko",
                    })
                
                } else {
                    montoCuota = 10000;
                    swal.fire({
                        imageUrl: "Img/Ariel.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Ariel <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Ariel Funko",
                    })
                }

            } else if (a == "Iron Man") {
                if (n == "Regular") {
                    montoCuota = 4000;
                    swal.fire({
                        imageUrl: "Img/Iron.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Iron Man <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Iron Man Funko",
                    })

                    
                } else if (n == "Super") {
                    montoCuota = 8000;
                    swal.fire({
                        imageUrl: "Img/Iron.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Iron Man <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Iron Man Funko",
                    })
                
            
                } else {
                    montoCuota = 10000;
                    swal.fire({
                        imageUrl: "Img/Iron.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Iron Man <br><br> <strong>Cuota mensual:</strong></p>" + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Iron Man Funko",
                    })
                }



            } else if (a == "Harry Potter") {
                if (n == "Regular") {
                    montoCuota = 4000;
                    swal.fire({
                        imageUrl: "Img/Harry.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Harry Potter <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Harry Potter Funko",
                    })

                    
                } else if (n == "Super") {
                    montoCuota = 8000;
                    swal.fire({
                        imageUrl: "Img/Harry.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Harry Potter <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Harry Potter Funko",
                    })
                
            
                } else {
                    montoCuota = 10000;
                    swal.fire({
                        imageUrl: "Img/Harry.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Harry Potter<br><br> <strong>Cuota mensual:</strong></p>" + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Harry Potter Funko",
                    })
                }


            } else if (a == "Olaf") {
                if (n == "Regular") {
                    montoCuota = 4000;
                    swal.fire({
                        imageUrl: "Img/Olaf.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Olaf <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Olaf Funko",
                    })

                    
                } else if (n == "Super") {
                    montoCuota = 8000;
                    swal.fire({
                        imageUrl: "Img/Olaf.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Olaf <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Olaf Funko",
                    })
                
            
                } else {
                    montoCuota = 10000;
                    swal.fire({
                        imageUrl: "Img/Olaf.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Olaf <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 350,
                        imageAlt: "Olaf Funko",
                    })
                }

            } else if (a == "Darth Vader") {
                if (n == "Regular") {
                    montoCuota = 4000;
                    swal.fire({
                        imageUrl: "Img/Darth.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Darth Vader <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 400,
                        imageAlt: "Darth Vader Funko",
                    })

                    
                } else if (n == "Super") {
                    montoCuota = 8000;
                    swal.fire({
                        imageUrl: "Img/Darth.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Darth Vader <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 400,
                        imageAlt: "Darth Vader Funko",
                    })
                
            
                } else {
                    montoCuota = 10000;
                    swal.fire({
                        imageUrl: "Img/Darth.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Darth Vader <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 400,
                        imageAlt: "Darth Vader Funko",
                    })
                }

            } else if (a == "Shrek") {
                if (n == "Regular") {
                    montoCuota = 4000;
                    swal.fire({
                        imageUrl: "Img/Shrek.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Shrek <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 400,
                        imageAlt: "Shrek Funko",
                    })

                    
                } else if (n == "Super") {
                    montoCuota = 8000;
                    swal.fire({
                        imageUrl: "Img/Shrek.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Shrek <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 400,
                        imageAlt: "Shrek Funko"
                    })
                
            
                } else {
                    montoCuota = 10000;
                    swal.fire({
                        imageUrl: "Img/Shrek.jpg",
                        html: "<p> Mira la cuota mensual del Funko Pop de Shrek <br><br> <strong>Cuota mensual:</strong></p> " + "₡" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 400,
                        imageAlt: "Shrek Funko"
                    })
                }

            }
        }
    }
}