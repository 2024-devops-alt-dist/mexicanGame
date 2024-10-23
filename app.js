// Le jeu propose 3 niveaux de difficulté thématiques :

// ¡Chiquito! (facile)
// ¡Valiente! (intermédiaire)
// ¡Luchador! (difficile)

let intervalId;
const start = document.getElementById('start')
const container = document.getElementById("container");


class Object {
    constructor(name, src, points) {
        this.name = name;
        this.src = src;
        this.points = points;
    }
}

class Level {
    constructor(time, objectsNumber, delay) {
        this.time = time;
        this.objectsNumber = objectsNumber;
        this.delay = delay;

    }
}

const pinata = new Object("pinata", "img/pinata.png", 1);
const cactus = new Object("cactus", "img/cactus.png", -2);
const calavera = new Object("pinata", "img/calavera.png", 5);


const randomElements = [pinata, cactus, calavera];
let img = new Image(100, 100);
let arrayObject = [];
let difficulty = {time: 120, objectsNumber: 1, delay: 2000};

// score
let score = 0;
let scoreBoard = document.getElementById("score-board");

// function getDifficulty(time, objectsNumber, delay) {
//     difficulty = new Level(time, objectsNumber, delay);
// }

function launch() {
    start.addEventListener("click", () => {
        timer(difficulty.time);
        changeObject(difficulty.delay);
        start.style.display = 'none';
    })
}

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

function timer(time){
    let sec = time;
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
  if (!intervalId) {
    intervalId = setInterval(generateObject, 2000);
  }
}
/**
 * generate a new Object with a new position 
 */
function generateObject() {
    imgObject = randomImage(randomElements);
    img.src = imgObject.src;
    img.classList.add("img");
    container.appendChild(img);
    document.querySelector(".img").style.left = randomCoord();
    document.querySelector(".img").style.top = randomCoord();
}

img.addEventListener("click", function() {
    score += imgObject.points;
    if(scoreBoard) {
        scoreBoard.textContent = "Score: " + score;
    }
    container.removeChild(img);
})







