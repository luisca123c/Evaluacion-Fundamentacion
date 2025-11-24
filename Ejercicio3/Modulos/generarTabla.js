// Creamos una funcion flecha que genera la tabla de multiplicar de un numero dado
export const generarTabla = (numero) => 
    {
        // Creamos un array para almacenar la tabla
        let tabla = [];
        // Usamos un ciclo for para generar la tabla de multiplicar del numero dado
        for (let i = 1; i <= 10; i++)
        {
            // Agregamos cada resultado al array tabla
            tabla.push(`${numero} x ${i} = ${numero * i}`);
        }
        return tabla;
    }
