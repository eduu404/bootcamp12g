/*EJERCICIO 5: Dada la longitud de una cadena por el usuario, generar sus caracteres de manera aleatoria sin que ninguno se repita.
-creamos una variable para guardar la cadena resultante.
-obtener el número de caracteres.
-definir un rango numérico que determine el código ascii de los caracteres
que estarán disponibles.
-obtener de forma aleatoria algún número dentro de ese rango.
-obtener el carácter correspondiente al número seleccionado.
-almacenamos en una variable el carácter obtenido.

-evaluamos si el carácter existe en la cadena de resultado.
-si el caracter no existe, lo agregamos a la cadena de resultado.
-si el caracter existe en la cadena, debemos generar un nuevo caracter.
-repetir n veces.
-devolver la cadena de resultado.
*/


function evaluarCadena(longitud){
    var result = "";

    do{
      
      let caracter = generarAleatorio()

      if(!result.includes(caracter)){
      result += caracter
      } else {
        generarAleatorio()
      }
    }
    while(result.length < longitud )
    console.log("Longitud: " + result.length)
    return result
}

function generarAleatorio(){
        var characterCode = Math.floor( Math.random() * (91 - 48) ) + 48
    var character = String.fromCharCode(characterCode)
  return character
      }

longitud = prompt("Escribe la longitud de la cadena:")
console.log( evaluarCadena(longitud) )