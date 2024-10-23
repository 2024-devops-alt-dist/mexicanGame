// Le jeu propose 3 niveaux de difficulté thématiques :

// ¡Chiquito! (facile)
// ¡Valiente! (intermédiaire)
// ¡Luchador! (difficile)

const start = document.getElementById('start')

function launch() {
    start.addEventListener("click", () => {
        timer();
        changeObject();
        start.style.display = 'none';
    })
}

class Object {
    constructor(name, src, points) {
        this.name = name;
        this.src = src;
        this.points = points;
    }
}

let 

const pinata = new Object("pinata", "img/pinata.png", 1);
const cactus = new Object("cactus", "img/cactus.png", -2);
const calavera = new Object("pinata", "img/calavera.png", 5);

const randomElements = [pinata, cactus, calavera];
let img = new Image(100, 100);
let imgObject = {};
// Variable pour stocker l'intervalle de lempset intervalId;

/**
 * Chose a random object in the array
 */
function randomImage(array) {
    const i = Math.floor((Math.random() * array.length));
    return array[i];
}

function randomCoord() {
    return ((Math.random() * 100) + "%");
}

function timer(){
    let sec = 30;
    let timer = setInterval(() => {
        document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

/**
 * generate object called every 3 seconds
 */
function changeObject() {
  // check if an interval has already been set up
  intervalId = setInterval(generateObject, 3000);
  }

/**
 * generate a new Object with a new position 
 */
function generateObject() {
    imgObject = randomImage(randomElements);
    img.src = imgObject.src;
    const container = document.getElementById("container");
    img.classList.add("img");
    container.appendChild(img);
    document.querySelector(".img").style.left = randomCoord();
    document.querySelector(".img").style.top = randomCoord();
}

// score
let score = 0;
let scoreBoard = document.getElementById("score-board");

img.addEventListener("click", function() {
    score += imgObject.points;
    if(scoreBoard) {
        scoreBoard.textContent = "Score: " + score;
    }
    container.removeChild(img);
})






