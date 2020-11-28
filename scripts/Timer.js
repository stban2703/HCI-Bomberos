class Timer {
    constructor(posX, posY, fontFamily, fontSize, minutes, tens, unities) {
        this.posX = posX;
        this.posY = posY;
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.minutes = minutes;
        this.tens = tens;
        this.unities = unities;
        this.isRunning = false;
    }

    paint() {
        fill(255);
        textFont(this.fontFamily);
        textSize(this.fontSize);
        text(`Tiempo: ${this.minutes}:${this.tens}${this.unities}`, this.posX, this.posY);
    }

    run() {

        if(frameCount%30 == 0 && this.isRunning) {
            this.unities--;
        }

        if(this.unities < 0) {
            this.tens--;
            this.unities = 9;
        }

        if(this.tens < 0) {
            this.minutes--;
            this.tens = 5;
        }
    }

    resetTime(minutes, tens, unities) {
        this.minutes = minutes;
        this.tens = tens;
        this.unities = unities;
    };
}