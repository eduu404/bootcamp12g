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

let pArray = [];
let saveButton = document.getElementById('guardar');



saveButton.addEventListener('click', () => {
    let pObj = {};
    let firstnameInput = document.getElementById('firstname-input');
    let lastnameInput = document.getElementById('lastname-input');
    pObj.fname = firstnameInput.value
    pObj.lstname = lastnameInput.value
    console.log(pObj.fname)
    console.log(pObj.lstname)
    pArray.push(pObj)
    console.log(pObj)
    event.preventDefault();
    printTable(pArray)
})

const printTable = dataToPrint =>{
    document.getElementById("person-table").innerHTML = "";
    dataToPrint.forEach((item, index) =>{
        let {name, lastname} = item
    let personRow = document.createElement("tr")
    let indexTd = document.createElement("td")
    let nameTd = document.createElement("td")
    nameTd.classList.add("table-dark")
    let lastnameTd = document.createElement("td")
    lastnameTd.classList.add("table-dark")

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
}