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

const pArray = [];
let saveButton = document.getElementById('guardar');

saveButton.addEventListener('click', () => {
    let pObj = {};
    let firstnameInput = document.getElementById('firstname-input');
    let lastnameInput = document.getElementById('lastname-input');
    pObj.name = firstnameInput.value
    pObj.lastname = lastnameInput.value
    console.log(pObj.name)
    console.log(pObj.lastname)
    pArray.push(pObj)
    console.log(pObj)
    console.log(pArray)
    //event.preventDefault();
    printTable(pArray)
})

const deletePerson = event =>{
    let personIndex = event.target.dataset.personIndex
    pArray.splice(personIndex,1)
    printTable(pArray)
}

const printTable = dataToPrint =>{
    document.getElementById("person-table").innerHTML = "";
    dataToPrint.forEach((item, index) =>{
    let {name, lastname} = item
    let personRow = document.createElement("tr")
    let indexTd = document.createElement("td")
    indexTd.classList.add("tdNum")
    let nameTd = document.createElement("td")
    nameTd.classList.add("table-dark", "table-striped", "tdNombres")
    let lastnameTd = document.createElement("td")
    lastnameTd.classList.add("table-dark", "table-striped", "tdNombres")
    let buttonTd = document.createElement("td")
    buttonTd.classList.add("table-dark", "table-striped", "tdNombres")

    let nameText = document.createTextNode (name)
    let lastnameText = document.createTextNode (lastname)
    let indexText = document.createTextNode (index + 1)

    let delButton = document.createElement("button")
    delButton.classList.add("btn","del")
    delButton.dataset.personIndex = index

    delButton.addEventListener("click", deletePerson)

    let buttonText = document.createTextNode("Borrar")
    delButton.appendChild(buttonText)
    buttonTd.appendChild(delButton)

    indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    lastnameTd.appendChild(lastnameText)
    //buttonTd.appendChild(buttonText)

    personRow.appendChild(indexTd)
    personRow.appendChild(nameTd)
    personRow.appendChild(lastnameTd)
    personRow.appendChild(buttonTd)

    document.getElementById("person-table").appendChild(personRow)
    })
}