import { procesarImpuestos } from "./Modulos/procesarImpuestos.js";
while(true){
    let opcion = prompt(`¿Desea continuar?
        1. Sí
        2. No`);
    if(opcion == 1){
        alert(procesarImpuestos());
        continue;
    }
    if(opcion == 2){
        alert("Gracias por usar el programa");
        break;
    }
    else{
        alert("Opción inválida, por favor ingrese 1 o 2");
        continue;
    }
}
