/* 1.- Promedio por mentor
2.- Muestra calificación HTML
3.- Muestra calificación CSS
4.- Muestra calificación JS */

let dataArray = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]

mentores.forEach(item =>{
    let [name, lastName] = item
    console.log(name, lastName)
    
    let mentorObject = {name, lastName}
    console.log (mentorObject)
})

