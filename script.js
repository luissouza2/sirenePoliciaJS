const sirene1 = document.querySelector('#sirene1');
const sirene2 = document.querySelector('#sirene2')

setInterval(() => {
    if(sirene1.classList.contains('vermelha')){
        sirene1.classList.toggle('hide');
    }

    console.log('trocando')
}, 1000);