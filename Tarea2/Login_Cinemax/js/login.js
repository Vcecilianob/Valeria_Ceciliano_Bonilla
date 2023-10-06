document.getElementById("btn-login").addEventListener("click", login);

function validation_alert(ptext) {
    swal.fire({
        title: "Revisa tu información",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=94f4ce88-fb94-47c3-a02c-fb39333f8a34/xMmcZNUtE5.json"></iframe> <br><p>' + ptext + " </p>",
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
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }
    
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
             title: "Credenciales correctas",

                showConfirmButton: false,
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=9a8201af-71bd-45d8-b978-0d8a25327387/p6Oxrgsdf6.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "file:///C:/Users/valee/OneDrive/Escritorio/Tarea2/Landing_Cinemax/Landing_Cinemax.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";

            validation_alert(text);
        }
    }
}