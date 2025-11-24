// importar la función procesarImpuestos desde el módulo correspondiente
import { procesarImpuestos } from "./Modulos/procesarImpuestos.js";
// ciclo para permitir al usuario procesar múltiples veces
while(true){
    // solicitar al usuario si desea continuar o salir
    let opcion = prompt(`¿Desea continuar?
        1. Sí
        2. No`);
    // procesar según la opción del usuario
    if(opcion == 1){
        // llamar a la función procesarImpuestos y mostrar el resultado
        alert(procesarImpuestos());
        // continuar el ciclo
        continue;
    }
    // Si el usuario elige salir 
    if(opcion == 2){
        // mostrar mensaje de despedida y salir del ciclo
        alert("Gracias por usar el programa");
        break;
    }
    // Si la opción es inválida
    else{
        // mostrar mensaje de error y continuar el ciclo
        alert("Opción inválida, por favor ingrese 1 o 2");
        continue;
    }
}
