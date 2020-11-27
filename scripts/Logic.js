class Logic {
    constructor() {
        this.currentScreen = 7;
        this.width = 1024;
        this.height = 700;

        this.screen01 = loadImage("../src/img/screen01.jpg");
        this.screengameplay = loadImage("../src/img/screengameplay.jpg");

        this.fireman = loadImage("../src/img/bomberos.png");
        this.water01 = new Water(390, 482, 20, 20, 45);
        this.water03 = new Water(140, 482, 20, 20, 25);
        this.regularFont = loadFont("../src/font/Montserrat-Regular.ttf");

        // Inputs
        this.inputsArray = [];
        this.input01 = createInput();

        // Buttons
        this.buttonsArray = [];
        this.button01 = createButton('Verificar');
    }

    paintInputs() {
        this.input01.position(150, 230);
        this.inputsArray = document.querySelectorAll('input');
        this.inputsArray.forEach(element => {
            element.setAttribute('placeholder', "Digita la respuesta");
            //element.setAttribute('placeholder', "Digita la respuesta");
            element.setAttribute('type', 'number');
        });

        switch (this.currentScreen) {
            case 0:
                this.inputsArray[0].style.display = "none";
                break;

            case 1:
                this.inputsArray[0].style.display = "none";
                break;

            case 2:
                this.inputsArray[0].style.display = "none";
                break;

            case 3:
                this.inputsArray[0].style.display = "none";
                break;

            case 4:
                this.inputsArray[0].style.display = "none";
                break;

            case 5:
                this.inputsArray[0].style.display = "inline-block";
                break;

            case 7:
                this.inputsArray[0].style.display = "inline-block";
                break;
        }
    }

    paintButtons() {
        this.button01.position(384, 230);
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

                // Text problem
                noStroke();
                fill(255);
                textSize(20);
                text('El bombero tiene una manguera inclinada en 45º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.79 segundos Calcule el valor de Vo (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);


                this.water01.paint();
                this.water01.calculateInititalV(12.7);

                /*stroke(255);
                line(0, 482, this.width, 482);*/
                break;

            case 7:
                image(this.screengameplay, 0, 0, this.width, this.height);
                image(this.fireman, -250, 425);

                // Text problem
                noStroke();
                fill(255);
                textSize(20);
                text('El bombero tiene una manguera inclinada en 25º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.4 segundos Calcule el valor de Vo. (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);

                this.water03.paint();
                this.water03.calculateInititalV(16.5);
                break;
        }

    }

    handleClick() {

    }
}