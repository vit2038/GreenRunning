
const imagens = [
    "img/banner/2.png",
    "img/banner/3.png",
    "img/banner/4.png",
    "img/banner/5.png",
];


const bannerImg = document.getElementById("bannerImg");


let index = 0;


function trocarImagem() {
    index++;
    if (index >= imagens.length) {
        index = 0; 
    }
    bannerImg.src = imagens[index];
}

setInterval(trocarImagem, 2000);