//criando/declarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio'){
     elemento.play();
    }else{
        console.log('Elemento inválido ou não encontrado')
    }
   
}
const ListaDeteclas = document.querySelectorAll('.tecla');
//Criando refeerência variável contador, atribuindo o valor inicial como "0"
//Ciando o cóigo de repetição WHILE e mudando para FOR
//enquanto o contador for menos que o comprimento da lista, tocará o som.
for(let contador = 0;contador < ListaDeteclas.length;contador++){
    const tecla = ListaDeteclas[contador];
    const efeito = classList[1]; //chama a clase do indice 1 do som
    const idAudio = `#som_${efeito}`; //junção com template string
    tecla.onclick = function() { //função anônima para tocaSom
        tocaSom(idAudio);
    }

    }
    tecla.onkeydown = function(evento){ //função para tecla pressionada
        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){ //função para tecla despressionada
        tecla.classList.remove('ativa');
    }
}
