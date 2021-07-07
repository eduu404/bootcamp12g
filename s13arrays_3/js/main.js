let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },{
        name: "Stairway to heaven",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
          likes: 20000,
          reproductions: 8000,
        }
      },{
        name: "Black dog",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
          likes: 20000,
          reproductions: 8000,
        }
      },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    },{
        name: "Heart-shaped box",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
          likes: 24000,
          reproductions: 120000,
        }
      },{
        name: "Lithium",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
          likes: 26000,
          reproductions: 130000,
        }
      },{
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      },{
        name: "Nothing else matters",
        band: "Metallica",
        releaseYear: "1992",
        statistics: {
          likes: 12000,
          reproductions: 95000,
        },{
      name: "Whiskey in the jar",
      band: "Metallica",
      releaseYear: "1998",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }
  ]
  
  /*agrupar únicamente los nombres de las bandas, sin repeticiones*/
  
  function getName(arreglo){
    const nameBand = []
    arreglo.forEach(element => {
        if(!nameBand.includes(element.band)){
        nameBand.push(element.band)
        }
    });
    return nameBand
}
    let bandas = nameBand
    alert(bandas)

  /*
    Agrupar las canciones de cada banda
  */
  
    function orderSongs(arreglo){
        const nameBand = []
        arreglo.forEach(element => {
            if(!nameBand.includes(element.band)){
            nameBand.push(element.band)
            }
        });
        return nameBand
    }

  /*
    saber cuál es la canción con más likes
    ( nombre de la canción y nombre de la banda)
    */
  
  /*saber cuál es la canción con más reproducciones
  ( nombre de la canción y nombre de la banda)
  */

