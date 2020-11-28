class Life {
    constructor() {
        this.posX = 39;
        this.posY = 79;
        this.lifePosY = 86;
        this.width = 44;
        this.height = 286;
        this.lifeHeight = 270;
    }

    paint() {
        noStroke();

        fill("#CCCCCC");
        rect(this.posX, this.posY, this.width, this.height, 15);

        fill("#2FB2EB")
        rect(this.posX + 10, this.lifePosY, this.width - 20, this.lifeHeight, 15);
    }

    resetLife() {
        this.lifePosY = 86;
        this.lifeHeight = 270;
    }

    loseLife() {
        this.lifeHeight -= 90;
        this.lifePosY += 90;
    }
}