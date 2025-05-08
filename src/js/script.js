
// ARRAY DE IMAGENS
let imagens = [
    'src/assets/montanhas.jpg',
    'src/assets/praia.jpg',
    'src/assets/universo.jpg',
];

let i = 0
let tempo = 3000

// criando função slideshow
function slideShow() {
    document.getElementById('image').src=imegens[i];
    i++;
    if(i == imagens.length){
        i = 0;
        setTimeout('slideShow()', tempo)
    }
}