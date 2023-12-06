//TABS
function opciones(evt, info) {
  
    var i, tabcontent, tablinks;
  

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
  }


  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }
  
  
var modals = document.getElementsByClassName("modal");

var images = document.querySelectorAll('[id^="myImg"]');
images.forEach(function(img, index) {
    img.onclick = function() {
        var modal = modals[index];
        var modalImg = modal.querySelector(".modal-content");
        var captionText = modal.querySelector("#caption");

        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(closeBtn) {
    closeBtn.onclick = function() {
        var modal = this.parentElement;
        modal.style.display = "none";
    };
});


 const radios = document.getElementsByName('Salatipo');
    const mensaje3D = document.getElementById('mensaje3D');
    const Imagen3D = document.getElementById('Imagen3D');
    const mensaje2D = document.getElementById('mensaje2D');
    const Imagen2D = document.getElementById('Imagen2D');
    const mensaje4D = document.getElementById('mensaje4D');
    const Imagen4D = document.getElementById('Imagen4D');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === '3D') {
                mensaje3D.style.display = 'block';
                Imagen3D.style.display = 'block';
                mensaje2D.style.display = 'none';
                Imagen2D.style.display = 'none';
                mensaje4D.style.display = 'none';
                Imagen4D.style.display = 'none';
            } else if (this.value === '2D') {
                mensaje3D.style.display = 'none';
                Imagen3D.style.display = 'none';
                mensaje2D.style.display = 'block';
                Imagen2D.style.display = 'block';
                mensaje4D.style.display = 'none';
                Imagen4D.style.display = 'none';
            } else if (this.value === '4D') {
                mensaje3D.style.display = 'none';
                Imagen3D.style.display = 'none';
                mensaje2D.style.display = 'none';
                Imagen2D.style.display = 'none';
                mensaje4D.style.display = 'block';
                Imagen4D.style.display = 'block';
            } else {
                mensaje3D.style.display = 'none';
                Imagen3D.style.display = 'none';
                mensaje2D.style.display = 'none';
                Imagen2D.style.display = 'none';
                mensaje4D.style.display = 'none';
                Imagen4D.style.display = 'block';
            }
        });
    });