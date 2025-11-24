// importar la función buscarElemento desde el módulo correspondiente
import { buscarElemento } from './Modulos/buscarElemento.js';
// Inicializamos la lista
const lista = [];
// Solicitamos al usuario que ingrese la cantidad de elementos de la lista
let cantidad = parseInt(prompt("¿Cuántos items desea agregar a la lista?"));
// Recolectamos los elementos de la lista en un bucle for
for (let i = 0; i < cantidad; i++) {
    let item = prompt(`Ingrese el elemento ${i + 1}:`);
    // Agregamos el elemento a la lista
    lista.push(item);
}
// Solicitamos al usuario el elemento a buscar en la lista
let elementoABuscar = prompt("Ingrese el elemento que desea buscar en la lista:");
// Usamos la función buscarElemento para verificar si el elemento está en la lista
let elemento_buscado = buscarElemento(lista, elementoABuscar);
// si el elemento esta en la lista
if (elemento_buscado) {
    // mostramos un mensaje indicando que el elemento fue encontrado
    alert(`El elemento "${elementoABuscar}" fue encontrado en la lista.`);
} 
// si el elemento no esta en la lista
else {
    // mostramos un mensaje indicando que el elemento no fue encontrado
    alert(`El elemento "${elementoABuscar}" no fue encontrado en la lista.`);
}