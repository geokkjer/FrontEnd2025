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

