//Importar la función calcularPromedio desde el módulo correspondiente
import {calcularPromedio} from "./Modulos/calcularPromedio.js";
// Inicializamos variable de cantidad y un arreglo para las notas
let cant = 0;
const notas = [];
// preguntamos al usuario la cantidad de notas
cant = parseInt(prompt("Ingrese la cantidad de notas del estudiante:"));
// Recolectamos las notas del estudiante en un ciclo for
for (let i = 0; i < cant; i++) {
    // inicializamos la variable nota
    let nota = 0;
    // Pedimos la nota al usuario
    nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    // Validamos que la nota sea mayor a 0 antes de agregarla al arreglo
    if (nota > 0 )
    {
        notas.push(nota);
    }
    // Si la nota no es válida, mostramos una alerta y repetimos la iteración
    else
    {
        alert("La nota debe ser mayor a 0");
        i--;
    }
}
// Llamamos a la función calcularPromedio y mostramos el resultado en una alerta
alert(calcularPromedio(notas));
