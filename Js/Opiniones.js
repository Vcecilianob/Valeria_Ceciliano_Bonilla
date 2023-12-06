//ENCUESTA
document.querySelector('#btnCalcular').addEventListener('click', evaluacion);

function evaluacion() {
    Sucur = document.querySelector('#Sucursal').value;
    error_radio = validar_radio();

    if ( Sucur !== "Desamparados" && Sucur !== "Alajuela" && Sucur !== "Heredia" && Sucur !== "Cartago"|| error_radio == true) {
        Swal.fire({
            title: 'Atención',
            html: '<iframe src="https://lottie.host/embed/ad13cd06-2378-42d4-ba68-f2bbd8f1ac53/GuoHC02hpA.json"></iframe></iframe><br><br> Tiene campos vacios o la sucursal no existe.',
            confirmButtonColor: '#c82b2b',
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'mi-boton',
            }
        })
    } else {

        preg1 = document.querySelector('#pregunta1 input[type=radio]:checked').value;
        preg2 = document.querySelector('#pregunta2 input[type=radio]:checked').value;
        preg3 = document.querySelector('#pregunta3 input[type=radio]:checked').value;
        preg4 = document.querySelector('#pregunta4 input[type=radio]:checked').value;
        preg5 = document.querySelector('#pregunta5 input[type=radio]:checked').value;


        numres1 = parseInt(preg1);
        numres2 = parseInt(preg2);
        numres3 = parseInt(preg3);
        numres4 = parseInt(preg4);
        numres5 = parseInt(preg5);


        ptnSubTotal = numres1 + numres2 + numres3 + numres4 + numres5;
        ptnTotal = ptnSubTotal / 25;
        porcFinal = ptnTotal * 100;


        Swal.fire({
            title: 'Evaluación obtenida: ' + porcFinal + '%',
            html: '<iframe src="https://lottie.host/embed/d0612db1-aa88-47d8-a546-bf7cb7a71176/7lVxWaT6h5.json"></iframe><br><br> Calificacion brindada a la sucursal: ' +  Sucur,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'mi-boton',
            }
        })

    };
}



let validar_radio = () => {
    let error = false;
    let error_radio = false;
    let inpRadio1 = document.querySelector('#pregunta1 input[type=radio]:checked');
    let inpRadio2 = document.querySelector('#pregunta2 input[type=radio]:checked');
    let inpRadio3 = document.querySelector('#pregunta3 input[type=radio]:checked');
    let inpRadio4 = document.querySelector('#pregunta4 input[type=radio]:checked');
    let inpRadio5 = document.querySelector('#pregunta5 input[type=radio]:checked');
    if (!inpRadio1 || !inpRadio2 || !inpRadio3 || !inpRadio4 || !inpRadio5) {
        error = true;
        error_radio = true;
    } else {
        error_radio = false;
    }
    return error_radio;
}




function btnlimpiar() {
    document.getElementById('Sucursal').value = "";

    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
    document.getElementById("e").checked = false;


    document.getElementById("f").checked = false;
    document.getElementById("g").checked = false;
    document.getElementById("h").checked = false;
    document.getElementById("i").checked = false;
    document.getElementById("j").checked = false;


    document.getElementById("k").checked = false;
    document.getElementById("l").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("n").checked = false;
    document.getElementById("o").checked = false;



    document.getElementById("p").checked = false;
    document.getElementById("q").checked = false;
    document.getElementById("r").checked = false;
    document.getElementById("s").checked = false;
    document.getElementById("t").checked = false;



    document.getElementById("u").checked = false;
    document.getElementById("w").checked = false;
    document.getElementById("x").checked = false;
    document.getElementById("y").checked = false;
    document.getElementById("z").checked = false;
}


//CONTADOR
function animateCounter() {
    const counters = document.querySelectorAll('.number');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-number');
        const increment = target / 100; 
        
        const updateCounter = () => {
            const currentNumber = +counter.textContent;
            if (currentNumber < target) {
                counter.textContent = Math.ceil(currentNumber + increment);
                setTimeout(updateCounter, 30); 
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

window.addEventListener('load', animateCounter);