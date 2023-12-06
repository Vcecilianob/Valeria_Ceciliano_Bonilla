'use strict';


window.addEventListener('DOMContentLoaded', function() {
    let correo = document.getElementById('Correo');
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let numero = document.getElementById('numero');
    let Sucursal = document.getElementById('Sucursal');
    let Asunto=document.getElementById('Asunto');
    let cedula=document.getElementById('cedula');
    let Mensaje=document.getElementById('Mensaje');
    let btnEnviar = document.getElementById('btnsend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('alerta');

    btnEnviar.onclick = function(event) {
        event.preventDefault(); 
        
        correo = document.getElementById('Correo').value;
        nombre = document.getElementById('nombre').value;
        apellido = document.getElementById('apellido').value;
        numero = document.getElementById('numero').value;
        Sucursal = document.getElementById('Sucursal').value;
        Asunto=document.getElementById('Asunto').value;
        cedula=document.getElementById('cedula').value;
        Mensaje=document.getElementById('Mensaje')



        if (nombre === '' && apellido === '' && numero === '' && Sucursal === 'Seleccione el cine' && Asunto==='Seleccione el asunto' && cedula === '' && correo === ''&& Mensaje==='') {
            alerta.textContent = 'Debe llenar todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (nombre === '') {
            alerta.textContent = 'El nombre esta vacio';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (apellido === '') {
            alerta.textContent = 'El apellido está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (cedula === '') {
            alerta.textContent = 'La cedula esta vacía';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (numero === '' ) {
            alerta.textContent = 'Debe ingresar un número';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');   
        
        } else if (Sucursal === 'opcion0') {
            alerta.textContent = 'Debe seleccionar una sucursal';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (Asunto === 'Seleccione el asunto') {
            alerta.textContent = 'Debe seleccionar un asunto';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if ( Mensaje=== '') {
            alerta.textContent = 'Debe insertar un mensaje';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (correo === '') {
            alerta.textContent = 'El campo email está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (expressionEmail.test(correo) === false) {
            alerta.textContent = 'El formato de email es inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Pronto nos pondremos en contacto contigo';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            emailjs.sendForm('service_3cak6fh', 'template_8ftrd1k', '#Inscripcion', '8TjI1izE1A48EQ7E1');
        }
    };
});

function cleanInputs() {
    document.getElementById('Inscripcion').reset();
    document.getElementById('alerta').textContent = ''; 
    document.getElementById('alerta').classList.remove('alertaRoja');
    document.getElementById('alerta').classList.remove('alertaVerde');
}

