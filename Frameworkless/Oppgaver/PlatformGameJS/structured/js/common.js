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
