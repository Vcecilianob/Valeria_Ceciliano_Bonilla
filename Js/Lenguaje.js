
const link = document.querySelectorAll('button[data-lang]');
const langElements = document.querySelectorAll('[data-translate]');

link.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        langElements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (changeLanguage[lang][key]) {
                el.textContent = changeLanguage[lang][key];
            }
        });
    });
});

//LENGUAJES
let changeLanguage = {
    "es": {
        "logoText": "CINEMAX",
        "menuSectionOne": "Proximamente",
        "menuSection2": "Cartelera",
        "menuSectionO3": "Dulceria",
        "menuSectionO4": "Contacto",
        "menuSectionO5": "Opiniones",
        "menuSectionO6": "Promociones",
        "menuSectionO7": "Nosotros",
        "menuSectionO8": "Nosotros",
        "entrevistasTitle": "ENTREVISTAS CON TUS ACTORES PREFERIDOS",
        "Favorites": "FAVORITOS DEL CINE",
        //
        "Ant-Man": "Ant-Man & la Avispa",
        "Ant-ManTxt": "Tras abandonar la cárcel, el ladrón y estafador Scott Lang recibe la llamada del misterioso Dr. Hank Pym para realizar un trabajo especial.",
        //
        "Frozen": "Frozen: El reino de hielo",
        "FrozenTxt": "Érase una vez, en un reino muy lejano, una profecía que condenó a los habitantes a estar sometidos al hielo durante toda su existencia. ",
        //
        "Star Wars": "Star Wars: Episodio VIII <br> Los últimos Jedi",
        "Star WarsTxt": "La malvada Primera Orden se ha vuelto más poderosa y tiene contra las cuerdas a la Resistencia, liderada por la General Leia Organa. ",
        //
        "Dumbo": "Dumbo",
        "DumboTxt": "Las cigüeñas llegan, como todos los años, hasta un pintoresco circo para repartir los bebés a sus respectivas mamás. La señora Dumbo, una elefanta, descubre que su pequeño tiene unas orejas enormes ",
        //
        "La casa del terror": "La casa del terror",
        "La casa del terrorTxt": "Un grupo de jóvenes decide pasar Halloween yendo a una casa encantada. En seguida se darán cuenta de que el inmueble encierra una terrible maldición que pondrá a prueba sus miedos más oscuros.  ",
        //
        "Linterna Verde": "Linterna Verde",
        "Linterna VerdeTxt": "Parallax, comienza a amenazar con romper el equilibrio entre las fuerzas del universo, el destino de la Tierra descansará sobre un hombre, el primer humano escogido para llevar el anillo: Hal Jordan.  ",
        //
        "Monsters vrs Aliens": "Monstruos vrs Aliens",
        "Monsters vrs AliensTxt": "La californiana Susan Murphy es golpeada accidentalmente por un meteorito lleno de mugre espacial en el día de su boda, crece misteriosamente hasta alcanzar más de 15 metros de altura.",
        //
        "Predestination": "Predestinacion",
        "PredestinationTxt": " Un agente especial del un departamento secreto del gobierno, una agencia creada en los años 80 que permite realizar viajes en el tiempo, tendrá que realizar una compleja serie de saltos hacia atrás en el tiempo.",
        //
        "Subscripción":"Subscripción",
        "Promociones": "Recibiras promociones, anuncios y noticias",
        "Correo": "Correo electrónico:",
        "Enviar": "Enviar",
        "Limpiar": "Limpiar",
        //
        "Derechos": "Derechos Reservados",

    },
    "en": {
        "logoText": "CINEMAX",
        "menuSectionOne": "Coming Soon",
        "menuSection2": "Moovies",
        "menuSectionO3": "Sweet shop",
        "menuSectionO4": "Contact",
        "menuSectionO5": "Opinions",
        "menuSectionO6": "Promotions",
        "menuSectionO7": "About Us",
        "menuSectionO8": "Shop",
        "entrevistasTitle": "INTERVIEWS WITH YOUR FAVORITE ACTORS",
        "Favorites": "CINEMA FAVORITES",
        //
        "Ant-Man": "Ant-Man & the Wasp",
        "Ant-ManTxt": "After leaving prison, thief and con man Scott Lang gets a call from the mysterious Dr. Hank Pym to perform a special job.",
        //
        "Frozen": "Frozen: The Ice Kingdom",
        "FrozenTxt": "Once upon a time, in a kingdom far away, a prophecy doomed the inhabitants to be subjected to ice for their entire existence. ",
        //
        "Star Wars": "Star Wars: Episode VIII The Last Jedi",
        "Star WarsTxt": "The evil First Order has grown more powerful and has the Resistance, led by General Leia Organa, on the ropes. ",
        //
        "Dumbo": "Dumbo",
        "DumboTxt": "The storks arrive, as they do every year, to a picturesque circus to deliver the babies to their respective mothers. Mrs. Dumbo, an elephant, discovers that her little one has huge ears ",
        //
        "La casa del terror": "The House of Terror",
        "La casa del terrorTxt": "A group of young people decide to spend Halloween going to a haunted house. They soon realize that the property holds a terrible curse that will put their darkest fears to the test.  ",
        //
        "Linterna Verde": "Green Lantern",
        "Linterna VerdeTxt": "Parallax, begins to threaten to break the balance between the forces of the universe, the fate of the Earth will rest on one man, the first human chosen to wear the ring: Hal Jordan.  ",
        //
        "Monsters vrs Aliens": "Monsters vrs Aliens",
        "Monsters vrs AliensTxt": "Californian Susan Murphy is accidentally hit by a meteorite full of space gunk on her wedding day, it mysteriously grows to be over 50 feet tall.",
        //
        "Predestination": "Predestination",
        "PredestinationTxt": "A special agent of a secret government department, an agency created in the 1980s that allows time travel, will have to perform a complex series of jumps back in time.", 
        //
        "Subscripción":"Subscription",
        "Promociones": "You will receive promotions, announcements and news.", // "Promotions": "You will receive promotions, announcements and news.",
        "Correo": "Email:",
        "Enviar": "Send",
        "Limpiar": "Clear",
        //
        "Derechos": "All rights reserved",
    }
};

function cambiarBotones(idioma) {
    document.getElementById('btnsend').value = changeLanguage[idioma]['Enviar'];
    document.querySelector('.btn-limpiar').value = changeLanguage[idioma]['Limpiar'];
}

link.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        cambiarBotones(lang);
    });
});
