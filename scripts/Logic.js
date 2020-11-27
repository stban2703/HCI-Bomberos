class Logic {
    constructor() {
        this.currentScreen = 5;
        this.width = 1024;
        this.height = 700;
        this.screen01 = loadImage("../src/img/screen01.jpg");
        this.screengameplay = loadImage("../src/img/screengameplay.jpg");
        this.fireman = loadImage("../src/img/bomberos.png");
        this.water = new Water(390, 482, 20, 20);
    } 

    paintScreen() {

        switch (this.currentScreen) {
            case 0:
                image(this.screen01, 0, 0, 1024, 700);
                break;
            case 1:

                break;
            case 2:
                break;
            case 3:
                break;
            case 5:
                image(this.screengameplay, 0, 0, this.width, this.height);
                image(this.fireman, 0, 425);
                this.water.paint();
                this.water.calculateInititalV(12.7);
                stroke(255);
                line(0, 482, this.width, 482);
                //this.water.movement(5, 10, 5, 30);
                break;
        }

    }

    handleClick() {

    }
}