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


let pObj = {};
let body = document.querySelector('body');
let pArray2 = [
    {
        name: "eduar",
        lastname: "perezz"
    },
    {
        name: "sof",
        lastname: "val"
    }
]

let saveButton = document.getElementById('guardar');

    let firstnameInput = document.getElementById('firstname-input');
    let lastnameInput = document.getElementById('lastname-input');

saveButton.addEventListener('click', () => {
    
    pObj.fname = firstnameInput.value
    pObj.lstname = lastnameInput.value
    document.getElementById('datos').textContent = pObj.fname
    console.log(pObj.fname)
    console.log(pObj.lstname)
    pArray.push(pObj)
    console.log(pObj)
    event.preventDefault();
    let textRegister = "Nombre completo: " + pObj.fname + " " + pObj.lstname
    document.getElementById('datos').textContent = textRegister

    let personRow = document.createElement("tr")
    let indexTd = document.createElement("td")
    let nameTd = document.createElement("td")
    nameTd.classList.add("table", "table-striped", "table-dark")
    let lastnameTd = document.createElement("td")
    lastnameTd.classList.add("table", "table-striped", "table-dark")

    let nameText = document.createTextNode (pObj.fname)
    let lastnameText = document.createTextNode (pObj.lstname)
    //let indexText = document.createTextNode (index + 1)

    //indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    lastnameTd.appendChild(lastnameText)

    personRow.appendChild(indexTd)
    personRow.appendChild(nameTd)
    personRow.appendChild(lastnameTd)

    document.getElementById("person-table").appendChild(personRow)
})

/*pArray.forEach((person, index)=>{
    body.appendChild(parrafo);
    let parrafo = document.createElement('p');
    parrafo.appendChild(textoParrafo);
    let textoParrafo = document.createTextNode('Este es un párrafo')

    let {fname, lstname} = person
    let personRow = document.createElement("tr")
    let indexTd = document.createElement("td")
    let nameTd = document.createElement("td")
    let lastnameTd = document.createElement("td")

    let nameText = document.createTextNode (fname)
    let lastnameText = document.createTextNode (lstname)
    let indexText = document.createTextNode (index + 1)

    indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    lastnameTd.appendChild(lastnameText)

    personRow.appendChild(indexTd)
    personRow.appendChild(nameTd)
    personRow.appendChild(lastnameTd)

    document.getElementById("person-table").appendChild(personRow)
})*/

pArray2.forEach((person, index)=>{
    /*body.appendChild(parrafo);
    let parrafo = document.createElement('p');
    parrafo.appendChild(textoParrafo);
    let textoParrafo = document.createTextNode('Este es un párrafo')*/

    let {name, lastname} = person
    let personRow = document.createElement("tr")
    let indexTd = document.createElement("td")
    let nameTd = document.createElement("td")
    let lastnameTd = document.createElement("td")

    let nameText = document.createTextNode (name)
    let lastnameText = document.createTextNode (lastname)
    let indexText = document.createTextNode (index + 1)

    indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    lastnameTd.appendChild(lastnameText)

    personRow.appendChild(indexTd)
    personRow.appendChild(nameTd)
    personRow.appendChild(lastnameTd)

    document.getElementById("person-table").appendChild(personRow)
})

let pArray = [];
console.log(pObj)

//let conth3 = document.createElement("h3")
//let h3Text = document.createTextNode()