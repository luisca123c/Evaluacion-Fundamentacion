export function calcularPromedio(notas) {
    let total_notas = 0;
    for (let i = 0; i < notas.length; i++) {
        total_notas += notas[i];
    }
    let promedio = total_notas / notas.length;
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