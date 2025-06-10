const imagen = document.getElementById("foto_gato")
const ajax_status = document.getElementById("ajax_status")

const actualizarGato = () => { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
        if(this.readyState ==3){
            ajax_status.innerHTML="Cargando.."
        }
        if(this.readyState == 4 && this.status == 200){
            const url = JSON.parse(xhttp.responseText).file
            imagen.setAttribute("src", url)
            ajax_status.innerHTML = ""
        }
        if(this.readyState == 4 && this.status == 404){
            imagen.setAttribute("src", url)
        }
    }
    xhttp.open("GET", "https://aws.random.cat/meow", true);
    xhttp.send();
}

const btnActualizar = document.getElementById("btn_gato");