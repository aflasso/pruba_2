class Estudiante{
    constructor(nombres, apellidos, codigo, correo, telefono, programa, semestres, semestreActual){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.codigo = codigo;
        this.correo = correo;
        this.telefono = telefono;
        this.programa = programa;
        this.semestres = semestres;
        this.semestreActual = semestreActual
        this.usuario = this.crearUsuario(nombres, apellidos);
        this.contrasena = codigo;
        this.listaClases = [];
    }

    crearUsuario(nombres, apellidos){
        let user = "";
        let nombreSeparado = nombres.split(" ");
        let apellidoSeparado = apellidos.split(" ");
        
        for(let i = 0; i < nombreSeparado.length; i++){
            user += nombreSeparado[i][0].toLowerCase();
        }
        
        user += apellidoSeparado[0].toLowerCase();
        
        for(let j = 1; j < apellidoSeparado.length; j++){
            user += apellidoSeparado[j][0].toLowerCase();
        }
        
        return user;
    }

    agregarClase(clase){
        this.listaClases.push(clase);
    }

}

export default Estudiante;