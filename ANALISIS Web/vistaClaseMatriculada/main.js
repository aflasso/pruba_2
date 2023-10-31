const usuarioAlmacenado = localStorage.getItem('usuario')
const usuario = JSON.parse(usuarioAlmacenado)
const parametroURL = new URLSearchParams(window.location.search)

const id = parametroURL.get('id');

let listaClases = usuario.listaClases

let materiaSolicitada = null

console.log(id)

listaClases.forEach(element => {
    if (element.codigo == id) {
        materiaSolicitada = element
    }
});

console.log(materiaSolicitada)