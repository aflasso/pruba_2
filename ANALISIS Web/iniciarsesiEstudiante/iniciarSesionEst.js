import baseDatos from "../perfilesbd/baseDatos.js";

    const formulario = document.getElementById("formulario");
    const usuarioInput = document.getElementById("usuario");
    const contrasenaInput = document.getElementById("contrasena");

    console.log(baseDatos.usuarios[0])


    formulario.addEventListener("submit",  iniciarSesion)
    
    function iniciarSesion(event){

        event.preventDefault()

        console.log("Entro en el evento")

        const usuario = usuarioInput.value;
        const contrasena = contrasenaInput.value;

        let usuarioBD = baseDatos.buscarUsuarioPorUsuario(usuario)

        console.log(usuarioBD)

        if (usuarioBD != null && (usuario === usuarioBD.usuario && contrasena === usuarioBD.contrasena)) {
           
            localStorage.setItem('usuario', JSON.stringify(usuarioBD))
            window.location.href = '../homeEstudiante/homeEstudiante.html'

        } else {
            console.error("Error al iniciar sesion")
            // mensajeError.textContent = "Nombre de usuario o contraseña incorrectos";
        }
    };