let logic;
let currentScreen = 5;

let width = 1024;
let height = 700;

// Ingame
let screen01;
let screengameplay;
let fail;
let win;
let life;

// Images and fonts
let fireman;
let water01;
let water02;
let water03;
let water04;
let regularFont;

// Inputs
let inputsArray;
let input01;

// Buttons
let buttonsArray;
let button01;

function preload() {
    screen01 = loadImage("../src/img/screen01.jpg");
    screengameplay = loadImage("../src/img/screengameplay.jpg");
    fireman = loadImage("../src/img/bomberos.png");
    regularFont = loadFont("../src/font/Montserrat-Regular.ttf");
}

function setup() {
    currentScreen = 5;
    win = false;
    fail = false;
    width = 1024;
    height = 700;

    createCanvas(width, height);

    life = new Life();

    water01 = new Water(390, 482, 30, 30, 45);
    water02 = new Water(390, 482, 30, 30, 0);
    water03 = new Water(140, 482, 30, 30, 25);
    water04 = new Water(140, 482, 30, 30, 0);

    fire = new Fire(755, 195, 171, 140);

    // Inputs
    inputsArray = [];
    input01 = createInput();

    input01.position(150, 230);
    inputsArray = document.querySelectorAll('input');
    inputsArray.forEach(element => {
        element.setAttribute('placeholder', "Digita la respuesta");
        //element.setAttribute('placeholder', "Digita la respuesta");
        element.setAttribute('type', 'number');
    });


    // Buttons
    buttonsArray = [];
    button01 = createButton('Verificar');

    button01.position(384, 230);
    buttonsArray = document.querySelectorAll('button');
}

function draw() {
    switch (currentScreen) {
        case 0:
            image(screen01, 0, 0, 1024, 700);
            break;
        case 1:

            break;
        case 2:
            break;
        case 3:
            break;
        case 5:
            // Ejercicio 1
            image(screengameplay, 0, 0, width, height);
            image(fireman, 0, 425);

            // Life
            life.paint();

            // Fire
            fire.paint();

            // Text problem
            noStroke();
            fill(255);
            textSize(20);
            text('El bombero tiene una manguera inclinada en 45º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.79 segundos Calcule el valor de Vo (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);


            water01.paint();

            water01.calculateInititalV(inputsArray[0].value);


            // Collision
            if(water01.posX >= fire.posX && water01.posX <= fire.posX + fire.width &&
                water01.posY >= fire.posY && water01.posY <= fire.posY + fire.height
                 && inputsArray[0].value >= 12 && inputsArray[0].value < 13) {
                    water01.isMoving = false;
                    win = true;
            }

            stroke(255);
            line(0, 482, width, 482);

            //console.log((this.water01.posY - this.water01.initialY) / 100);

            if (win) {
                fire.isOver = true;
                fill(255);
                textSize(60);
                text("¡Bien!", 150, 350);
            }

            if (fail) {
                fill(255);
                textSize(60);
                text("¡Fallaste!", 150, 350);

                if (frameCount % 180 == 0) {
                    fail = false;
                }

            }

            if (water01.posX > width || water01.posY > height) {
                fail = true;
                water01.isMoving = false;
                life.loseLife();
                water01.posX = 0;
                water01.posY = 0;
                water01.time = 0;
            }
            break;

        case 6:
            // Ejercicio 2
            image(screengameplay, width, height);
            image(fireman, 0, 425);

            // Text problem
            noStroke();
            fill(255);
            textSize(20);
            text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 8m/s  y una Vy de 9m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

            water02.paint();
            water02.calculateAngle(48, 9, 10);
            break;

        case 7:
            // Ejercicio 3
            image(screengameplay, 0, 0, width, height);
            image(fireman, -250, 425);

            // Text problem
            noStroke();
            fill(255);
            textSize(20);
            text('El bombero tiene una manguera inclinada en 25º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.4 segundos Calcule el valor de Vo. (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);

            water03.paint();
            water03.calculateInititalV(16.5);
            break;

        case 8:
            // Ejercicio 4
            image(screengameplay, 0, 0, width, height);
            image(fireman, -250, 425);

            // Text problem
            noStroke();
            fill(255);
            textSize(20);
            text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 8m/s  y una Vy de 9m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

            water04.paint();
            water04.calculateAngle(50, 10, 12);
            break;
    }
}

function mousePressed() {
    // Check dX and dY
    /*console.log("X: " + (this.water04.posX - this.water04.initialX) / 100)
    console.log("Y: " + (this.water04.posY - this.water04.initialY) / 100)*/
    switch (currentScreen) {
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
            console.log(inputsArray[0].value)

            buttonsArray[0].addEventListener('click', function () {
                if (!water01.isMoving && !fail && !win) {
                    water01.isMoving = true;
                }

                if (inputsArray[0].value >= 12 && inputsArray[0].value < 13) {
                    //console.log('ok');
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
