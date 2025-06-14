const imagen = document.getElementById('foto_gato')
const idH5 = document.getElementById('id_gato')

const actualizarGato = () => { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log('status', this.status)
        
        if(this.readyState == 4 && this.status == 200){
            console.log('status', this.status)
            const RespuestaAjax = this.responseText
            console.log(RespuestaAjax);
            
            const respuestaJS = JSON.parse(RespuestaAjax);
            console.log(respuestaJS)
            const idGato = respuestaJS[0].id;
            const dir = respuestaJS[0].url;
            console.log(idGato)
            console.log(dir)
            idH5.setAttribute('value', idGato)
            imagen.setAttribute('src', dir)
        }
    };
    xhttp.open("GET", "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", true);
    xhttp.send();
}

const btnActualizar = document.getElementById("btn_gato");
btnActualizar.addEventListener('click', ()=>{
    actualizarGato()
})