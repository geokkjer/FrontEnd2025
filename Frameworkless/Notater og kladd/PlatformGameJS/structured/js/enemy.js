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

