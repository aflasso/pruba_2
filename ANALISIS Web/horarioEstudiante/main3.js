const usuarioAlmacenado = localStorage.getItem('usuario')
const usuario = JSON.parse(usuarioAlmacenado)
console.log(usuario.nombres)

document.addEventListener('DOMContentLoaded', function() {
    const horarioDiv = document.querySelector('.horario');
    const nombreUsuario = usuario.nombres + " " + usuario.apellidos;
    const nombreDiv = document.querySelector('.tituloHorario');
    nombreDiv.innerHTML = "Horario de clases de " + nombreUsuario;
    let sumaCreditosUsuario = 0;
    let link = "../PaginaInicial/PaginaInicial.html";
    
    for (const materia of usuario.listaClases){
        sumaCreditosUsuario += materia.cantCreditos;
    }
    
    console.log(sumaCreditosUsuario);
    console.log(usuario.semestres.cantCreditos);
    
    if (usuario && usuario.listaClases.length > 0 && sumaCreditosUsuario <= usuario.semestres.cantCreditos) {
        usuario.listaClases.forEach((clase) => {
            const diaClaseDiv = horarioDiv.querySelector(`.${clase.horario.diaSemana}`);
            if (diaClaseDiv) {
                const claseDiv = document.createElement('div');
                claseDiv.className = 'claseDia';
                claseDiv.innerHTML = `
                    <a href = ${link}><h3>${clase.nombre}</h3></a>
                    <p>Profesor: ${clase.profesorAsignado}</p>
                    <p>Hora: ${clase.horario.horaInicio}</p>
                    <p>Duración: ${clase.horario.duracion} horas</p>
                    <p>Lugar: ${clase.ubicacion}</p>
                    <p>Creditos: ${clase.cantCreditos}</p>
                `;
                diaClaseDiv.appendChild(claseDiv);
            }
        });
    } else if (sumaCreditosUsuario > usuario.semestres.cantCreditos){
        horarioDiv.innerHTML = '<p>Superaste los créditos de este semestre (' + sumaCreditosUsuario + ' de ' + usuario.semestres.cantCreditos + ')</p>';
    } else if(usuario.listaClases.length == 0){
        horarioDiv.innerHTML = '<p>No has matriculado este semestre</p>';
    }
});
