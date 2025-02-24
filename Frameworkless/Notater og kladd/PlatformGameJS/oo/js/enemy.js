class Enemy extends Sprite {
    constructor(gameWidth, gameHeight) {
        super('enemy', 80, 60, [6], 3);
        this.speedX = -1;
        this.gameWidth = gameWidth;
        this.y = gameHeight - this.height;
        this.x = gameWidth;
    }

    update() {
        super.update();
        if (this.x < -this.width) {
            this.x = this.gameWidth;
            this.speedX -= 0.5;
        } else {
            this.x += this.speedX;
        }
    }
}