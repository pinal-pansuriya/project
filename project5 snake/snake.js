let inputDir = { x: 0, y: 0 }
const foodSound = new Audio('./snake bg/food_G1U6tlb.mp3')
const gameOverSound = new Audio('./snake bg/game-over-arcade-6435.mp3')
const moveSound = new Audio('./snake bg/pow-90398.mp3')
const musicSound = new Audio('./snake bg/8-bit-background-music-for-arcade-game-come-on-mario-164702.mp3')
let speed = 7

let score = 0
let lastTime = 0
let snakeArr = [
    { x: 10, y: 5 }
]
food = { x: 2, y: 10 }

//Game functions

function main(curtime) {
    window.requestAnimationFrame(main)
    if ((curtime - lastTime) / 1000 < 1 / speed) {
        return;
    }
    lastTime = curtime
    gameEngine()
}

function isCollide(snake) {
    //if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    //if you bump into wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
}

function gameEngine() {
    //part1 : Updating the sanke array & food
    if (isCollide(snakeArr)) {
        gameOverSound.play()
        musicSound.pause()
        inputDir = { x: 0, y: 0 }
        alert('Game Over.press any key to play again!')
        snakeArr = [{ x: 13, y: 15 }]
        musicSound.play()
        score = 0
    }
    //if you have eaten the food, increment the score and regenerate food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play()
        score += 1
        if (score > highScore) {
            highScoreval = score
            localStorage.setItem('highScore', JSON.stringify(highScoreval))
            highscoreBox.innerHTML = "highscore : " + highScoreval;
        }
        scoreBox.innerHTML = 'score:' + score
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })//add clone
        let a = 2
        let b = 17
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };

    }
    //moving the sanke
    musicSound.play()
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        // const element = array[i]
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y


    //part2 : Display the snake and food
    //display snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    // //display food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}

//main logic start hear
musicSound.play()
let highScore = localStorage.getItem('highScore')
if (highScore === null) {
    highScoreval = 0
    localStorage.setItem('highScore', JSON.stringify(highScoreval))
}
else {
    highScoreval = JSON.parse(highScore)
    highscoreBox.innerHTML = "highscore : " + highScore;
}
window.requestAnimationFrame(main)
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // start the game
    moveSound.play()
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;

    }
})