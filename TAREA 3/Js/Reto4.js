window.onload = function () {

    document.getElementById('output-img').innerHTML="<img src='Img/Gastronomia.jpg' class='img-fluid rounded' alt='Gastronomia.jpg'/>";

    document.getElementById('Food').onchange = function (e) {
        let n = e.target.value;
        let imagen = "<img src='Img/Platillos/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='Platillos'/>";
        let text = [
            '<h5>Hamburguesa</h5> Ícono de la comida rápida en Estados Unidos. Se compone de carne de res molida, generalmente servida en un panecillo, acompañada de diversos ingredientes como lechuga, tomate, queso y salsas.',
            '<h5>Tacos</h5> Tortillas rellenas de carne, pescado o verduras, acompañadas de salsas y guarniciones. Son una de las comidas más icónicas de México.',
            '<h5>Cachapa</h5> Panqueque de maíz relleno de queso, queso de mano, carne mechada o jamón. Es un desayuno popular en Venezuela.',
            '<h5>Arepas</h5> Tortillas de maíz o harina de maíz rellenas con una variedad de ingredientes, como queso, carne, aguacate o jamón. Son un alimento básico en Venezuela y Colombia.',
            '<h5>Feijoada</h5> Guiso de frijoles negros con carne de cerdo, generalmente servido con arroz y naranjas. Es una comida abundante y sabrosa.',
            '<h5>Asado</h5> Parrillada de carne a la brasa, generalmente cortada en forma de churrasco. Se sirve con chimichurri, una salsa a base de ajo y hierbas.',
            '<h5>Gallo Pinto</h5> Arroz y frijoles negros mezclados con cebolla, pimiento y cilantro. A menudo se sirve como desayuno acompañado de huevos, plátanos fritos y natilla.'
        ];

        document.getElementById('output-img').innerHTML = imagen;
        document.getElementById('output-txt').innerHTML = text[n - 1];
    };
};

document.getElementById('btn-clean').onclick = function () {
    document.getElementById('output-img').innerHTML = "<img src='Img/Gastronomia.jpg' class='img-fluid rounded' alt='Gastronomia.jpg'/>";
    document.getElementById('output-txt').innerHTML = '';
    document.getElementById('Food').value = '';
};

