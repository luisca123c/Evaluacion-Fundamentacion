// Importamos la función generarTabla desde el módulo correspondiente
import { generarTabla } from "./Modulos/generarTabla.js";
// inicializamos la variable numero en 0
let numero = 0;
// iniciamos un ciclo infinito
while (true) {
    // Pedimos al usuario que ingrese un número
    numero = parseInt(prompt("Ingrese un número:"));
    // Verificamos que el numero sea positivo
    if (numero >= 0) {
        // Si el número es positivo, generamos la tabla de multiplicar
        const tabla = generarTabla(numero);
        // Mostramos la tabla en la consola
        console.log(`Tabla de multiplicar del ${numero}:`);
        for (let multi of tabla) {
            alert(multi);
        }
        // Salimos del ciclo
        break;
    }
    else{
        // Si el número es negativo, mostramos un mensaje de error y repetimos el ciclo
        alert("Número inválido. Por favor, ingrese un número positivo.");
        continue;
    }
}