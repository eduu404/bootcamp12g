/*Ejercicio: Recibe 2 strings con el Nombre y los Apellidos
y los devuelve con el formato: nombre APELLIDO1 apellido2
*/

function convertCaps(){
    let nombre = prompt("Ingresa el Nombre:")
    let nombreLow = nombre.toLowerCase()
    let apellidoPaterno = prompt("Ingresa el apellido Paterno:")
    let apellidoPaternoUp = apellidoPaterno.toUpperCase()
    let apellidoMaterno = prompt("Ingresa el apellido Materno:")
    let apellidoMaternoLow = apellidoMaterno.toLowerCase()
    console.log(nombreLow + " " + apellidoPaternoUp + " " + apellidoMaternoLow)
}

convertCaps()