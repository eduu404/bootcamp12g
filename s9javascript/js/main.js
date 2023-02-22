/*Sesión 9 javascript
    Ejercicio 1:
    Pedir 2 números al usuario y mostrar
    en consola el resultado de aplicar
    todas las operaciones aritméticas
    entre esos dos números


var firstNumber = prompt("Ingresa el primer número:")
var secondNumber = prompt("Ingresa el segundo número:")

suma = parseInt(firstNumber) + parseInt(secondNumber)
resta = parseInt(firstNumber) - parseInt(secondNumber)
producto = parseInt(firstNumber) * parseInt(secondNumber)
division = parseInt(firstNumber) / parseInt(secondNumber)
residuo = parseInt(firstNumber) % parseInt(secondNumber)

console.log("Suma de " + firstNumber + " + " + secondNumber + " = " + suma)
console.log("Resta de " + firstNumber + " - " + secondNumber + " = " + resta)
console.log("Producto de " + firstNumber + " * " + secondNumber + " = " + producto)
console.log("Division de " + firstNumber + " / " + secondNumber + " = " + division)
console.log("Residuo de " + firstNumber + " % " + secondNumber + " = " + residuo)
*/

/*Ejercicio 2:
    Pedir al usuario dos números y escribir en consola
    si el primer número es mayor que el segundo
    

var firstNumber = prompt("Ingresa el primer número:")
var secondNumber = prompt("Ingresa el segundo número:")

if(parseInt(firstNumber) > parseInt(secondNumber)){
    console.log(firstNumber + " ES mayor que " + secondNumber)
}else{
    console.log(firstNumber + " NO es mayor que " + secondNumber)
}*/


/*Ejercicio 3: pedir el usuario dos letras, y determinar si la
    primera aparece antes o después en el alfabeto*/

var firstLetter = prompt("Escribe la primer letra:")
var secondLetter = prompt("Escribe la segunda letra:")

if(firstLetter > secondLetter){
    console.log(firstLetter + " aparece DESPUES que " + secondLetter)
}else{
    console.log(firstLetter + " aparece ANTES que " + secondLetter)
}