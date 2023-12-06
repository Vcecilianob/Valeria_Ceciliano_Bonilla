window.onload = function () {

    document.getElementById('output-img').innerHTML="<img src='Img/Combo1/Locaciones.jpg' class='img-fluid rounded' alt='Locaciones.jpg'/>";

    document.getElementById('Food').onchange = function (e) {
        let n = e.target.value;
        let imagen = "<img src='Img/Combo1/" + n + ".JPG' class='img-fluid img-thumbnail rounded' alt='Combo1'/>";
        let text = [
            '<br><h4>Cine Estrella</h4><br> Descubre la magia del cine con nuestra sucursal principal, Cine Estrella. Disfruta de nuestra promoción exclusiva "Noches Dobles": compra un boleto para la función de las 7 p.m. y obtén otro completamente gratis para la película de las 9:30 p.m. ¡Una experiencia de cine doble que no querrás perderte!',

            '<br><h4> Cine Aventura</h4><br> ¡Vive la aventura del cine con nosotros en Cine Aventura! Nuestra promoción exclusiva, "Día de Película Familiar", te ofrece palomitas de maíz y refrescos ilimitados para cualquier película infantil los domingos por la tarde. ¡La diversión en familia está garantizada!',

            '<br><h4>Cine Clásico</h4><br> En Cine Clásico, celebramos la nostalgia del cine. Con nuestra promoción exclusiva "Noche Retro", los jueves a las 8 p.m., revive clásicos del cine con un descuento del 50% en entradas para películas seleccionadas de décadas pasadas. ¡Una oportunidad única para revivir los éxitos del pasado!',

            '<br><h4> Cine Indie </h4><br> Descubre lo mejor del cine independiente en nuestra sucursal, Cine Indie. Con nuestra promoción exclusiva "Miércoles Alternativos", disfruta de estrenos y producciones independientes a mitad de precio los miércoles. ¡Una ventana al mundo del cine alternativo a un precio increíble!'
            
        
        ];

        document.getElementById('output-img').innerHTML = imagen;
        document.getElementById('output-txt').innerHTML = text[n - 1];
    };
};

document.getElementById('btn-clean').onclick = function () {
    document.getElementById('output-img').innerHTML = "<img src='Img/Combo1/Locaciones.jpg' class='img-fluid rounded' alt='Locaciones.jpg'/>";
    document.getElementById('output-txt').innerHTML = '';
    document.getElementById('Food').value = '';
};

