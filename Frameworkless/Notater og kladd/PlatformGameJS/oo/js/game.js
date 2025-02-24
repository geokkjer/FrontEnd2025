class Game {
    constructor() {
        this.keys = new Set();
        const canvas = document.getElementById('gameCanvas');
        this.ctx = canvas.getContext('2d');
        this.width = 800;
        this.height = 720;
        this.isRunning = true;
        this.score = 0;
        this.player = new Player(this.width, this.height, this.keys);
        this.enemy = new Enemy(this.width, this.height);
        this.background = new Background(this.width);
        canvas.width = this.width;
        canvas.height = this.height;
        const keyDownHandler = new KeyHandler(false, this.keys);
        const keyUpHandler = new KeyHandler(true, this.keys);
        window.addEventListener('keydown', keyDownHandler.handleKey.bind(keyDownHandler));
        window.addEventListener('keyup', keyUpHandler.handleKey.bind(keyUpHandler));
    }

    getImage(name) {
        return document.getElementById(name + 'Img');
    }

    run() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.background.update();
        this.background.draw();
        this.player.update();
        this.player.draw();
        this.enemy.update();
        this.enemy.draw();
        this.drawScore();
        this.checkForCollision();
        this.score += 0.03;
        if (this.isRunning) {
            requestAnimationFrame(this.run.bind(this));
        }
    }

    drawScore() {
        const ctx = this.ctx;
        const text = 'Score: ' + Math.floor(this.score);
        ctx.font = "50px arial";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 7;
        ctx.lineWidth = 5;
        ctx.fillStyle = "white";
        ctx.strokeText(text, 550, 100);
        ctx.shadowBlur = 0;
        ctx.fillText(text, 550, 100);
    }

    checkForCollision() {
        const margins = { left: 10, top: 20, right: 30, bottom: 20 };
        const isAboveEnemy = this.bottomEdge(this.player, margins) < this.topEdge(this.enemy, margins);
        const isBelowEnemy = this.topEdge(this.player, margins) > this.bottomEdge(this.enemy, margins);
        const isToTheRightOfEnemy = this.leftEdge(this.player, margins) > this.rightEdge(this.enemy, margins);
        const isToTheLeftOfEnemy = this.rightEdge(this.player, margins) < this.leftEdge(this.enemy, margins);
        const noCollision = isAboveEnemy || isBelowEnemy || isToTheLeftOfEnemy || isToTheRightOfEnemy;
        this.isRunning = noCollision;
    }

    leftEdge(obj, margins) {
        return obj.x + margins.left;
    }

    rightEdge(obj, margins) {
        return obj.x + obj.width - margins.right;
    }

    bottomEdge(obj, margins) {
        return obj.y + obj.height - margins.bottom;
    }

    topEdge(obj, margins) {
        return obj.y + margins.top;
    }
}