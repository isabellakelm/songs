function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
document.querySelector('.tecla_pom').onclick = tocaSom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

const listaDeteclas = document.querySelectorAll('.tecla');
listaDeteclas[0].onclick=tocaSom;
let contador = 0;
while(contador < ListaDeteclas.length){
    const efeito = listaDeteclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeteclas[contador].onclick = function() {
        tocaSom(idAudio)
    contor=contador + 1;
    console.log(contador);
}

