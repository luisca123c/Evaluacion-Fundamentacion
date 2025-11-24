import {calcularPromedio} from "./Modulos/calcularPromedio.js";

let cant = 0;
const notas = [];
cant = parseInt(prompt("Ingrese la cantidad de notas del estudiante:"));
for (let i = 0; i < cant; i++) {
    let nota = 0;
    nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    if (nota > 0 )
    {
        notas.push(nota);
    }
    else
    {
        alert("La nota debe ser mayor a 0");
        i--;
    }
}
alert(calcularPromedio(notas));
