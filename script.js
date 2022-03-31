score = 0;
cross = true;

function start() {
    btn = document.getElementById("btn");
    dragon = document.getElementById("dragon");
    btn.classList.add("invisible");
    dragon.classList.add("dragon-move");
}

document.onclick = function () {
    dino = document.getElementById("dino");
    dino.classList.add("dino-jump");
    setTimeout(() => {
        dino.classList.remove("dino-jump");
    }, 800);
    setTimeout(() => {
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 56 + "px";
    }, 350);
}

document.onkeydown = function (e) {
    console.log("The key code is: " + e.keyCode);
    if (e.keyCode == 38) {
        dino = document.getElementById("dino");
        dino.classList.add("dino-jump");
        setTimeout(() => {
            dino.classList.remove("dino-jump");
        }, 800);
        setTimeout(() => {
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = dinoX + 48 + "px";
        }, 350);
    }
    if (e.keyCode == 39) {
        dino = document.getElementById("dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 72 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.getElementById("dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 72) + "px";
    }
}

setInterval(() => {
    dino = document.getElementById("dino");
    welcome = document.getElementById("welcome");
    dragon = document.getElementById("dragon");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    // console.log(offsetX, offsetY)

    if (offsetX < 72 && offsetY < 36) {
        welcome.innerHTML = "Game Over - Reload to Play Again"
        dragon.classList.remove('dragon-move')
        dino.classList.add('vanish')
    }
    else if (offsetX < 72 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
            if (aniDur > 2.5) {
                newDur = aniDur - 0.1;
                dragon.style.animationDuration = newDur + 's';
            }
            // console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scorecount.innerHTML = "Your Score: " + score
}