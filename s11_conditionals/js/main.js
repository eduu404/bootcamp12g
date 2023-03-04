/* Crear una función que me diga si un string comienza con vocal, consonante, número o un carácter especial.
*/

function evaluarInicial(cadena){
    var inicial = cadena.charAt(0)
    var tipoInicial = "";
    console.log(inicial)
    if((inicial => 0) && (inicial <= 9)){
        console.log("La cadena " + cadena + " comienza con el número: " + inicial)
    } else if((inicial => "a") && (inicial <= "z")){
        tipoInicial = "letra"
        }else{
            tipoInicial = "simbolo"
        }
    
    if(tipoInicial = "letra"){
        if(inicial = "a"){
            console.log("La cadena " + cadena + " comienza con la vocal: " + inicial)
            }else{
                console.log("La cadena " + cadena + " comienza con la consonante: " + inicial)
            }
        if(tipoInicial = "simbolo"){
            console.log("La cadena " + cadena + " comienza con el carácter especial: " + inicial)
        }
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