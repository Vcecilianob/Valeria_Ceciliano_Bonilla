     function calcularFactura() {
        
        const nombre = document.getElementById("nombre").value;
        const articulo = document.getElementById("articulo").value;
        const cantidad = parseInt(document.getElementById("cantidad").value);
        const precio = parseFloat(document.getElementById("precio").value);

        const subtotal = cantidad * precio;
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;
        const totalAPagar = subtotal + iva + servicio;


        const eleccion = document.querySelector(".eleccion");
        eleccion.innerHTML = `
        <br><br>
            <h5 class="pb-2">Nombre: ${nombre}</h5>
            <br>
            <h5 class="pb-2">Artículo: ${articulo}</h5>
            <br>
            <h5 class="pb-2">Cantidad: ${cantidad}</h5>
            <br>
            <h5 class="pb-2">Precio: ${precio}</h5>
            <br>
            <h5 class="pb-2">Subtotal: ${subtotal.toFixed(2)}</h5>
            <br>
            <h5 class="pb-2">IVA 13%: ${iva.toFixed(2)}</h5>
            <br>
            <h5 class="pb-2">Servicio 5%: ${servicio.toFixed(2)}</h5>
            <br>
            <h5 class="pb-2">Total a pagar: ${totalAPagar.toFixed(2)}</h5>
        `;
    }

    function limpiarCampos() {
        document.getElementById("nombre").value = "";
        document.getElementById("articulo").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("precio").value = "";

        const eleccion = document.querySelector(".eleccion");
        eleccion.innerHTML = "";
    }

