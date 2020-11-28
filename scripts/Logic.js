class Logic {
    constructor() {
        this.currentScreen = 5;
        //this.width = 1200;
        this.width = 1024;
        this.height = 700;

        this.screen01 = loadImage("../src/img/screen01.jpg");
        this.screengameplay = loadImage("../src/img/screengameplay.jpg");

        this.fireman = loadImage("../src/img/bomberos.png");
        this.water01 = new Water(390, 482, 20, 20, 45);
        this.water02 = new Water(390, 482, 20, 20, 0);
        this.water03 = new Water(140, 482, 20, 20, 25);
        this.water04 = new Water(140, 482, 20, 20, 0);
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
        this.buttonsArray = document.querySelectorAll('button');
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
                // Ejercicio 1
                image(this.screengameplay, 0, 0, this.width, this.height);
                image(this.fireman, 0, 425);

                // Text problem
                noStroke();
                fill(255);
                textSize(20);
                text('El bombero tiene una manguera inclinada en 45º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.79 segundos Calcule el valor de Vo (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);


                this.water01.paint();
                this.water01.calculateInititalV(12.7);

                stroke(255);
                line(0, 482, this.width, 482);

                //console.log((this.water01.posY - this.water01.initialY) / 100)
                break;

            case 6:
                // Ejercicio 2
                image(this.screengameplay, 0, 0, this.width, this.height);
                image(this.fireman, 0, 425);

                // Text problem
                noStroke();
                fill(255);
                textSize(20);
                text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 8m/s  y una Vy de 9m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

                this.water02.paint();
                this.water02.calculateAngle(48, 9, 10);
                break;

            case 7:
                // Ejercicio 3
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

            case 8:
                // Ejercicio 4
                image(this.screengameplay, 0, 0, this.width, this.height);
                image(this.fireman, -250, 425);

                // Text problem
                noStroke();
                fill(255);
                textSize(20);
                text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 8m/s  y una Vy de 9m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

                this.water04.paint();
                this.water04.calculateAngle(50, 10, 12);
                break;
        }

    }

    handleClick() {
        // Check dX and dY
        /*console.log("X: " + (this.water04.posX - this.water04.initialX) / 100)
        console.log("Y: " + (this.water04.posY - this.water04.initialY) / 100)*/
        switch (this.currentScreen) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 5:
                // Ejercicio 1
                console.log(this.inputsArray[0].value)
                let correctAnswer = 12;
                let userAnswer = this.inputsArray[0].value;

                this.buttonsArray[0].addEventListener('click', function() {
                    if(userAnswer >= 12 && userAnswer < 13) {
                        
                    }
                });

                break;

            case 6:
                // Ejercicio 2

                break;

            case 7:
                // Ejercicio 3

                break;

            case 8:
                // Ejercicio 4

                break;
        }


    }
}