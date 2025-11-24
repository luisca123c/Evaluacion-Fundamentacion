function calcularImpuestoUnitario(valor, porcentaje) {
    return (valor * porcentaje) / 100;
}

export const procesarImpuestos = function() {
    let total_impuestos = 0;
    let cant = parseInt(prompt("Ingrese la cantidad de productos a procesar:"));
    if (cant > 0) {
            for (let i = 0; i < cant; i++) {
            let valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));
            let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`));
            let impuesto = calcularImpuestoUnitario(valor, porcentaje);
            total_impuestos += impuesto;
        }
        return `El total de impuestos a pagar es: ${total_impuestos}`
    }
    if (cant <= 0){
         return "Cantidad inválida. Por favor, ingrese un número positivo."
    }
}
