// /*
// -crear una función que me permita saber el nombre de algún koder basado en su número asignado
// -imprimir la lista de koders, en orden alfabético descendente
// -crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
// Koder 1: Israel Salinas Martínez (I. S. M.)
// Koder 2: Óscar Rodríguez Hernández (O. R. H.)
// /*


var kodersArray = [
    “Israel Salinas Martinez”, // 0
    “Oscar Rodriguez Hernandez”, // 1
    “Salvador Jimenez Noriega”,  // 2
    “Eduardo Perez Garcia” // 3
]
function koderName(number){
    // number es a partir de 1
    return kodersArray[number - 1]
}
function printListInOrder(){
    return kodersArray.sort().reverse()
}
function createNewArray(){
    for (i=0; i<kodersArray.length; i++){
        let nameArray = kodersArray[i].split(” “) // [“Israel”, “Salinas”, “Martinez”]
        let nameInitials= “”
        for (n=0; n<nameArray.length; n++){
            nameInitials += nameArray[n][0] + “.”
            //I.S.M.
        }
        console.log(`Koder ${i+1}: ${kodersArray[i]} (${nameInitials})`);
    }
}