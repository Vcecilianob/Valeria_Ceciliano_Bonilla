document.getElementById("btn-login").addEventListener("click", login);

const recuerdameCheckbox = document.getElementById('recuerdame');


const recuerdameValue = localStorage.getItem('recuerdameValue');


if (recuerdameValue === 'true') {
    recuerdameCheckbox.checked = true;


    const savedUser = localStorage.getItem('savedUser');
    const savedPass = localStorage.getItem('savedPass');


    if (savedUser && savedPass) {
        document.getElementById("in-txt-user").value = savedUser;
        document.getElementById("in-txt-pass").value = savedPass;
    }
}

recuerdameCheckbox.addEventListener('change', function () {

    if (this.checked) {
        localStorage.setItem('recuerdameValue', 'true');
    } else {
        localStorage.removeItem('recuerdameValue');
        

        document.getElementById("in-txt-user").value = "";
        document.getElementById("in-txt-pass").value = "";
        
        localStorage.removeItem('savedUser');
        localStorage.removeItem('savedPass');
    }
});


function validation_alert(ptext) {
    swal.fire({
        title: "Revisa tus credenciales",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=51ad4568-9f81-4258-89e5-9d0392cdfa2a/iwee3OvDGZ.json" width="450" height="300"></iframe> <br><p>' + ptext + " </p>",
    });
}

function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacíos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }
    
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=b4cb36f9-0aee-43c6-a3bf-a1f48ba34f85/mHYMkcpsLi.json"></iframe> <br><br><p>Un momento!</p>',
            }).then(() => {
                window.location.href = 'https://ucenfotec.ac.cr/';
            });

            if (recuerdameCheckbox.checked) {
                localStorage.setItem('savedUser', user_input);
                localStorage.setItem('savedPass', pass_input);
                localStorage.setItem('recuerdameValue', 'true');
            } else {
                localStorage.removeItem('savedUser');
                localStorage.removeItem('savedPass');
                localStorage.removeItem('recuerdameValue');
            }
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
}
