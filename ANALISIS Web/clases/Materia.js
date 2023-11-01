import HorarioClase from "./HorarioClase.js";
import Valoracion from "./Valoracion.js";

class Materia {
    constructor(nombre, codigo, profesorAsignado, cantCreditos, horario, ubicacion)
    {
        this.nombre = nombre
        this.codigo = codigo
        this.profesorAsignado = profesorAsignado
        this.cantCreditos = cantCreditos
        this.horario = horario
        this.ubicacion = ubicacion
        this.valoracion = []
        this.banner = "../img/banner_materia.jpg"
    }
}

export default Materia