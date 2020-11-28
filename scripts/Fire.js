class Fire {
    constructor(posX, posY, width, height) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.isOver = false;
        this.image = loadImage("../src/img/fuego.png");
        this.imageSmoke = loadImage("../src/img/humo.png");
    }

    paint() {
        if (!this.isOver) {
            image(this.image, this.posX, this.posY, this.width, this.height);
        } else {
            image(this.imageSmoke, 450, this.posY - 30);
        }
    }
}
