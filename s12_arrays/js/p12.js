//paso 1: pedir numero de koders a ingresar

var numero = parseInt(prompt("Ingresa el número de koders: "))
console.log (numero)

//crear array
let koders = []

//ciclo for para añadir nombres

for(i = 0; i < numero; i++){
    let nombre = prompt("Ingresa el nombre: ")
    koders.push(nombre)
}

console.log(koders)
alert( koders )
alert("Koders ingresados: " + koders.length)