// Crear una clase para representar un horario de clase
class HorarioClase {
    constructor(diaSemana, horaInicio, duracion) {
      this.diaSemana = diaSemana;
      this.horaInicio = horaInicio;
      this.duracion = duracion;
    }
  
    obtenerHorario() {
      return `${this.diaSemana} a las ${this.horaInicio}, duración: ${this.duracion} horas`;
    }
  }

export default HorarioClase
  