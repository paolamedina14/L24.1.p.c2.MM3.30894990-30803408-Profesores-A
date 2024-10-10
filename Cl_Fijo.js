import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Fijo extends Cl_Profesor{
    constructor(nombre,montosueldo,montobono){
        super(nombre,montosueldo,montobono);
        this.montobono = montobono;
        this.montosueldo = montosueldo;
    } 

    ingresoTotal(){
        return this.montosueldo + this.montobono;
    }
}



