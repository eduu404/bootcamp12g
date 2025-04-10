let navbar = document.querySelector('nav');
let navbar2 = document.getElementsByTagName('a');
console.log(typeof(navbar2))
console.log(Array.from(navbar2))

let elem1 = document.getElementById('e1');
console.log(elem1)

let elem3 = document.getElementsByClassName('tres');
console.log(elem3)

let elemQuery = document.querySelector('#e2');
console.log(elemQuery)

let elemQuery2 = document.querySelector('.tres');
console.log(elemQuery2)

let elemQuery3 = document.querySelectorAll('a');
console.log(elemQuery3)

let elemList = elemQuery3.forEach((elemProv)=>{
    console.log(elemProv)
})

/*
console.log(navbar)
console.log(navbar2)*/

let parrafo = document.createElement('p');
let div = document.createElement('div');
let body = document.querySelector('body');
let padre = document.querySelector('#padre')

body.appendChild(div);
padre.appendChild(div);
padre.insertBefore(parrafo, div);