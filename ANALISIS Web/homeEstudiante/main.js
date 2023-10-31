const usuarioAlmacenado = localStorage.getItem('usuario')
const usuario = JSON.parse(usuarioAlmacenado)

let listaClases = usuario.listaClases

const contenedorClases = document.querySelector(".contenedor-item")



function redireccionPaginaCLase(event) {

    const idMateria = event.currentTarget.dataset.nombre
    
    window.location.href = '../vistaClaseMatriculada/vistaClaseMatriculada.html?id=' + idMateria

}

function renderClases(lista) {
    
    for (let clase of lista) {

        const claseCard = document.createElement("div")
        claseCard.classList.add("clase-card")
        claseCard.setAttribute("data-nombre", clase.codigo)

        claseCard.addEventListener("click", redireccionPaginaCLase)

        const claseImg = document.createElement("img")
        claseImg.setAttribute("src", clase.banner)

        const claseInfoDiv = document.createElement("div")
        claseInfoDiv.classList.add("clase-info")

        const claseInfo = document.createElement("p")
        claseInfo.innerText = clase.nombre + " - " + clase.profesorAsignado

        claseInfoDiv.appendChild(claseInfo)

        claseCard.appendChild(claseImg)
        claseCard.appendChild(claseInfoDiv)

        contenedorClases.appendChild(claseCard)
    }

}

renderClases(listaClases)