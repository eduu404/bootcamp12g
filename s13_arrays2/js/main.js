/* eduu pzg

Arrays:

+ Agrupar únicamente los nombres de las bandas, sin repeticiones.

+ Agrupar las canciones de cada banda.

+ Saber cuál es la canción con más likes (nombre de la canción y nombre de la banda).

+ Saber cuál es la canción con más reproducciones (nombre de la canción y nombre de la banda).

*/

let songsData = [
    {
        name: "kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
            likes: 20000,
            reproductions: 8000,
        }

    },
    {
        name: "Smell like teen spirits",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
            likes: 25000,
            reproductions: 100000,
        }

    },
    {
        name: "So what",
        band: "Metallica",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 95000,
        }
    }
]

const getBands = ( arrayIterar) =>{
    let bandsList = [];
    arrayIterar.forEach( (item) => {
        console.log( item.band );
        bandsList.includes(item.band.toLowerCase()) ? null : bandsList.push( item.band.toLowerCase() )
    })
    return bandsList
}

//getBands( songsData );

const groupBands = ( arrayIterar ) => {
    let bandsList = getBands(arrayIterar)
    console.log(bandsList)
    let songsGroup = {}
    bandsList.forEach( band => {
        songsGroup[band] = []
    })
    console.log( songsGroup )
}

groupBands(songsData)

let songLabels = songsData.map(song => `La cancion ${ song.name } es de ${ song.band }`)
console.log(songLabels)