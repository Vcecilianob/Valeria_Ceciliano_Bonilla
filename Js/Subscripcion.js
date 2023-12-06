'use strict';


window.addEventListener('DOMContentLoaded', function() {
    let correo = document.getElementById('Correo');
    let btnEnviar = document.getElementById('btnsend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('alerta');

    btnEnviar.onclick = function(event) {
        event.preventDefault(); 
        
        correo = document.getElementById('Correo').value;


        if (correo === '') {
            alerta.textContent = 'El campo email está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (expressionEmail.test(correo) === false) {
            alerta.textContent = 'El formato de email es inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Gracias por subscribirte';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            emailjs.sendForm('service_3cak6fh', 'template_he7p997', '#Subscripcion', '8TjI1izE1A48EQ7E1');
        }
    };
});

function cleanInputs() {
    let formulario = document.getElementById('Subscripcion');
    formulario.reset();
    document.getElementById('alerta').textContent = ''; 
    document.getElementById('alerta').classList.remove('alertaRoja');
    document.getElementById('alerta').classList.remove('alertaVerde');
}