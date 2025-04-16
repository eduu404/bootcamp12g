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