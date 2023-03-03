/* Crear una función que me diga si un string comienza con vocal, consonante, número o un carácter especial.
*/

function evaluarInicial(cadena){
    let inicial = cadena.charAt(0)
    switch(inicial){
        case 'a':
            console.log("La cadena " + cadena + " comienza con la vocal A.")
        break;
        case 'e':
            console.log("La cadena " + cadena + " comienza con la vocal E.")
        break;
        case 'i':
            console.log("La cadena " + cadena + " comienza con la vocal I.")
        break;
        case 'o':
            console.log("La cadena " + cadena + " comienza con la vocal O.")
        break;
        case 'u':
            console.log("La cadena " + cadena + " comienza con la vocal U.")
        break;
        case '0':
            console.log("La cadena " + cadena + " comienza con el número 0")
        break;
        case '1':
            console.log("La cadena " + cadena + " comienza con el número 1")
        break;
        case '2':
            console.log("La cadena " + cadena + " comienza con el número 2")
        break;
        case '3':
            console.log("La cadena " + cadena + " comienza con el número 3")
        break;
        case '4':
            console.log("La cadena " + cadena + " comienza con el número 4")
        break;
        case '5':
            console.log("La cadena " + cadena + " comienza con el número 5")
        break;
        case '6':
            console.log("La cadena " + cadena + " comienza con el número 6")
        break;
        case '7':
            console.log("La cadena " + cadena + " comienza con el número 7")
        break;
        case '8':
            console.log("La cadena " + cadena + " comienza con el número 8")
        break;
        case '9':
            console.log("La cadena " + cadena + " comienza con el número 9")
        break;
        default:
                console.log("La cadena " + cadena + " comienza con el carácter especial: " + cadena.charAt(0))
        break;
    }
}

cadena = prompt("Escribe una cadena:")
evaluarInicial(cadena)






/*Input: anaconda
    output: true

    Input: belzeebub
    output: true

    Input: koder
    output: false
    
    input: cerveza
    output: false
*/

