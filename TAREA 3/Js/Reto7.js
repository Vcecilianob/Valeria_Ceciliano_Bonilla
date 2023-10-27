$("#r0").click(function() {
    Swal.fire({
        icon: 'question',
        title: 'Logotipo',
        text: 'El logotipo de Michael Kors se puede dar en una variedad de colores, como suele ser el caso con los emblemas de las marcas de ropa y calzado. En cada caso, el color se elige de acuerdo con la paleta del elemento en el que aparece el logotipo. Algunas de las opciones más típicas incluyen negro u dorado sobre el fondo blanco.',
    });
}); 


$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Autenticidad',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'Es fundamental verificar la autenticidad de un bolso, reloj o cualquier otro producto de Michael Kors antes de adquirirlo. ¿Por qué? Porque hay una gran cantidad de productos falsificados en el mercado, y es fácil caer en la trampa de comprar uno de ellos sin saberlo.',
        footer: '<a href="https://enterateporti.com/como-saber-si-un-michael-kors-es-original-guia-completa/" target="blank">Leer más</a>'
    });
});


$("#r3").click(function() {
    Swal.fire({
        title: 'Materiales',
        imageUrl: 'Img/Cuero.jpg',
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: '<strong> ¡Cuero vacuno! </strong> ' +
            '<br><br><br>' +
            '<p class="aliizq">- La piel del cuero de vaca tiene diversas propiedades que la hacen muy apta para la fabricación de bolsos, así como ropa, sombreros, cinturones, carteras, calzado…  Esta piel, como se mencionó en uno de los post anteriores, es más gruesa y resistente por lo que será menos propensa a roturas que la de otro animal. </p>' +
            '<br>' +
            '<p class="aliizq">- Los bolsos hechos con cuero de vaca suele ser flexible, transpirable, dúctil y se puede teñir o dejarla con su acabado natural. Es durable, con esto queremos decir que su envejecimiento es bueno y puede durar hasta 5 veces más que otro tipo de telas. </p>'
    });
});

