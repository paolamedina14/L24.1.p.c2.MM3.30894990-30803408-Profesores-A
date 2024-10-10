import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_contratado extends Cl_Profesor {

    constructor(nombre,montobono,canthoras) {
        super (nombre,montobono,canthoras);
        this.montobono = montobono;
        this.canthoras = canthoras;
    }
    
    canthoras(){
        return this.canthoras = 0.10;

    }

    ingresoTotal(){
        return this.montobono * this.canthoras;
    }

}