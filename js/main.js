"use strict";

function subirComentario(){
    // Crea una fecha al gusto
    let date = new Date()
    let fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " at " + date.getHours() + ":"
    if(date.getMinutes() < 10){
        fecha += "0" + date.getMinutes()
    }else{
        fecha += date.getMinutes()
    }

    let usuario = document.getElementById("usuario").value.trim().fontcolor("grey")
    let mensaje = document.getElementById("mensaje").value.trim().fontcolor("grey")
    if(usuario !== "" && mensaje !== ""){
        document.getElementById("mensajes").innerHTML += "<p>" + mensaje + " posted by <strong>" + usuario + "</strong> on " + fecha + "</p>"
    }
    //Vacia los campos de texto mensaje y usuario
    document.getElementById("usuario").value = ""
    document.getElementById("mensaje").value = ""
}

//Hace que no se pueda crear un salto de linea en el texarea del mensaje
document.getElementById('mensaje').addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        e.preventDefault();
    }
})

//Hace que se ejecute la funcion subirComentario cuando se pulsa del boton subir comentario
document.getElementById("subir").addEventListener("click", subirComentario)

//Hace que se limpie el foro cuando se pulsa del boton limpiar foro
document.getElementById("limpiar").addEventListener("click", () => {
    document.getElementById("mensajes").innerHTML = "";
})

