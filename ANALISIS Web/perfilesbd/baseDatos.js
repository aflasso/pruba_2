import HorarioClase from "../clases/HorarioClase.js";
import Estudiante from "../clases/Persona.js";
import Materia from "../clases/Materia.js";
import Semestre from "../clases/semestre.js";
import Valoracion from "../clases/Valoracion.js";


class BD {
    constructor(){
        this.usuarios = []
        this.materiasDisponibles = [new Materia("Calculo Diferencial", "a", "Segundo", 4, new HorarioClase("Martes", "09:00", 2), "Cedro 312"),
        new Materia("Calculo Diferencial", "b", "Segundo", 4, new HorarioClase("Martes", "14:00", 2), "Cedro 312"),
        new Materia("Calculo Diferencial", "c", "Rubio", 4, new HorarioClase("Jueves", "14:00", 2), "Cedro 312"),
        new Materia("Calculo Diferencial", "d", "Rubio", 4, new HorarioClase("Viernes", "14:00", 2), "Cedro 312"),
        new Materia("Matematicas Discretas 2", "e", "Magaña", 3, new HorarioClase("Miercoles", "09:00", 3), "Cedro 311"),
        new Materia("Matematicas Discretas 2", "f", "Magaña", 3, new HorarioClase("Viernes", "09:00", 3), "Cedro 311"),
        new Materia("Matematicas Discretas 2", "g", "Rubio", 3, new HorarioClase("Miercoles", "09:00", 3), "Cedro 301"),
        new Materia("Matematicas Discretas 2", "h", "Rubio", 3, new HorarioClase("Viernes", "09:00", 3), "Cedro 301"),
        new Materia("Programacion Orientada a Objetos", "i", "Peñerori", 4,new HorarioClase("Lunes", "07:00", 2), "Parque 301"),
        new Materia("Programacion Orientada a Objetos", "j", "Peñerori", 4,new HorarioClase("Viernes", "07:00", 2), "Parque 201"),
        new Materia("Introduccion a la Ingenieria de Software", "k", "Julia", 3,new HorarioClase("Lunes", "15:00", 2), "Higuerones 2 301"),
        new Materia("Introduccion a la Ingenieria de Software", "l", "Julia", 3,new HorarioClase("Viernes", "15:00", 2), "Higuerones 2 301"),
        new Materia("Introduccion a la Ingenieria de Software", "m", "Julia", 3,new HorarioClase("Lunes", "15:00", 2), "Higuerones 2 301"),
        new Materia("Humanistica 3", "n", "Angela", 1,new HorarioClase("Jueves", "11:00", 2), "Lago 201"),
        new Materia("Humanistica 3", "o", "Miriel", 1,new HorarioClase("Jueves", "09:00", 2), "Lago 201"),
        new Materia("Humanistica 4", "p", "Fredel", 2,new HorarioClase("Viernes", "11:00", 2), "Lago 201"),
        new Materia("Humanistica 4", "q", "Castro", 2,new HorarioClase("Martes", "11:00", 2), "Lago 201")]
    }

    buscarUsuarioPorUsuario(usuarioFiltro){

        let usuarioEncontrado = null

        this.usuarios.forEach((u) => {
            if (u.usuario == usuarioFiltro) {
                usuarioEncontrado = u
                return u
            }
        });

        return usuarioEncontrado
    }
}

let baseDatos = new BD()

let materia = new Materia("Precalculo", "a", "javier", 3, new HorarioClase("Martes", "09:00", 2), "Cedro 312")

let materias_semestre1_ing_siste = baseDatos.materiasDisponibles

let comentario1 = new Valoracion("Perfecta para aprender","El profesor Segundo explica de una forma simple pero entendible. Ademas de esto la forma en la que califica ayuda mucho a los estudiantes. Si quieres entender de una forma sencilla calculo diferencial, debes matricular con el ", 5.0)
let comentario2 = new Valoracion("Buen profesor","Explica de una manera sencilla y ademas no saca muchas notas ", 4.5)

let comentario3 = new Valoracion("Muy Exigente", "Es muy buen profesor, pero a la vez es muy exigente por lo que debes esforzarte si quieres matricularte con el", 3.7)

let comentario4 = new Valoracion("Enseña bien", "El profesor explica de una manera clara y sencilla cada tema, por lo que tuve una buena experiencia con la materia", 4.1)

let comentario5 = new Valoracion("Mucho trabajo en grupo", "Si te gustan los trabajos en grupos te gustara la experiencia que tendras con esta materia. Igualmente hay muchas tareas", 4.0)


baseDatos.materiasDisponibles[0].valoracion.push(comentario1)
baseDatos.materiasDisponibles[0].valoracion.push(comentario2)

baseDatos.materiasDisponibles[6].valoracion.push(comentario3)

baseDatos.materiasDisponibles[9].valoracion.push(comentario4)

baseDatos.materiasDisponibles[11].valoracion.push(comentario5)


let semestre1_ing_siste = new Semestre(2, 18, materias_semestre1_ing_siste)

let juan = new Estudiante("Juan David", "Yepez Velez", "30000089783", "jdyepezv@correo.usbcali.edu.co", "3007166887", "Ingenieria de sistemas", semestre1_ing_siste,1);



juan.agregarClase(materias_semestre1_ing_siste[0])
juan.agregarClase(materias_semestre1_ing_siste[6])
juan.agregarClase(materias_semestre1_ing_siste[9])
juan.agregarClase(materias_semestre1_ing_siste[11])


baseDatos.usuarios.push(juan)

export default baseDatos