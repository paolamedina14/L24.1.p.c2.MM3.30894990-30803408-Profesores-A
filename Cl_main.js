/*PROFESORES-A 
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total. 
Ejemplos de la corrida: 
Nombre del profesor fijo: Carlos 
Monto del bono: $25 
Monto del sueldo: $100 
Ingreso total del profesor Carlos: $125 
Nombre del profesor fijo: Carolina 
Monto del bono: $40 
Monto del sueldo: $90 
Ingreso total del profesor Carolina: $130*/

import Cl_Profesor from "./Cl_Profesor.js";
import Cl_Fijo from "./Cl_Fijo.js";
import Cl_contratado from "./Cl_contratado.js";

let Profesor = new Cl_Profesor();
let Fijo = new Cl_Fijo("Carlos", 25,100,125);
let Fijo2 = new Cl_Fijo("Carolina", 40,90,130);

Profesor.procesarFijo(Fijo);
Profesor.procesarFijo2(Fijo2);

let salida = document.getElementById("Salida");

let mostrarFijo = (Fijo) =>{
    return`

    <tr>
        <td>${Fijo.nombre}</td>
        <td>${Fijo.montobono}</td>
        <td>${Fijo.montosueldo}</td>
        <td>${Fijo.ingresoTotal()}</td>
    </tr>

    `

};

salida.innerHTML =`
 <table>
 <tr>
    <td>nombre</td>
    <td>montobono</td>
    <td>montosueldo</td>
    <td>ingresoTotal</td>
 </tr>
${mostrarFijo(Fijo)}
${mostrarFijo(Fijo2)}
 
</table>

`;