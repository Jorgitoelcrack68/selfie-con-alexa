var API_reconocimiento=window.webkitSpeechRecognition
var nuevo_reconocimiento=new API_reconocimiento

function detexion_de_bos() {
    nuevo_reconocimiento.start()
}

nuevo_reconocimiento.onresult=function (resultados) {
    console.log(resultados)
    var lo_que_te_entendio=resultados.results[0][0].transcript
    console.log(lo_que_te_entendio)
    document.getElementById("lo_ke_dijiste").innerHTML=lo_que_te_entendio
    responder()
    if (lo_que_te_entendio=="Toma mi selfie") {
        Webcam.attach(espacio_camara)   
        setTimeout(function (){
            tomar_foto()
        },5000)
    }
}

function tomar_foto() {
    Webcam.snap(function (guardar_foto){
        document.getElementById("foto").innerHTML="<img src="+guardar_foto+">"
    })
}

function responder() {
    var guardar_API=window.speechSynthesis
    var text_area=document.getElementById("lo_ke_dijiste").value
    var diesto=new SpeechSynthesisUtterance(text_area)
    guardar_API.speak(diesto)
}
var espacio_camara=document.getElementById("imagen_camara")
Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:90
})