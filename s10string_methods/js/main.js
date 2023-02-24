/*Ejercicio: Recibe 2 strings con el Nombre y los Apellidos
y los devuelve con el formato: nombre APELLIDO1 apellido2
*/

function convertCaps(nombre, apellidoPaterno, apellidoMaterno){
    
    let nombreLow = nombre.toLowerCase()
    let apellidoPaternoUp = apellidoPaterno.toUpperCase()
    let apellidoMaternoLow = apellidoMaterno.toLowerCase()
    let NombreCompleto = nombreLow + " " + apellidoPaternoUp + " " + apellidoMaternoLow
    return NombreCompleto
}

var nombre = prompt("Ingresa el Nombre:")
var apellidoPaterno = prompt("Ingresa el apellido Paterno:")
var apellidoMaterno = prompt("Ingresa el apellido Materno:")

console.log( convertCaps(nombre, apellidoPaterno, apellidoMaterno) )