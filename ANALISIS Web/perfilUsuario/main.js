const usuarioAlmacenado = localStorage.getItem('usuario')
const usuario = JSON.parse(usuarioAlmacenado)

document.addEventListener('DOMContentLoaded', function() {
    const infoDiv = document.querySelector('.contenedorInformacion');
    const nombreUsuario = usuario.nombres + " " + usuario.apellidos;
    const nombreDiv = document.querySelector('.tituloPerfil');
    nombreDiv.innerHTML = "Perfil de " + nombreUsuario;

    infoDiv.innerHTML = `
    <div class = "textoDiv">
        <p>Usuario: ${usuario.usuario}</p>
        <p>Correo: ${usuario.correo} <img src="../icons/editar.png" class="imagen"></p>
        <p>Contraseña: ${usuario.contrasena} <img src="../icons/ojo.png" class="imagen"><img src="../icons/editar.png" class="imagen"></p>
        <p>Telefono: ${usuario.telefono}<img src="../icons/editar.png" class="imagen"></p>
        <p>Programa Académico: ${usuario.programa}</p>
        <p>Semestre en curso: ${usuario.semestreActual}</p>
    </div>
        `;
});
