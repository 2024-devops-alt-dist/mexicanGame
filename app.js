// Le jeu propose 3 niveaux de difficulté thématiques :

// ¡Chiquito! (facile)
// ¡Valiente! (intermédiaire)
// ¡Luchador! (difficile)

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let score = 0;

ctx.fillStyle = "green";
ctx.fillRect(10, 100, 150, 100);

const pinata = new Image(100, 100);
pinata.src = "img/pinata.png";

const cactus = new Image(100, 100);
cactus.src = "img/cactus.png";

const calavera = new Image(100, 100);
calavera.src = "img/calavera.png";

const randomElements = [pinata, cactus, calavera];

function randomImage(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
    //clear canvas
    //draw image on canvas
}

function randomCoord() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    return [x, y];
}

console.log(randomImage(randomElements));


//score
// document.getElementById('score-board').addEventListener('click', function(){
//     score=)

//time

