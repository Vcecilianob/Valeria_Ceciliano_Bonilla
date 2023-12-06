'use strict';


window.addEventListener('DOMContentLoaded', function() {
    let correo = document.getElementById('Correo');
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let numero = document.getElementById('numero');
    let Sucursal = document.getElementById('Sucursal');
    let Pelicula=document.getElementById('Pelicula');
    let cedula=document.getElementById('cedula');
    let Cantidad=document.getElementById('Cantidad');
    let Hora=document.getElementById('Hora');
    let NumeroTarjeta=document.getElementById('NumeroTarjeta');
    let CCV=document.getElementById('CCV');
    let Expiracion=document.getElementById('Expiracion');
    let TipoTarjeta=document.getElementById('TipoTarjeta');

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
        Pelicula=document.getElementById('Pelicula').value;
        Cantidad =document.getElementById('Cantidad').value;
        Hora =document.getElementById('Hora').value;
        cedula=document.getElementById('cedula').value;
        NumeroTarjeta=document.getElementById('NumeroTarjeta').value;
        CCV=document.getElementById('CCV').value;
        Expiracion =document.getElementById('Expiracion').value;
        TipoTarjeta=document.getElementById('TipoTarjeta').value;

        
    if (nombre === '') {
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

        } else if (Pelicula === 'opcion0') {
            alerta.textContent = 'Debe seleccionar una pelicula';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (Cantidad==='') {
            alerta.textContent = 'Debe seleccionar una cantidad mayor a cero';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (Hora === 'opcion0') {
            alerta.textContent = 'Debe seleccionar la hora';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (TipoTarjeta === 'opcion0') {
            alerta.textContent = 'Debe seleccionar una tipo de tarjeta';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (NumeroTarjeta === '') {
            alerta.textContent = 'Debe ingresar el número de tarjeta';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (NumeroTarjeta.length !== 15) {
            alerta.textContent = 'El número de tarjeta debe tener 15 dígitos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (CCV === '') {
            alerta.textContent = 'Debe ingresar el codigo de seguridad';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (CCV.length !== 4) {
            alerta.textContent = 'El número de tarjeta debe tener 4 dígitos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (Expiracion === '') {
            alerta.textContent = 'Debe ingresar la fecha de expiracion';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        }else if (correo === '') {
            alerta.textContent = 'El campo email está vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (expressionEmail.test(correo) === false) {
            alerta.textContent = 'El formato de email es inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else {
            emailjs.sendForm('service_3cak6fh', 'template_8ftrd1k', '#Inscripcion', '8TjI1izE1A48EQ7E1');

            Swal.fire({
                title: 'Compra realizada',
                text: 'Revise su email para más detalles',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'mi-boton',
                }
            });
        }
     }
});





const calcularBtn = document.getElementById('calcularBtn');
const resultadoCalculo = document.getElementById('resultadoCalculo');

calcularBtn.addEventListener('click', function(event) {
    event.preventDefault();

    // Obtener el valor de la cantidad de entradas y convertirlo a número
    let cantidadEntradas = document.getElementById('Cantidad').value;
    cantidadEntradas = cantidadEntradas === '' ? 0 : parseInt(cantidadEntradas);

    // Precio por entrada (puedes modificar este valor)
    const precioEntrada = 3500; // Ejemplo: ₡3500 por entrada

    // Calcular el total
    const total = cantidadEntradas * precioEntrada;

    // Mostrar el resultado en el elemento correspondiente
    resultadoCalculo.textContent = `El total a pagar es: ₡${total},00`;
});



  function cleanInputs() {
    document.getElementById('Inscripcion').reset();
    document.getElementById('alerta').textContent = '';
    document.getElementById('alerta').classList.remove('alertaRoja');
    document.getElementById('alerta').classList.remove('alertaVerde');
    resultadoCalculo.textContent = '';
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón de cerrar sesión
    const btnCerrarSesion = document.getElementById('cerrarSesion');

    // Verificar si se encontró el botón
    if (btnCerrarSesion) {
        // Agregar un evento clic al botón de cerrar sesión
        btnCerrarSesion.addEventListener('click', function() {
            // Simular cierre de sesión con un mensaje
            console.log('Sesión cerrada correctamente');

            // Simular redirección después de cerrar sesión
            // Reemplaza con tu lógica de redirección
            window.location.href = 'Landing_Cinemax.html';
        });
    } else {
        console.error('El botón de cerrar sesión no se encontró');
    }
});


