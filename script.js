const sirene1 = document.querySelector('#sirene1');
const sirene3 = document.querySelector('#sirene3');

setInterval(() => {
    sirene1.classList.toggle('vermelha');
    sirene1.classList.toggle('azul');
    sirene3.classList.toggle('azul');
    sirene3.classList.toggle('vermelha');
}, 300);