// creamos una funcion declarada para calcular el promedio de un arreglo de notas
export function calcularPromedio(notas) {
    // inicializamos la variable total_notas en 0
    let total_notas = 0;
    // recorremos el arreglo de notas y sumamos cada nota a total_notas
    for (let i = 0; i < notas.length; i++) {
        total_notas += notas[i];
    }
    // calculamos el promedio dividiendo el total de notas entre la cantidad de notas
    let promedio = total_notas / notas.length;
    // evaluamos el promedio y retornamos un mensaje según el rango en el que se encuentra
    if (promedio >= 4.5)
    {
        return `El estudiantes tiene promedio alto con ${promedio}`;
    }
    if (promedio < 4.5 && promedio >= 3.0)
    {
        return `El estudiantes tiene promedio medio con ${promedio}`;
    }
    else
    {
        return `El estudiantes tiene promedio bajo con ${promedio}`;
    }
}