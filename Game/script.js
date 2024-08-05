const hero = document.getElementById('hero');
const obstacles = document.querySelectorAll('.obstacle');
const blueBox = document.getElementById('blueBox');
const scoreDisplay = document.getElementById('score');
const healthDisplay = document.getElementById('health');
const game = document.getElementById('game');

let isJumping = false;
let jumpHeight = 0;
const gravity = 2; // Gravity effect
const jumpStrength = 100; // Jump strength (height in pixels)
let health = 100; // Initial health
let score = 0; // Initial score

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowUp' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let initialHeight = hero.offsetTop;

    function jumpUp() {
        if (jumpHeight < jumpStrength) {
            hero.style.top = `${hero.offsetTop - 5}px`;
            jumpHeight += 5;
            requestAnimationFrame(jumpUp);
        } else {
            requestAnimationFrame(fall);
        }
    }

    function fall() {
        if (hero.offsetTop < initialHeight) {
            hero.style.top = `${hero.offsetTop + gravity}px`;
            requestAnimationFrame(fall);
        } else {
            hero.style.top = `${initialHeight}px`;
            isJumping = false;
            jumpHeight = 0;
        }
    }

    jumpUp();
}

function detectCollision() {
    const heroRect = hero.getBoundingClientRect();
    const blueBoxRect = blueBox.getBoundingClientRect();

    // Check collision with obstacles
    obstacles.forEach(obstacle => {
        const obstacleRect = obstacle.getBoundingClientRect();

        if (heroRect.right > obstacleRect.left &&
            heroRect.left < obstacleRect.right &&
            heroRect.bottom > obstacleRect.top &&
            heroRect.top < obstacleRect.bottom) {
            obstacle.remove(); // Remove obstacle on collision
            loseHealth(10); // Reduce health by 10%
        }
    });

    // Check collision with blue box
    if (heroRect.right > blueBoxRect.left &&
        heroRect.left < blueBoxRect.right &&
        heroRect.bottom > blueBoxRect.top &&
        heroRect.top < blueBoxRect.bottom) {
        blueBox.remove(); // Remove blue box on collision
        increaseScore(10); // Increase score by 10%
        placeBlueBox(); // Place a new blue box
    }
}

function loseHealth(amount) {
    health -= amount;
    if (health <= 0) {
        health = 0;
        alert('Game Over!');
        resetGame();
    }
    healthDisplay.textContent = `Health: ${health}%`;
}

function increaseScore(percent) {
    score += Math.round(score * (percent / 100));
    scoreDisplay.textContent = `Score: ${score}`;
}

function placeBlueBox() {
    blueBox.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // Randomize blue box position
    blueBox.style.top = `${Math.random() * (window.innerHeight / 2 - 50) + 50}px`; // Randomize blue box position
}

function resetGame() {
    hero.style.top = 'calc(100% - 70px)'; // Adjust as needed for your game's height
    obstacles.forEach(obstacle => {
        obstacle.style.left = `${Math.random() * window.innerWidth}px`;
    });
    placeBlueBox(); // Place a new blue box
    health = 100; // Reset health
    score = 0; // Reset score
    healthDisplay.textContent = `Health: ${health}%`;
    scoreDisplay.textContent = `Score: ${score}`;
}

function moveObstacles() {
    obstacles.forEach(obstacle => {
        const currentLeft = parseFloat(obstacle.style.left);
        obstacle.style.left = `${currentLeft - 5}px`;

        if (currentLeft < -50) {
            obstacle.style.left = `${window.innerWidth}px`;
        }
    });
}

function gameLoop() {
    detectCollision();
    moveObstacles();
    requestAnimationFrame(gameLoop);
}

resetGame();
gameLoop();
