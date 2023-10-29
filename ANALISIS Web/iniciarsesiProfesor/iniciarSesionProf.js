document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const usuarioInput = document.getElementById("usuario");
    const contrasenaInput = document.getElementById("contrasena");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = usuarioInput.value;
        const contrasena = contrasenaInput.value;

        if (usuario === "usuario" && contrasena === "contraseña") {
            // Redirigir al usuario a una página de inicio
            window.location.href = "../login/login.html";
        } else {
            mensajeError.textContent = "Nombre de usuario o contraseña incorrectos";
        }
    });
});