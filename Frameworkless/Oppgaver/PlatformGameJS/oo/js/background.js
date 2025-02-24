class Background extends Sprite {
    constructor(gameWidth) {
        super('background', 2400, 720, [1], null);
        this.speedX = -2;
        this.gameWidth = gameWidth;
    }

    update() {
        super.update();
        this.x = this.x < -this.width
            ? 0
            : this.x + this.speedX;
    }

    draw() {
        super.draw();
        const backgroundImageEndX = this.x + this.width;
        if (backgroundImageEndX < this.gameWidth) {
            super.draw(this.width - 1);
        }
    }
}