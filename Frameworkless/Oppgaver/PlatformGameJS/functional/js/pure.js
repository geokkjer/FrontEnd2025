const drawAction = (image, obj, deltaX, meta) => {
    const x = obj.x + (deltaX ?? 0);
    const y = obj.y;
    if (meta === undefined) return { image, x, y };
    const width = meta.width;
    const height = meta.height;
    const frameX = obj.spriteIndex * width;
    const frameY = (obj.mode ?? 0) * height;
    return { image, x, y, frameX, frameY, width, height };
}
const getDrawActions = params => {
    const meta = params.meta;
    const back = params.state.background;
    return [
        drawAction('background', back),
        drawAction('background', back, meta.background.width - 1),
        drawAction('enemy', params.state.enemy, 0, meta.enemy),
        drawAction('player', params.state.player, 0, meta.player),
        { text: 'Score: ' + Math.floor(params.state.score) },
    ];
};
const updateBackground = params => {
    const background = params.state.background;
    const value = (background.x + background.speedX) % params.meta.background.width;
    return R.assocPath(['state', 'background', 'x'], value, params);
}
const updatePlayerHorizontalMovement = params => {
    const player = params.state.player;
    const newXdraft = player.x + player.speedX;
    const maxX = params.meta.gameWidth - params.meta.player.spriteWidth;
    const newX = R.clamp(0, maxX, newXdraft);
    return R.assocPath(['state', 'player', 'x'], newX, params);
};
const updateEnemyHorizontalMovement = params => {
    const meta = params.meta;
    const enemy = params.state.enemy;
    const newX = enemy.x + enemy.speedX;
    const hasLeftScreen = newX < -meta.enemy.width;
    const x = hasLeftScreen ? meta.game.width : newX;
    const newState = R.assocPath(['state', 'enemy', 'x'], x, params);
    if (!hasLeftScreen) return newState;
    return R.assocPath(['state', 'enemy', 'speedX'], enemy.speedX - 0.5, newState);
};
const isPlayerOnGround = params => params.state.player.y >= params.meta.player.y;
const updatePlayerVerticalMovement = params => {
    const player = params.state.player;
    const newYdraft = player.y + player.speedY;
    const meta = params.meta;
    const maxY = meta.player.y;
    const newY = R.clamp(0, maxY, newYdraft);
    const playerIsOnGround = isPlayerOnGround(params);
    const newSpeedY = playerIsOnGround && player.speedY >= 0 ? 0 : player.speedY + meta.game.downforce;
    // if (newSpeedY != player.speedY) console.log(newSpeedY, player.speedY);
    const tmp = R.assocPath(['state', 'player', 'speedY'], newSpeedY, params);
    return R.assocPath(['state', 'player', 'y'], newY, tmp);
};
const updatePlayerSpeedX = params =>
    R.assocPath(['state', 'player', 'speedX'], params.keys.right ? 5 : params.keys.left ? -5 : 0, params);
const updatePlayerSpeedY = params =>
    !(params.keys.up && isPlayerOnGround(params)) ? params : R.assocPath(['state', 'player', 'speedY'], -32, params);
const updateSprite = R.curry((objName, params) => {
    const state = params.state[objName];
    const meta = params.meta[objName];
    if (state.spriteSkipIndex == 3) {
        const spriteIndex = (state.spriteIndex + 1) % meta.spriteCounts[state.mode];
        const tmp = R.assocPath(['state', objName, 'spriteIndex'], spriteIndex, params);
        return R.assocPath(['state', objName, 'spriteSkipIndex'], 0, tmp);
    } else {
        return R.assocPath(['state', objName, 'spriteSkipIndex'], state.spriteSkipIndex + 1, params);
    }
});
const getEdge = (direction, entity, params) => {
    const obj = params.state[entity];
    const meta = params.meta[entity];
    const margins = { left: 10, top: 20, right: 30, bottom: 20 };
    return direction == 'left' ? obj.x + margins.left :
        direction == 'right' ? obj.x + meta.width - margins.right :
            direction == 'bottom' ? obj.y + meta.height - margins.bottom :
        /* direction == 'top' ? */ obj.y + margins.top;
}
const checkForCollision = params => {
    const isAboveEnemy = getEdge('bottom', 'player', params) < getEdge('top', 'enemy', params);
    const isBelowEnemy = getEdge('top', 'player', params) > getEdge('bottom', 'enemy', params);
    const isToTheRightOfEnemy = getEdge('left', 'player', params) > getEdge('right', 'enemy', params);
    const isToTheLeftOfEnemy = getEdge('right', 'player', params) < getEdge('left', 'enemy', params);
    // console.log(isAboveEnemy, isBelowEnemy, isToTheLeftOfEnemy, isToTheRightOfEnemy);
    const noCollision = isAboveEnemy || isBelowEnemy || isToTheLeftOfEnemy || isToTheRightOfEnemy;
    return R.assocPath(['state', 'isRunning'], noCollision, params);
};
const updateScore = params => R.assocPath(['state', 'score'], params.state.score + 0.03, params);
const update = R.compose(
    updateBackground,
    updatePlayerHorizontalMovement, updatePlayerVerticalMovement,
    updatePlayerSpeedX, updatePlayerSpeedY,
    updateSprite('player'), updateSprite('enemy'),
    updateEnemyHorizontalMovement,
    updateScore,
    checkForCollision,
);
