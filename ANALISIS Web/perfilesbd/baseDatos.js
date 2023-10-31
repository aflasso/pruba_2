import Estudiante from "../clases/Persona.js";
import Materia from "../clases/Materia.js";
import Semestre from "../clases/semestre.js";
import HorarioClase from "../clases/HorarioClase.js";

class BD {
    constructor(){
        this.usuarios = []
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

let materias_semestre1_ing_siste = [new Materia("Precalculo", "a", "javier", 3, new HorarioClase("Martes", "09:00", 2), "Cedro 312"),
new Materia("Precalculo", "b", "javier", 3, new HorarioClase("Martes", "14:00", 2), "Cedro 312"),
new Materia("Precalculo", "c", "Mauricio", 3, new HorarioClase("Jueves", "14:00", 2), "Cedro 312"),
new Materia("Precalculo", "d", "Mauricio", 3, new HorarioClase("Jueves", "14:00", 2), "Cedro 312"),
new Materia("Matematicas Discretas 1", "f", "Magaña", 3, new HorarioClase("Miercoles", "09:00", 3), "Cedro 311"),
new Materia("Matematicas Discretas 1", "g", "Magaña", 3, new HorarioClase("Viernes", "09:00", 3), "Cedro 311"),
new Materia("Matematicas Discretas 1", "h", "Rubio", 3, new HorarioClase("Miercoles", "09:00", 3), "Cedro 301"),
new Materia("Matematicas Discretas 1", "i", "Rubio", 3, new HorarioClase("Viernes", "09:00", 3), "Cedro 301"),
new Materia("Fundamentos de Programacion", "j", "Peñe", 4,new HorarioClase("Lunes", "07:00", 2), "Parque 301"),
new Materia("Fundamentos de Programacion", "k", "Cabezas", 4,new HorarioClase("Lunes", "07:00", 2), "Parque 201"),
new Materia("Introduccion a la ingenieria", "l", "Tovar", 3,new HorarioClase("Lunes", "15:00", 2), "Higuerones 2 301"),
new Materia("Introduccion a la ingenieria", "m", "Tovar", 3,new HorarioClase("Viernes", "15:00", 2), "Higuerones 2 301"),
new Materia("Introduccion a la ingenieria", "n", "Sandra", 3,new HorarioClase("Lunes", "15:00", 2), "Higuerones 2 301"),
new Materia("Expresion oral y escrita", "o", "Luis", 2,new HorarioClase("Jueves", "17:00", 3), "Lago 201"),
new Materia("Expresion oral y escrita", "dfhgdb", "Efrain", 2,new HorarioClase("Miercoles", "17:00", 3), "Lago 201"),
new Materia("Humanistica 1", "p", "Angela", 1,new HorarioClase("Jueves", "11:00", 2), "Lago 201"),
new Materia("Humanistica 1", "q", "Miriel", 1,new HorarioClase("Jueves", "09:00", 2), "Lago 201"),
new Materia("Humanistica 2", "r", "Fredel", 2,new HorarioClase("Viernes", "11:00", 2), "Lago 201"),
new Materia("Humanistica 2", "s", "castro", 2,new HorarioClase("Martes", "11:00", 2), "Lago 201"),]

let semestre1_ing_siste = [new Semestre(2, 18, materias_semestre1_ing_siste)]

let juan = new Estudiante("Juan David", "Yepez Velez", "30000089783", "jdyepezv@correo.usbcali.edu.co", "3007166887", "Ingenieria de sistemas", semestre1_ing_siste,1);



juan.agregarClase(materias_semestre1_ing_siste[0])
juan.agregarClase(materias_semestre1_ing_siste[6])
juan.agregarClase(materias_semestre1_ing_siste[9])
juan.agregarClase(materias_semestre1_ing_siste[11])

let baseDatos = new BD()

baseDatos.usuarios.push(juan)

export default baseDatos