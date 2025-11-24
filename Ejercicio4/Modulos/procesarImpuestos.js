// funcion declarada para calcular el impuesto unitario
function calcularImpuestoUnitario(valor, porcentaje) {
    // fórmula para calcular el impuesto y devolver el resultado
    return (valor * porcentaje) / 100;
}
// función exportada para procesar múltiples productos y calcular el total de impuestos
export const procesarImpuestos = function() {
    // inicializar variable para acumular el total de impuestos
    let total_impuestos = 0;
    // solicitar al usuario la cantidad de productos a procesar
    let cant = parseInt(prompt("Ingrese la cantidad de productos a procesar:"));
    // validar que la cantidad sea positiva
    if (cant > 0) 
        {
            // ciclo para procesar cada producto
            for (let i = 0; i < cant; i++) 
            {
                // declarar variables para valor y porcentaje de impuesto y solicitar al usuario los datos
                let valor = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}:`));
                let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`));
                // calcular el impuesto para el producto actual y acumularlo al total
                let impuesto = calcularImpuestoUnitario(valor, porcentaje);
                total_impuestos += impuesto;
            }
            // devolver el total de impuestos calculado
            return `El total de impuestos a pagar es: ${total_impuestos}`
        }
    // en caso de cantidad inválida 
    if (cant <= 0)
    {
        // devolver mensaje de error
        return "Cantidad inválida. Por favor, ingrese un número positivo."
    }
}
