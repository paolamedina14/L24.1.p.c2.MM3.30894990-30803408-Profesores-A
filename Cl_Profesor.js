export default class Cl_Profesor{
    constructor( nombre,montobono,montosueldo,){
        this.nombre = nombre;
        this.montobono = montobono;
        this.montosueldo = montosueldo;
    }
    
     ingresoTotal(){
        return this.montobono;
     }
}
