function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

const ListaDeteclas = document.querySelectorAll('.tecla');
ListaDeteclas[0].onclick=tocaSomPom;
let contador = 0;
while(contador < ListaDeteclas.length){
    ListaDeteclas[contador].onclick = tocaSomPom;
    contor=contador + 1;
    console.log(contador);
}

