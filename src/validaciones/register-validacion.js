let campoCorreo = document.querySelector("input.correo");
let campoContrasena = document.querySelector("input.password");
let campoContrasena2 = document.querySelector("input.password2");


// onFocus //
window.addEventListener("formulario", function () {
    let formulario = this.document.querySelector("formulario");

    campoCorreo.addEventListener('focus', function () {
        campoCorreo.style.backgroundColor = 'pink';
    });

    campoContrasena.addEventListener('focus', function () {
        campoContrasena.style.backgroundColor = 'pink';
    });

    campoContrasena2.addEventListener('focus', function () {
        campoContrasena2.style.backgroundColor = 'pink';
    });

});

// onChage//
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");
    campoCorreo.addEventListener('change', function(){
       document.body.style.backgroundColor = 'red';
    });

    campoContrasena.addEventListener('change', function(){
        document.body.style.backgroundColor = 'red';
     });

    campoContrasena2.addEventListener('change', function(){
       document.body.style.backgroundColor = 'red';
    });
 
});

// onBlur //
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");
    campoCorreo.addEventListener('blur', function () {
        campoNombre.style.backgroundColor = 'plum';
    });

    campoContrasena.addEventListener('blur', function () {
        campoContrasena.style.backgroundColor = 'plum';
    });

    campoContrasena2.addEventListener('blur', function () {
        campoContrasena2.style.backgroundColor = 'plum';
    });
});

// Prevent Default//
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        if (campoCorreo.value == "") {
            errores.push("Debe añadir un correo electrónico para que registrarse");
        } else if (campoNombre.value.lenght < 3) {
            errores.push("Escriba al menos 3 caracteres");
        }

        if (campoContrasena.value == "") {
            errores.push("Debe ingresar una contraseña");
        } else if (campoContrasena.value.lenght < 5) {
            errores.push("Escriba al menos 3 caracteres");
        }

        if (campoContrasena2.value == campoContrasena.value ) {
            errores.push("Las contraseñas deben coincidir");
        }

        if (errores.lenght > 0) {
            e.preventDefault();
            
            let ulErrores = document.querySelector("div errores ul");
            for (let i = 0; i < errores.lenght; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    });
});