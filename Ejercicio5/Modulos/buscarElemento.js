// funcion flecha para buscar un elemento en una lista
export const buscarElemento = (lista, elemento) => {
    // ciclo for para recorrer la lista
    for (let i = 0; i < lista.length; i++) {
        // si el elemento es encontrado en la lista
        if (lista[i] === elemento) {
            // retornamos true
            return true;
        }
    }
    // si el elemento no es encontrado, retornamos false
    return false;
}
