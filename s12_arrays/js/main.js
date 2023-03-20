/*
let someArray = []
console.log(someArray)

someArray.push("Misael","Jesus","Xoch","Mike","Jon")
console.log(someArray)

someArray.pop()
console.log(someArray)

someArray.shift()
console.log(someArray)

someArray.splice(1,1,"Freddy","Gerry")
console.log(someArray)

someArray.splice(1,0,"Bulmaro","Antonio")
console.log(someArray)*/

/*
    crear una función que permita indicar la cantidad de koders a guardar,
    que pida tantos nombres de koders como se indique, y al final imprima
    el nombre del koder y su número asignado

    Input: "Karen", "Xoch", "Wendy"
    output:
    Koder1: "Karen",
    Koder 2: "Xoch",
    Koder 3: "Wendy"
*/

function pedirKoders(){
    let cantidad = prompt("Escribe la cantidad de koders:")
    let kodersArray = []

    for(let i=0; kodersArray.length < cantidad; i++){
        let koderName = prompt("Escribe el nombre del koder " + (i+1) + ":")
        console.log("Koder " + (i+1) + ": " + koderName)
        kodersArray.push(koderName)
    }
    return kodersArray
}

pedirKoders()


/*
    - Crear una función que me permita saber el nombre
    de algún koder basado en su número asignado.
    - Imprimir la lista de koders, en orden alfabético descendente.
    - crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
        Koder 1: Israel Salinas Martinez (I. S. M.)
*/

