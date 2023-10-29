class Estudiante{
    constructor(nombres, apellidos, codigo, correo, telefono, programa, semestre){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.codigo = codigo;
        this.correo = correo;
        this.telefono = telefono;
        this.programa = programa;
        this.semestre = semestre;
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

juan = new Estudiante("Juan David", "Yepez Velez", "30000089783", "jdyepezv@correo.usbcali.edu.co", "3007166887", "Ingenieria de sistemas", 3);
mar = new Estudiante("Maria Del Mar", "Mina Yepez", "30000089613", "pene@cuca.com", "164664668", "Arquitortura", 4);

console.log(juan.usuario);
console.log(mar.usuario);

export default Estudiante;