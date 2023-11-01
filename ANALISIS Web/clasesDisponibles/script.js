const usuarioAlmacenado = localStorage.getItem('usuario')
const usuario = JSON.parse(usuarioAlmacenado)

const cajaMaterias = document.querySelector(".caja-gris")
const vistaMateria = document.querySelector(".clase-info")
const infoDiv = document.querySelector(".info")

console.log(usuario)

listadoClases = usuario.semestres.listadoClases

function renderMaterias(listaClases) {
  
  for (const materia of listaClases) {
    
    const materiaBoton = document.createElement("button")
    materiaBoton.classList.add("materia-button")
    materiaBoton.setAttribute("data-id", materia.codigo)
    materiaBoton.addEventListener("click", togleVista)
    materiaBoton.innerText = materia.nombre

    cajaMaterias.appendChild(materiaBoton)

  }

}

function togleVista(event) {

  const id = event.currentTarget.dataset.id
  const materia = buscarMateria(listadoClases, id)

  const nombreMateria = document.querySelector(".nombre-materia")
  nombreMateria.innerText = materia.nombre

  const nombreProfesor = document.querySelector(".nombre-profesor")
  nombreProfesor.innerText = materia.profesorAsignado

  const horarioMateria = document.querySelector(".horario")
  horarioMateria.innerText = materia.horario.diaSemana + " a las " + materia.horario.horaInicio

  const valoracion = document.querySelector(".valoracion")
  valoracion.innerText = calcularNota(materia) + "/5"



  infoDiv.appendChild(nombreMateria)
  infoDiv.appendChild(nombreProfesor)
  infoDiv.appendChild(horarioMateria)
  infoDiv.appendChild(valoracion)

  if (vistaMateria.classList.contains("active")) {
    vistaMateria.classList.toggle("active")  
  }
  

}

function mostrarAnuncio(event) {
  


}

function buscarMateria(arr, id) {
  let materiaSolicitada = null
  arr.forEach(element => {
      if (element.codigo == id) {
          materiaSolicitada = element
          return materiaSolicitada
      }
  });
  return materiaSolicitada
}

function calcularNota(materia) {
  
  let total = 0
  let cant = 0

  if (materia.valoracion.length == 0) {
    return "NA"
  }

  for (const valoracion of materia.valoracion) {
    console.log(valoracion.puntuacion)
    total += valoracion.puntuacion
    cant++
  }
  console.log(total)

  return total / cant

}

renderMaterias(listadoClases)