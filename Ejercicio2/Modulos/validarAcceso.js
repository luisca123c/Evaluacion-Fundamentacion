// definimos una funcion expresada para validar el acceso
export const validarAcceso = function(edad, contra) {
    // convertimos la contraseña a string para un mayor control de datos
    contra = contra.toString();
    // definimos la variable con la contraseña válida
    const contraValida = "contraseñasecreta123";
    // validamos la edad y la contraseña
    if (edad >= 18 && contra === contraValida) {
        // si ambas condiciones se cumplen, concedemos el acceso
        return "Acceso concedido";
    }
    // si alguna de las condiciones no se cumple, denegamos el acceso
    else {
        return "Acceso denegado";
    }
}