/* para crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor,
una propiedad con sus inciales y un método que al ser invocado devuelva el string
"hola, soy {nombre} {apellidos}" los objetos deben estar dentro de una colección llamada mentorsArray */

let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

mentores.forEach(item =>{
    let [name, lastName] = item
    console.log(name, lastName)
    
    let mentorObject = {name, lastName}
    console.log (mentorObject)
})

