/*Ejercicio 1: Comparar 2 strings y determinar cuál
    de ambos es el más largo*/

/*function compararCadena(cadena1, cadena2){
    var longitudCadena1 = cadena1.length
    var longitudCadena2 = cadena2.length
    if(longitudCadena1 > longitudCadena2){
        return cadena1
    }else{
        return cadena2
    }
}

var cadena1 = prompt("Escribe la primer cadena:")
var cadena2 = prompt("Escribe la segunda cadena:")

console.log( "La cadena mayor es: " + compararCadena(cadena1, cadena2) )
*/

/*EJERCICIO 2: Crear un nuevo string y lo devuelva con
    el siguiente formato:
    entrada: "a very large string"
    salida: "A VeRy lArGe sTrInG"
    */

    /*
    function zigzag(cadena){
        var longitudCadena = cadena.length
        var salida = "";
        let i
        for(i = 0; i <= longitudCadena; i++){
            if(i%2==0){
                let letra = cadena.charAt(i)
                salida = salida + letra.toLowerCase()
            }else{
                let letra = cadena.charAt(i)
                salida = salida + letra.toUpperCase()
            }
        }
        return salida
    }

    cadena = prompt("Escribe una cadena:")
    alert( zigzag(cadena) )*/

    /*EJERCICIO 3: Crear un nuevo string y devolverlo al revés.
    */

    function invertirCadena(cadena){
        var sizeCadena = cadena.length
        var cadenaInversa = "";
        for(sizeCadena; sizeCadena > 0; sizeCadena--){
            let valorIndice = cadena.charAt(sizeCadena-1)
            cadenaInversa = cadenaInversa + valorIndice
        }
        return cadenaInversa
    }

    var cadena = prompt("Escribe una cadena:")
    alert( "La cadena invertida es: " + (invertirCadena(cadena)) )