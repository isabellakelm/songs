function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;

const ListaDeteclas = document.querySelectorAll('.tecla');
ListaDeteclas[0].onclick=tocaSomPom;
let contador = 0;
while(contador < 9){
    ListaDeteclas[contador].onclick = tocaSomPom;
    contor=contador + 1;
    console.log(contador);
}

