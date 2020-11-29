class Score {
    constructor(posX, posY, fontFamily, fontSize, value) {
        this.posX = posX;
        this.posY = posY;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.value = value;
    }

    paint() {
        fill(255);
        textFont(this.fontFamily);
        textSize(this.fontSize);
        text(`Puntaje: ${this.value}`, this.posX, this.posY);
    }

    addScore(points) {
        if (!currentUser.parabolicScore) {
            this.value += points;
        }
    }
}