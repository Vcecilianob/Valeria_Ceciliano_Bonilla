function Empleado() {
    var escala = document.getElementById('escala_txt').value;
    var resultado = document.getElementById('resultado');

    if (isNaN(parseInt(escala))) {
        Swal.fire({
            icon: 'Error',
            title: 'Atención',
            text: 'El campo está vacío/NO encontramos el empleado'
        });
        return false;

    }else if (parseInt(escala) >= 8) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El número de empleado no existe'
        });
        return false;

    } else

    if (escala==1) {
            resultado.innerHTML='Roberto Castañeda<br> <h4>Gerente</h4> ';
            document.getElementById('ima1').style.display='block'
            document.getElementById('ima0').style.display='none';
            document.getElementById('ima2').style.display='none';
            document.getElementById('ima3').style.display='none';
            document.getElementById('ima4').style.display='none';
            document.getElementById('ima5').style.display='none';
            document.getElementById('ima6').style.display='none';
            document.getElementById('ima7').style.display='none';
    } else {
        if (escala==2) {
            resultado.innerHTML='Emilia Robles<br> <h4>Sub-Gerente</h4>';
            document.getElementById('ima2').style.display='block';
            document.getElementById('ima0').style.display='none';
            document.getElementById('ima1').style.display='none';
            document.getElementById('ima3').style.display='none';
            document.getElementById('ima4').style.display='none';
            document.getElementById('ima5').style.display='none';
            document.getElementById('ima6').style.display='none';
            document.getElementById('ima7').style.display='none';
            document.getElementById('escala_txt').value='';
        } else {
            if(escala==3){
                resultado.innerHTML='Shane Osburn <br> <h4>Chef</h4>';
                document.getElementById('ima3').style.display='block';
                document.getElementById('ima0').style.display='none';
                document.getElementById('ima1').style.display='none';
                document.getElementById('ima2').style.display='none';
                document.getElementById('ima4').style.display='none';
                document.getElementById('ima5').style.display='none';
                document.getElementById('ima6').style.display='none';
                document.getElementById('ima7').style.display='none';
                document.getElementById('escala_txt').value='';
            } else {
                if(escala==4){
                    resultado.innerHTML='Yen Wo<br> <h4>Sous Chef</h4>';
                    document.getElementById('ima4').style.display='block';
                    document.getElementById('ima0').style.display='none';
                    document.getElementById('ima1').style.display='none';
                    document.getElementById('ima2').style.display='none';
                    document.getElementById('ima3').style.display='none';
                    document.getElementById('ima5').style.display='none';
                    document.getElementById('ima6').style.display='none';
                    document.getElementById('ima7').style.display='none';
                    document.getElementById('escala_txt').value='';
            } else {
                if(escala==5){
                    resultado.innerHTML='Miguel Obando <br> <h4>Camarero</h4>';
                    document.getElementById('ima5').style.display='block';
                    document.getElementById('ima0').style.display='none';
                    document.getElementById('ima1').style.display='none';
                    document.getElementById('ima2').style.display='none';
                    document.getElementById('ima3').style.display='none';
                    document.getElementById('ima4').style.display='none';
                    document.getElementById('ima6').style.display='none';
                    document.getElementById('ima7').style.display='none';
                    document.getElementById('escala_txt').value='';
            }else {
                if(escala==6){
                    resultado.innerHTML='Estela Martinez <br> <h4>Cajero</h4>';
                    document.getElementById('ima6').style.display='block';
                    document.getElementById('ima0').style.display='none';
                    document.getElementById('ima1').style.display='none';
                    document.getElementById('ima2').style.display='none';
                    document.getElementById('ima3').style.display='none';
                    document.getElementById('ima4').style.display='none';
                    document.getElementById('ima5').style.display='none';
                    document.getElementById('ima7').style.display='none';
                    document.getElementById('escala_txt').value='';

                }else {
                    if(escala==7){
                        resultado.innerHTML='Marcos Falls <br> <h4>Conserje</h4>';
                        document.getElementById('ima7').style.display='block';
                        document.getElementById('ima0').style.display='none';
                        document.getElementById('ima1').style.display='none';
                        document.getElementById('ima2').style.display='none';
                        document.getElementById('ima3').style.display='none';
                        document.getElementById('ima4').style.display='none';
                        document.getElementById('ima5').style.display='none';
                        document.getElementById('ima6').style.display='none';
                        document.getElementById('escala_txt').value='';
        
                              }
                            
                            }
                        }
                    }
                }
            }
        }
    }
    
    function Limpiar() {
    document.getElementById('escala_txt').value='';
    resultado.innerHTML='';
    document.getElementById('ima0').style.display='block';
    document.getElementById('ima1').style.display='none';
    document.getElementById('ima2').style.display='none';
    document.getElementById('ima3').style.display='none';
    document.getElementById('ima4').style.display='none';
    document.getElementById('ima5').style.display='none';
    document.getElementById('ima6').style.display='none';
    document.getElementById('ima7').style.display='none';
    document.getElementById('escala_txt').value='';
}
