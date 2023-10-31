import Comentario from "./comentario.js"

class Valoracion{

    constructor() {
        this.comentarios = []
    }

    agregarComentario(asunto, comentarioEnviado) {
        
        let comentario = Comentario(asunto, comentarioEnviado)
        this.comentarios.push(comentario)
    }
}

export default Valoracion