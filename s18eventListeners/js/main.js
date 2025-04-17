let botonMas = document.getElementById('mas');
let count = 0;

botonMas.addEventListener('click', () => {
    count ++;
    document.getElementById('counter').textContent = count;
});

let botonMenos = document.getElementById('menos');

botonMenos.addEventListener('click', () => {
    count --;
    document.getElementById('counter').textContent = count;
});

let headerInput = document.getElementById('header-input');
headerInput.addEventListener('keyup', (event) => {
    let textValue = event.target.value
    document.getElementById('border').textContent = textValue
})

let pArray =[];
pArray.forEach((person)=>{
    console.log(person)
})

let saveButton = document.getElementById('guardar');
let pObj = {};

    let firstnameInput = document.getElementById('firstname-input');
    let lastnameInput = document.getElementById('lastname-input');

saveButton.addEventListener('click', () => {
    
    pObj.fname = firstnameInput.value
    pObj.lstname = lastnameInput.value
    let conth3 = document.createElement("h3")
    let h3Text = document.createTextNode()
    document.getElementById('datos').textContent = pObj.fname
    pArray.push(pObj)
})
