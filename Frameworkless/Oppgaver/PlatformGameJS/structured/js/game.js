function runGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const gameModel = initGameModel();
    canvas.width = gameModel.game.width;
    canvas.height = gameModel.game.height;
    window.addEventListener('keydown', e => handleKey(true, e.key, gameModel));
    window.addEventListener('keyup', e => handleKey(false, e.key, gameModel));

    drawPlayer(ctx, gameModel);
    const animate = () => {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        updatePlayer(gameModel);
        updateEnemy(gameModel);
        updateBackground(gameModel);
        checkForCollision(gameModel);
        drawBackground(ctx, gameModel);
        drawEnemy(ctx, gameModel);
        drawPlayer(ctx, gameModel);
        drawScore(ctx, gameModel.game.score);
        gameModel.game.score += 0.03;
        if (gameModel.game.isRunning) {
            requestAnimationFrame(animate);
        }
    };
    animate();
}

function drawScore(ctx, score){
    const text = 'Score: ' + Math.floor(score);
    ctx.font = "50px arial";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 7;
    ctx.lineWidth = 5;
    ctx.fillStyle = "white";
    ctx.strokeText(text, 550, 100);
    ctx.shadowBlur = 0;
    ctx.fillText(text, 550, 100);

}

function initGameModel() {
    const gameModel = {
        keys: new Set(),
        game: {
            width: 800,
            height: 720,
            score: 0,
            spriteAnimationSkip: 3,
            isRunning: true,
        },
        player: {
            x: 0,
            // y: 0,
            width: 200,
            height: 200,
            speedX: 0,
            speedY: 0,
            downForce: 1,
            spriteIndex: 0,
            state: 0,
            spriteCounts: [7, 9],
        },
        enemy: {
            x: 0,
            // y: 0,
            width: 80,
            height: 60,
            speedX: -1,
            speedY: 0,
            spriteIndex: 0,
            state: 0,
            spriteCounts: [6],
        },
        background: {
            x: 0,
            y: 0,
            width: 2400,
            height: 720,
            speedX: -2,
            speedY: 0,
            spriteIndex: 0,
            state: 0,
            spriteCounts: [1],
        },
        images: {
            player: getImage('player'),
            enemy: getImage('enemy'),
            background: getImage('background'),
        },
    };
    gameModel.player.y = gameModel.game.height - gameModel.player.height;
    gameModel.enemy.y = gameModel.game.height - gameModel.enemy.height;
    gameModel.enemy.x = gameModel.game.width;
    return gameModel;
}

function getImage(name) {
    return document.getElementById(name + 'Img');
}