// Le jeu propose 3 niveaux de difficulté thématiques :

// ¡Chiquito! (facile)
// ¡Valiente! (intermédiaire)
// ¡Luchador! (difficile)

class Object {
    constructor(name, src, points) {
        this.name = name;
        this.src = src;
        this.points = points;
    }
}

const pinata = new Object("pinata", "img/pinata.png", 1);
const cactus = new Object("cactus", "img/cactus.png", -1);
const calavera = new Object("pinata", "img/calavera.png", 1);


   



const randomElements = [pinata, cactus, calavera];

function randomImage(array) {
    const i = Math.floor((Math.random() * array.length));
    console.log(i)
    return array[i];

    
    //clear canvas
    //draw image on canvas
}

function randomCoord() {
    return ((Math.random() * 100) + "%");
}

let img = randomImage(randomElements);

const container = document.getElementById("container");
img.classList.add("img")
container.appendChild(img);
console.log(document.querySelector(".img").style.left = randomCoord());
document.querySelector(".img").style.top = randomCoord();






//score
// document.getElementById('score-board').addEventListener('click', function(){
//     if(clickedImg){

//         if('')
//     }
//     )}

//time

