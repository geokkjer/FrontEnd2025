function drawPlayer(ctx, gameModel) {
    drawSpriteFrame(ctx, gameModel.images.player, gameModel.player);
}

function updatePlayer(gameModel) {
    updateHorizontalMovement(gameModel);
    updateVerticalMovement(gameModel);
    updateSprite(gameModel, gameModel.player);
    updateSpeed(gameModel);
}

function updateSpeed(gameModel) {
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

