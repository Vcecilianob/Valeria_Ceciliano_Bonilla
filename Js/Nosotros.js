var panorama, viewer, container, infospot1, infospot2, infospot3, infospot4, infospot5, infospot6;

// referencia al contenedor ID donde se muestra la escena 3D
container = document.querySelector('#container_principal');

// cargar la foto panoramica 360
panorama = new PANOLENS.ImagePanorama('Img/Prueba.jpg');

// ZONA INTERACTIVA #1
infospot1 = new PANOLENS.Infospot(30, 'Img/Salida.png');
infospot1.position.set(0, 0, -500);
infospot1.addHoverText('Las puertas de salida de emergencia son elementos cruciales en cualquier edificio. Diseñadas específicamente para garantizar la seguridad en situaciones críticas, estas salidas representan la vía más directa para evacuar un lugar en casos de incendios, terremotos u otras emergencias.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Las puertas de salida de emergencia son elementos cruciales en cualquier edificio. Diseñadas específicamente para garantizar la seguridad en situaciones críticas, estas salidas representan la vía más directa para evacuar un lugar en casos de incendios, terremotos u otras emergencias.</div>';
panorama.add(infospot1);

// ZONA INTERACTIVA #2
infospot2 = new PANOLENS.Infospot(300, 'Img/Imaz.png');
infospot2.position.set(1000, -100, 1000);
infospot2.addHoverText('Imagina un lienzo expansivo que te sumerge en la grandeza de la narrativa visual, donde cada detalle cobra vida con una nitidez y profundidad asombrosas. La pantalla IMAX, un coloso tecnológico, trasciende los límites de la experiencia cinematográfica convencional para transportarte a mundos inexplorados.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Imagina un lienzo expansivo que te sumerge en la grandeza de la narrativa visual, donde cada detalle cobra vida con una nitidez y profundidad asombrosas. La pantalla IMAX, un coloso tecnológico, trasciende los límites de la experiencia cinematográfica convencional para transportarte a mundos inexplorados.</div>';
panorama.add(infospot2);

// ZONA INTERACTIVA #3
infospot3 = new PANOLENS.Infospot(500, 'Img/Informativo.png');
infospot3.position.set(-5000, -650, -3500);
infospot3.addHoverText('Imagina tomar asiento en una butaca que va más allá de ser cómoda: se convierte en un centro de experiencia en sí misma. Los asientos de cine con la última tecnología transforman tu tiempo en el cine, ofreciendo confort personalizado y una inmersión sensorial que complementa la historia en la pantalla.', -60);
infospot3.element.innerHTML = '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Imagina tomar asiento en una butaca que va más allá de ser cómoda: se convierte en un centro de experiencia en sí misma. Los asientos de cine con la última tecnología transforman tu tiempo en el cine, ofreciendo confort personalizado y una inmersión sensorial que complementa la historia en la pantalla.</div>';
panorama.add(infospot3);

// ZONA INTERACTIVA #4
infospot4 = new PANOLENS.Infospot(800, PANOLENS.DataImage.Info);
infospot4.position.set(-10000, 2900, -100);
infospot4.addHoverText('Proyeccin IMAX', -60);
infospot4.element.innerHTML = `
    <div>
        <iframe width="500" height="340" src="https://www.youtube.com/embed/B_UvdLYSk7Q?feature=shared&t=7"></iframe>        
    </div>
`;
panorama.add(infospot4);

// ZONA INTERACTIVA #5
infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(-450, 600, 940);
infospot5.addHoverText('Un audio Dolby Atmos 4K...', -60);
infospot5.element.innerHTML = '<div>  <audio controls><source src="Img/Dolby.m4a" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(70, 'Img/Sonido.png');
infospot6.position.set(-680, 800, -1400);
//x horizontal,y vertial,z tridemencionalidad
infospot6.addHoverText('Imagina sumergirte en un océano de sonido, donde cada nota, cada efecto y cada susurro te rodean desde todos los ángulos posibles. Los parlantes de cine con Dolby Atmos 4K transforman la experiencia auditiva convencional en una sinfonía tridimensional que te envuelve completamente, llevándote a un viaje sensorial inigualable.', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Imagina sumergirte en un océano de sonido, donde cada nota, cada efecto y cada susurro te rodean desde todos los ángulos posibles. Los parlantes de cine con Dolby Atmos 4K transforman la experiencia auditiva convencional en una sinfonía tridimensional que te envuelve completamente, llevándote a un viaje sensorial inigualable.</div>';
panorama.add(infospot6);


// Agregar la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
