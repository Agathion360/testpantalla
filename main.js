const contenedor = document.querySelector(".container")


var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var altoPantalla = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;



function run(){
    contenedor.innerHTML=`
    <p>ancho de la pantalla <strong>${anchoPantalla}px</strong> </p>
    <p>alto de la pantalla <strong>${altoPantalla}px</strong> </p>

`
}


run()