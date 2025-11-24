// importar la función validarAcceso desde el módulo correspondiente
import { validarAcceso } from "./Modulos/validarAcceso.js";
// inicializamos variables
let edad = 0;
let contra = "";
// solicitamos al usuario su edad y la contraseña
edad = parseInt(prompt("Ingrese su edad:"));
contra = prompt("Ingrese su contraseña:");
// mostramos el resultado de la validación de acceso
alert(validarAcceso(edad, contra));