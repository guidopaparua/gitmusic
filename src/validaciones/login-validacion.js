let campoNombre = document.querySelector("login-input");
let campoContrasena = document.querySelector("password-input");


// onFocus //
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");

    campoNombre.addEventListener('focus', function () {
        campoNombre.style.backgroundColor = 'pink';
    });

    campoContrasena.addEventListener('focus', function () {
        campoContrasena.style.backgroundColor = 'pink';
    });

});

// onChage//
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");
    campoNombre.addEventListener('change', function(){
       document.body.style.backgroundColor = 'red';
    });

    campoContrasena.addEventListener('change', function(){
        document.body.style.backgroundColor = 'red';
     });
 
});

// onBlur //
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");
    campoNombre.addEventListener('blur', function () {
        campoNombre.style.backgroundColor = 'plum';
    });

    campoContrasena.addEventListener('blur', function () {
        campoContrasena.style.backgroundColor = 'plum';
    });
});

// Prevent Default//
window.addEventListener("load", function () {
    let formulario = this.document.querySelector("login");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        if (campoNombre.value == "") {
            alert("Debe su nombre de usuario para acceder");
        } else if (campoNombre.value.lenght < 3) {
            alert("Escriba al menos 3 caracteres");
        }

        if (campoContrasena.value == "") {
            alert("Debe ingresar la contraseña para acceder");
        } else if (campoContrasena.value.lenght < 5) {
            alert("Escriba al menos 3 caracteres");
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