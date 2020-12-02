class Particle {
    constructor(posX, posY, width, height) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    paint() {
        fill("#2FB2EB");
        ellipse(this.posX + .4, this.posY + .4, this.width, this.height);
        ellipse(this.posX + .2, this.posY + .2, this.width, this.height);
        ellipse(this.posX, this.posY, this.width, this.height);
    }
}