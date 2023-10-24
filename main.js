function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

const listaDeteclas = document.querySelectorAll('.tecla');
listaDeteclas[0].onclick=tocaSomPom;
let contador = 0;
while(contador < ListaDeteclas.length){
    listaDeteclas[contador].onclick = tocaSomPom;
    contor=contador + 1;
    console.log(contador);
}

