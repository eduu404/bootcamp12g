/* Crear una función que me diga si un string comienza con vocal, consonante, número o un carácter especial.
*/
/*
function evaluarInicial(cadena){
    var inicial = cadena.charAt(0)
    var tipoInicial = "";
    var ascii = inicial.charCodeAt()
    console.log(inicial)
    if((inicial => 0) && (inicial <= 9)){
        tipoInicial = "numero"
    }else if((ascii > 64) && (ascii < 91)){
        tipoInicial = "letraMayuscula"
    }else if((ascii > 96) && (ascii < 123)){
        tipoInicial = "letraMinuscula"
    }else{
        tipoInicial = "simbolo"
    }
    console.log(tipoInicial)

    switch(tipoInicial){
        case 'numero':
            console.log("La cadena " + cadena + " comienza con el número: " + inicial)
        break;

        case 'letraMayuscula':
            switch(inicial){
                case 'A':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'E':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'I':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'O':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'U':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                default:
                    console.log("La cadena " + cadena + " comienza con la consonante: " + inicial)
                break;
            }
        break;

        case 'letraMinuscula':
            switch(inicial){
                case 'a':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'e':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'i':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'o':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                case 'u':
                    console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
                break;

                default:
                    console.log("La cadena " + cadena + " comienza con la consonante: " + inicial)
                break;
            }
        break;

        case 'simbolo':
            console.log("La cadena " + cadena + " comienza con el símbolo: " + inicial)
        break;

        default:
        break;
        }
}

cadena = prompt("Escribe una cadena:")
evaluarInicial(cadena)*/


/* ESTA ES UNA FORMA OPTIMIZADA PARA RESOLVER EL EJERCICIO DE ARRIBA:

function evaluarInicial(cadena){
    var inicial = cadena.charAt(0)
    var ascii = inicial.charCodeAt()
    console.log(inicial)
    if((inicial >= 0) && (inicial <= 9)){
        console.log("La cadena " + cadena + " comienza con el número: " + inicial)
    }else if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)){
        inicial.match(/[aeiou]/gi) ?
          console.log("La cadena " + cadena + " comienza con la vocal: " + inicial) : console.log("La cadena " + cadena + " comienza con la consonante: " + inicial)
    }else{
        console.log("La cadena " + cadena + " comienza con el símbolo: " + inicial)
    }
}

cadena = prompt("Escribe una cadena:")
evaluarInicial(cadena)
*/






/* EJERCICIO 2: Inferir qué se debe hacer con la entrada para que dé las siguientes salidas.

    Input: anaconda
    output: true

    Input: belzeebub
    output: true

    Input: koder
    output: false
    
    input: cerveza
    output: false


function evaluarCadena(cadena){
    cadena.charAt(0) === cadena.charAt(cadena.length -1) ? firstEqualLast = true : firstEqualLast = false
    return firstEqualLast
}

cadena = prompt("Escribe una palabra:")
alert(evaluarCadena(cadena))*/