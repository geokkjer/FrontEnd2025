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

