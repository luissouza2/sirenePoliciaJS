const sirene1 = document.querySelector('#sirene1');
const sirene2 = document.querySelector('#sirene2');
const sirene3 = document.querySelector('#sirene3');
const carro = document.querySelector('.carro');
var clicou = false;

function ligaSirene(){
    sirene1.classList.toggle('vermelha');
    sirene1.classList.toggle('azul');
    sirene3.classList.toggle('azul');
    sirene3.classList.toggle('vermelha');
    clicou = true;
}

document.addEventListener('click', (e) => {
    const elementoClicado = e.target;
    if(elementoClicado.classList.contains('btn-ligar')){
        if(!clicou){
            const ligarInterval = setInterval(ligaSirene, 150);
        }
    }else if(elementoClicado.classList.contains('btn-desligar')){
        location.reload();
    }
});