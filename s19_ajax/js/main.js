const imagen = document.getElementById("foto_gato")
const ajax_status = document.getElementById("ajax_status")

const actualizarGato = () => { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log('status', this.status)
        
        if(this.readyState == 4 && this.status == 200){
            const RespuestaAjax = xhttp.responseText
            console.log(RespuestaAjax)
            const respuestaJS = JSON.parse(RespuestaAjax)
            console.log(respuestaJS)

            const url = respuestaJS.file
            console.log(url)
            imagen.setAttribute('src', url)
            ajax_status.innerHTML = ""
        }
    };
    xhttp.open("GET", "https://picsum.photos", true);
    xhttp.send();
}
//
const btnActualizar = document.getElementById("btn_gato");
btnActualizar.addEventListener('click', ()=>{
    actualizarGato()
})