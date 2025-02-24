class Player extends Sprite {
    constructor(gameWidth, gameHeight, keys) {
        super('player', 200, 200, [7, 9], 3);
        this.downForce = 1;
        this.y = gameHeight - this.height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.keys = keys;
    }

    update() {
        super.update();
        this.updateHorizontalMovement();
        this.updateVerticalMovement();
        this.updateSpeed();
    }

    updateHorizontalMovement() {
        const newX = this.x + this.speedX;
        const maxX = this.gameWidth - this.width;
        this.x = clamp(newX, 0, maxX);
    }

    updateVerticalMovement() {
        const newY = this.y + this.speedY;
        const maxY = this.gameHeight - this.height;
        this.y = clamp(newY, 0, maxY);
        this.speedY = this.isOnGround() ? 0 : this.speedY + this.downForce;
    }

    updateSpeed() {
        const keys = this.keys;
        if (keys.has('ArrowRight')) this.speedX = 5;
        else if (keys.has('ArrowLeft')) this.speedX = -5;
        else if (keys.has('ArrowUp') && this.isOnGround()) this.speedY = -32;
        else this.speedX = 0;
    }

    isOnGround() {
        return this.y >= this.gameHeight - this.height;
    } 
}