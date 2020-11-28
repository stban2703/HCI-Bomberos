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
let fire01;
let graphic01;
let regularFont;
let boldFont;

// Inputs
let inputsArray;
let input01;
let input02;
let input03;
let input04;

// Buttons
let buttonsArray;
let button01;

function preload() {
    screen01 = loadImage("../src/img/screen01.jpg");
    screengameplay = loadImage("../src/img/screengameplay.jpg");
    graphic01 = loadImage("../src/img/grafica01.png");
    fireman = loadImage("../src/img/bomberos.png");
    regularFont = loadFont("../src/font/Montserrat-Regular.ttf");
    boldFont = loadFont("../src/font/Montserrat-Bold.ttf");

}

function setup() {
    currentScreen = 5;
    win = false;
    fail = false;
    width = 1024;
    height = 700;

    createCanvas(width, height);

    life = new Life();

    water01 = new Water(360, 476, 30, 30, 45);
    water02 = new Water(360, 476, 30, 30, 0);
    water03 = new Water(140, 482, 30, 30, 25);
    water04 = new Water(140, 482, 30, 30, 0);

    fire01 = new Fire(755, 195, 171, 140);

    // Inputs
    inputsArray = [];
    input01 = createInput();
    input02 = createInput();
    input03 = createInput();
    input04 = createInput();

    input01.position(150, 230);
    input02.position(150, 230);
    input03.position(150, 230);
    input04.position(150, 230);

    inputsArray = document.querySelectorAll('input');

    inputsArray.forEach(element => {
        element.setAttribute('placeholder', "Digita la respuesta");
        element.setAttribute('type', 'number');
        element.style.display = "none";
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

            inputsArray[0].style.display = "inline-block";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";

            buttonsArray[0].style.display = "inline-block";

            // Life
            life.paint();

            // Fire
            fire01.paint();

            // Text problem
            noStroke();
            fill(255);
            textFont(regularFont);
            textSize(18);
            text('El bombero tiene una manguera inclinada en 45º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.79 segundos Calcule el valor de Vo (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);

            water01.paint();

            water01.calculateInititalV(inputsArray[0].value);

            // Bombero
            image(fireman, -34, 420);

            // Collision
            if(water01.posX >= fire01.posX && water01.posX <= fire01.posX + fire01.width &&
                water01.posY >= fire01.posY && water01.posY <= fire01.posY + fire01.height
                 && inputsArray[0].value >= 12 && inputsArray[0].value < 13) {
                    water01.isMoving = false;
                    win = true;
            }

            // Win
            if (win) {
                fire01.isOver = true;
                fill(255);
                textFont(boldFont);
                textSize(60);
                text("¡Bien!", 150, 350);

                if (frameCount % 200 == 0) {
                    life.resetLife();
                    currentScreen = 7;
                }
            }

            // Fail
            if (fail) {
                fill(255);
                textFont(boldFont);
                textSize(60);
                text("¡Fallaste!", 150, 350);
                if (frameCount % 200 == 0) {
                    fail = false;
                }

            }

            // Missing water
            if (water01.posX > width || water01.posY > height) {
                fail = true;
                water01.isMoving = false;
                life.loseLife();
                water01.posX = 0;
                water01.posY = 0;
                water01.time = 0;
            }

            // Cursor
            if(mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
        
        case 6:
            image(graphic01, 0, 0);
            inputsArray[0].style.display = "none";
            buttonsArray[0].style.display = "none";

            if(mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 7:
            // Ejercicio 2
            image(screengameplay, 0, 0, width, height);
            image(fireman, -34, 420);

            // Text problem
            noStroke();
            fill(255);
            textFont(regularFont);
            textSize(18);
            text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 8m/s  y una Vy de 9m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

            life.paint();

            water02.paint();
            //water02.calculateAngle(48, 9, 10);

            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "inline-block";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            break;

        case 9:
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

        case 11:
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
            buttonsArray[0].addEventListener('click', function () {
                if (!water01.isMoving && !fail && !win) {
                    water01.isMoving = true;
                }

                if (inputsArray[0].value >= 12 && inputsArray[0].value < 13) {
                    //console.log('ok');
                }
            });

            // Open graphics
            if(mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46)  {
                currentScreen = 6;
            }

            break;

        case 6:
            // Grafica 1
            // Open graphics
            if(mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46)  {
                currentScreen = 5;
            }
            break;

        case 7:
            // Ejercicio 2

            break;

        case 8:
            // Grafica 2

            break;
    }
}
