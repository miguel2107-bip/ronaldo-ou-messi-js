let noButton = document.getElementById('no');
let yesButton = document.getElementById('yes');
let imagem = document.getElementById('imagem');
let box = document.querySelector('.box');

noButton.addEventListener('mouseover', function () {

    let boxWidth = box.clientWidth - noButton.offsetWidth;
    let boxHeight = box.clientHeight - noButton.offsetHeight;

    let randomX = Math.random() * boxWidth;
    let randomY = Math.random() * boxHeight;

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

});

yesButton.addEventListener('click', function () {
    imagem.style.display = "block";
});