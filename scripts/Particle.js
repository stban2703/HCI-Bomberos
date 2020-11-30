class Particle {
    constructor(posX, posY, width, height) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    paint() {
        fill("#2FB2EB");
        ellipse(this.posX, this.posY, this.width, this.height);
    }
}