import HorarioClase from "../clases/HorarioClase.js"
import Materia from "../clases/Materia.js"
import Valoracion from "../clases/Valoracion.js"

const usuarioAlmacenado = localStorage.getItem('usuario')
const usuario = JSON.parse(usuarioAlmacenado)
const parametroURL = new URLSearchParams(window.location.search)

const nombreMateria = document.querySelector(".nombre-materia")
const listadoBotones = document.querySelector(".button-list")
const seccionComentarios = document.querySelector(".comentarios")

const id = parametroURL.get('id');

console.log(usuario)

function buscarMateria(arr) {
    let materiaSolicitada = null
    arr.forEach(element => {
        if (element.codigo == id) {
            materiaSolicitada = element
            return materiaSolicitada
        }
    });
    return materiaSolicitada
}

let listaClases = usuario.listaClases

let materia = buscarMateria(listaClases)


function renderDescripcionMateria(materia) {
    
    nombreMateria.innerText = materia.nombre

    //Seccion comentarios de la materia
    let comentarios = materia.valoracion

    console.log(comentarios)


    for (const comentario of comentarios) {
        
        const cajaComentario = document.createElement("div")

        const asunto = document.createElement("p")
        asunto.classList.add("comentario-asunto")
        asunto.innerText = comentario.asunto + " - " + comentario.puntuacion + "/5"

        const mensajeDiv = document.createElement("div")
        mensajeDiv.classList.add("div-mensaje")

        const mensaje = document.createElement("p")
        mensaje.classList.add("mensaje")
        mensaje.innerText = comentario.comentario

        mensajeDiv.appendChild(mensaje)

        cajaComentario.appendChild(asunto)
        cajaComentario.appendChild(mensajeDiv)

        seccionComentarios.appendChild(cajaComentario)

    }

    const botonProfesor = document.createElement("li")
    botonProfesor.innerText = materia.profesorAsignado

    const botonHorario = document.createElement("li")
    botonHorario.innerText = materia.horario.diaSemana + " a las " + materia.horario.horaInicio

    const botonCreditos = document.createElement("li")
    botonCreditos.innerText = materia.cantCreditos + " creditos"

    listadoBotones.appendChild(botonProfesor)
    listadoBotones.appendChild(botonHorario)
    listadoBotones.appendChild(botonCreditos)

}

renderDescripcionMateria(materia)