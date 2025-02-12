function drawBackground(ctx, gameModel) {
    const background = gameModel.background;
    drawSpriteFrame(ctx, gameModel.images.background, background);
    const backgroundImageEndX = background.x + background.width;
    if(backgroundImageEndX < gameModel.game.width){
        drawSpriteFrame(ctx, gameModel.images.background, {...background, x: background.x + background.width - 1});
    }
}

function updateBackground(gameModel) {
    const background = gameModel.background;
    updateSprite(gameModel, background);
    background.x = background.x < -background.width
        ? 0
        : background.x + background.speedX;
}

function checkForCollision(gameModel) {
    const { player, enemy } = gameModel;
    const margins = { left: 10, top: 20, right: 30, bottom: 20 };

    const isAboveEnemy = bottomEdge(player, margins) < topEdge(enemy, margins);
    const isBelowEnemy = topEdge(player, margins) > bottomEdge(enemy, margins);
    const isToTheRightOfEnemy = leftEdge(player, margins) > rightEdge(enemy, margins);
    const isToTheLeftOfEnemy = rightEdge(player, margins) < leftEdge(enemy, margins);
    const noCollision = isAboveEnemy || isBelowEnemy || isToTheLeftOfEnemy || isToTheRightOfEnemy;    
    gameModel.game.isRunning = noCollision;
}

function leftEdge(obj, margins) {
    return obj.x + margins.left;
}

function rightEdge(obj, margins) {
    return obj.x + obj.width - margins.right;
}

function bottomEdge(obj, margins) {
    return obj.y + obj.height - margins.bottom;
}

function topEdge(obj, margins) {
    return obj.y + margins.top;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
};

function drawSpriteFrame(ctx, image, objectModel) {
    const { x, y, width, height, spriteIndex, state } = objectModel;
    const frameY = state * height;
    const frameX = spriteIndex * width;

    ctx.drawImage(image, frameX, frameY,
        width, height, x, y,
        width, height);
}


function updateSprite(gameModel, gameObject) {
    if (!gameObject.spriteSkipIndex) {
        gameObject.spriteSkipIndex = gameModel.game.spriteAnimationSkip;
    } else {
        gameObject.spriteSkipIndex--;
        return;
    }
    const spriteCount = gameObject.spriteCounts[gameObject.state];
    gameObject.spriteIndex = (gameObject.spriteIndex + 1) % spriteCount;
}
function drawEnemy(ctx, gameModel) {
    drawSpriteFrame(ctx, gameModel.images.enemy, gameModel.enemy);
}

function updateEnemy(gameModel) {
    const enemy = gameModel.enemy;
    updateSprite(gameModel, enemy);

    if (enemy.x < -enemy.width) {
        enemy.x = gameModel.game.width;
        enemy.speedX -= 0.5;
    } else {
        enemy.x = enemy.x + enemy.speedX;
    }
}

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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
}function handleKey(isKeyUp, key, gameModel){
    if(!key.startsWith('Arrow'))return;
    const keys = gameModel.keys;
    if(isKeyUp) keys.add(key);
    else keys.delete(key);
}function drawPlayer(ctx, gameModel) {
    drawSpriteFrame(ctx, gameModel.images.player, gameModel.player);
}

function updatePlayer(gameModel) {
    updateHorizontalMovement(gameModel);
    updateVerticalMovement(gameModel);
    updateSprite(gameModel, gameModel.player);
    setSpeed(gameModel);
}

function setSpeed(gameModel) {
    const keys = gameModel.keys;
    if (keys.has('ArrowRight')) gameModel.player.speedX = 5;
    else if (keys.has('ArrowLeft')) gameModel.player.speedX = -5;
    else if (keys.has('ArrowUp') && isOnGround(gameModel)) gameModel.player.speedY = -32;
    else {
        gameModel.player.speedX = 0;
    }
}

function updateHorizontalMovement(gameModel) {
    const newX = gameModel.player.x + gameModel.player.speedX;
    const maxX = gameModel.game.width - gameModel.player.width;
    gameModel.player.x = clamp(newX, 0, maxX);
}

function updateVerticalMovement(gameModel) {
    const player = gameModel.player;
    const newY = player.y + player.speedY;
    const maxY = gameModel.game.height - player.height;
    player.y = clamp(newY, 0, maxY);
    const playerIsOnGround = isOnGround(gameModel);
    player.speedY = playerIsOnGround ? 0 : player.speedY + player.downForce;
}

function isOnGround(gameModel) {
    return gameModel.player.y >= gameModel.game.height - gameModel.player.height;
}
