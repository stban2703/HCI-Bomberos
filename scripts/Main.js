let logic;
let prevScreen;
let currentScreen;
let currentUser;
let userTime;
let timer;
let score;
let finalTime;
let totalfireOver;
let isBlocked;
let userId;

let width = 1024;
let height = 700;

// Ingame
let screen01;
let screenlogin;
let screenregister;
let screengameplay;
let screenWin;
let screenLoseWater;
let screenLoseTime;
let screenFinal;
let screenlevels;
let screenProfile;
let blocked;
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
let fire02;
let fire03;
let fire04;
let graphic01;
let graphic02;
let graphic03;
let regularFont;
let boldFont;

// Inputs
let inputsArray;
let input01;
let input02;
let input03;
let input04;
let inputUserName;
let inputRegister;

let completedLevels;

// Buttons
let buttonsArray;
let button01;

function preload() {
    screenlogin = loadImage("../src/img/login.jpg");
    screenregister = loadImage("../src/img/registro.jpg")
    screen01 = loadImage("../src/img/screen01.jpg");
    screengameplay = loadImage("../src/img/screengameplay.jpg");
    screenWin = loadImage("../src/img/pantallavictoria.jpg");
    screenLoseWater = loadImage("../src/img/derrotaagua.jpg");
    screenLoseTime = loadImage("../src/img/derrotatiempo.jpg");
    screenFinal = loadImage("../src/img/resume.jpg");
    screenlevels = loadImage("../src/img/nivelescompletados.jpg");

    blocked = loadImage("../src/img/bloqueado.jpg");

    graphic01 = loadImage("../src/img/grafica01.png");
    screenProfile = loadImage("../src/img/perfildummy.jpg")
    graphic02 = loadImage("../src/img/grafica02.png");
    graphic03 = loadImage("../src/img/grafica03.png");
    graphic04 = loadImage("../src/img/grafica04.png");
    fireman = loadImage("../src/img/bomberos.png");
    regularFont = loadFont("../src/font/Montserrat-Regular.ttf");
    boldFont = loadFont("../src/font/Montserrat-Bold.ttf");
}

function setup() {
    prevScreen = 0;
    currentScreen = 0;
    totalfireOver = 0;
    completedLevels = 4;
    isBlocked = false;
    timer = new Timer(806, 30, regularFont, 20, 5, 0, 0, 300);
    score = new Score(450, 30, regularFont, 20, 52);
    win = false;
    fail = false;
    width = 1024;
    height = 700;
    currentUser;

    createCanvas(width, height);

    life = new Life();

    water01 = new Water(360, 476, 30, 30, 45);
    water02 = new Water(360, 476, 30, 30, 0);
    water03 = new Water(170, 478, 30, 30, 25);
    water04 = new Water(170, 478, 30, 30, 0);

    fire01 = new Fire(755, 195, 171, 140);
    fire02 = new Fire(851, 189, 171, 140);
    fire03 = new Fire(638, 264, 171, 140);
    fire04 = new Fire(630, 47, 171, 140);

    // Inputs
    inputsArray = [];
    input01 = createInput();
    input02 = createInput();
    input03 = createInput();
    input04 = createInput();
    inputUserName = createInput();
    inputRegister = createInput();

    input01.position(150, 230);
    input02.position(150, 230);
    input03.position(150, 230);
    input04.position(150, 230);

    inputUserName.position(332, 250);
    inputRegister.position(332, 250);
    inputsArray = document.querySelectorAll('input');

    inputsArray.forEach(element => {
        element.setAttribute('placeholder', "Digita la respuesta");
        element.setAttribute('type', 'number');
        element.style.display = "none";
    });

    inputsArray[4].classList.add("login");
    inputsArray[4].setAttribute('placeholder', "Nombre completo en mayúsculas");
    inputsArray[4].setAttribute('type', 'text');

    inputsArray[5].classList.add("login");
    inputsArray[5].setAttribute('placeholder', "Nombre completo en mayúsculas");
    inputsArray[5].setAttribute('type', 'text');

    // Buttons
    buttonsArray = [];
    button01 = createButton('Verificar');

    button01.position(384, 230);
    buttonsArray = document.querySelectorAll('button');
}

function draw() {
    switch (currentScreen) {
        case 0:
            image(screenlogin, 0, 0);
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            inputsArray[4].style.display = "inline-block";
            inputsArray[5].style.display = "none";

            buttonsArray[0].style.display = "none";

            // Cursor
            if ((mouseX >= 400 && mouseX <= 400 + 224 && mouseY >= 338 && mouseY <= 338 + 48)
                || (mouseX >= 449 && mouseX <= 449 + 126 && mouseY >= 390 && mouseY <= 390 + 24)) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
        case 1:
            image(screenregister, 0, 0);
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            inputsArray[4].style.display = "none";
            inputsArray[5].style.display = "inline-block";

            buttonsArray[0].style.display = "none";

            // Cursor
            if ((mouseX >= 400 && mouseX <= 400 + 224 && mouseY >= 338 && mouseY <= 338 + 48)
                || (mouseX >= 449 && mouseX <= 449 + 126 && mouseY >= 390 && mouseY <= 390 + 24)) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            // Ejercicio 1
            image(screengameplay, 0, 0, width, height);

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 1 / 4", 40, 31);

            inputsArray[0].style.display = "inline-block";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";

            buttonsArray[0].style.display = "inline-block";

            // Life
            life.paint();

            // Lose by wasting water
            if (life.lifeHeight <= 0) {
                fail = false;
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300 - timer.seconds;
                prevScreen = 5;
                currentScreen = 14;
                timer.isRunning = false;
            }

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            timer.isRunning = true;
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                prevScreen = 5;
                timer.total += 300;
                currentScreen = 15;
                water01.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Fire
            fire01.paint();

            water01.paint();
            water01.calculateInititalV(inputsArray[0].value);

            // Text problem
            noStroke();
            fill(255);
            textFont(regularFont);
            textSize(18);
            text('El bombero tiene una manguera inclinada en 45º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.79 segundos Calcule el valor de Vo (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);

            // Bombero
            image(fireman, -34, 420);

            // Collision
            if (water01.posX >= fire01.posX && water01.posX <= fire01.posX + fire01.width &&
                water01.posY >= fire01.posY && water01.posY <= fire01.posY + fire01.height
                && inputsArray[0].value >= 12 && inputsArray[0].value < 13) {
                water01.isMoving = false;
                timer.isRunning = false;
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

                    timer.total += 300 - timer.seconds;

                    // Score
                    score.addScore(23)
                    if (timer.minutes >= 2 && timer.tens >= 3 && timer.unities >= 0) {
                        score.addScore(14);
                    } else if (timer.seconds <= 150 && timer.seconds > 60) {
                        score.addScore(7);
                    } else if (timer.minutes < 1) {
                        score.addScore(4);
                    }

                    totalfireOver++;
                    prevScreen = 5;
                    currentScreen = 13;
                    win = false;
                    timer.resetTime(5, 0, 0);
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
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 6:
            image(graphic01, 0, 0);
            inputsArray[0].style.display = "none";
            buttonsArray[0].style.display = "none";

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 1 / 4", 40, 31);

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 5;
                currentScreen = 15;
                water01.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 7:
            // Ejercicio 2
            image(screengameplay, 0, 0, width, height);
            image(fireman, -34, 420);

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 2 / 4", 40, 31);

            // Inputs buttons
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "inline-block";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";

            buttonsArray[0].style.display = "inline-block";

            // Text problem
            noStroke();
            fill(255);
            textFont(regularFont);
            textSize(18);
            text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 9m/s  y una Vy de 10m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

            life.paint();

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            timer.isRunning = true;
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 7;
                currentScreen = 15;
                water02.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Lose by wasting water
            if (life.lifeHeight <= 0) {
                fail = false;
                life.resetLife();
                timer.total += 300 - timer.seconds;
                timer.resetTime(5, 0, 0);
                prevScreen = 7;
                currentScreen = 14;
                timer.isRunning = false;
            }


            fire02.paint();

            water02.paint();
            water02.calculateAngle(inputsArray[1].value, 9, 10);


            // Collision
            if (water02.posX >= fire02.posX && water02.posX <= fire02.posX + fire02.width &&
                water02.posY >= fire02.posY && water02.posY <= fire02.posY + fire02.height
                && inputsArray[1].value >= 48 && inputsArray[1].value < 49) {
                water02.isMoving = false;
                win = true;
                timer.isRunning = false;
            }

            // Win
            if (win) {
                fire02.isOver = true;
                fill(255);
                textFont(boldFont);
                textSize(60);
                text("¡Bien!", 150, 350);

                if (frameCount % 200 == 0) {
                    life.resetLife();

                    timer.total += 300 - timer.seconds;

                    // Score
                    score.addScore(23)
                    if (timer.minutes >= 2 && timer.tens >= 3 && timer.unities >= 0) {
                        score.addScore(14);
                    } else if (timer.seconds <= 150 && timer.seconds > 60) {
                        score.addScore(7);
                    } else if (timer.minutes < 1) {
                        score.addScore(4);
                    }

                    totalfireOver++;
                    prevScreen = 7;
                    timer.resetTime(5, 0, 0);
                    currentScreen = 13;
                    win = false;
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
            if (water02.posX > width || water02.posY > height) {
                fail = true;
                water02.isMoving = false;
                life.loseLife();
                water02.posX = 0;
                water02.posY = 0;
                water02.time = 0;
            }

            // Cursor
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 8:
            // Grafico 2
            image(graphic02, 0, 0);
            inputsArray[1].style.display = "none";
            buttonsArray[0].style.display = "none";

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 2 / 4", 40, 31);

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 7;
                currentScreen = 15;
                water02.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Cursor
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 9:
            // Ejercicio 3
            image(screengameplay, 0, 0, width, height);

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 3 / 4", 40, 31);

            // Inputs buttons
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "inline-block";
            inputsArray[3].style.display = "none";

            buttonsArray[0].style.display = "inline-block";

            // Text problem
            noStroke();
            fill(255);
            textFont(regularFont);
            textSize(18);
            text('El bombero tiene una manguera inclinada en 25º y necesita lanzar agua con velocidad inicial para apagar el fuego ubicado en el edificio y tiene un tiempo de 1.4 segundos Calcule el valor de Vo. (velocidad inicial). (g= 10 m/s2).', 152, 101, 450);

            // Life
            life.paint();

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            timer.isRunning = true;
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 9;
                currentScreen = 15;
                water03.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Lose by wasting water
            if (life.lifeHeight <= 0) {
                fail = false;
                life.resetLife();
                timer.resetTime(5, 0, 0);
                timer.total += 300 - timer.seconds;
                prevScreen = 9;
                currentScreen = 14;
                timer.isRunning = false;
            }


            // Fire
            fire03.paint();

            water03.paint();
            water03.calculateInititalV(inputsArray[2].value);

            image(fireman, -218, 420);


            // Collision
            if (water03.posX >= fire03.posX && water03.posX <= fire03.posX + fire03.width &&
                water03.posY >= fire03.posY && water03.posY <= fire03.posY + fire03.height
                && inputsArray[2].value >= 16 && inputsArray[2].value <= 17) {
                water03.isMoving = false;
                win = true;
                timer.isRunning = false;
            }

            // Win
            if (win) {
                fire03.isOver = true;
                fill(255);
                textFont(boldFont);
                textSize(60);
                text("¡Bien!", 150, 350);

                if (frameCount % 200 == 0) {
                    life.resetLife();

                    timer.total += 300 - timer.seconds;

                    // Score
                    score.addScore(23)
                    if (timer.minutes >= 2 && timer.tens >= 3 && timer.unities >= 0) {
                        score.addScore(14);
                    } else if (timer.seconds <= 150 && timer.seconds > 60) {
                        score.addScore(7);
                    } else if (timer.minutes < 1) {
                        score.addScore(4);
                    }

                    totalfireOver++;
                    timer.resetTime(5, 0, 0);
                    prevScreen = 9;
                    currentScreen = 13;
                    win = false;
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
            if (water03.posX > width || water03.posY > height) {
                fail = true;
                water03.isMoving = false;
                life.loseLife();
                water03.posX = 0;
                water03.posY = 0;
                water03.time = 0;
            }

            // Cursor
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 10:
            // Grafico 3
            image(graphic03, 0, 0);
            inputsArray[2].style.display = "none";
            buttonsArray[0].style.display = "none";

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 3 / 4", 40, 31);

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 9;
                currentScreen = 15;
                water03.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Cursor
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 11:
            // Ejercicio 4
            image(screengameplay, 0, 0, width, height);

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 4 / 4", 40, 31);

            // Inputs buttons
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "inline-block";

            buttonsArray[0].style.display = "inline-block";

            // Life
            life.paint();

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            timer.isRunning = true;
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 11;
                currentScreen = 15;
                water04.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Lose by wasting water
            if (life.lifeHeight <= 0) {
                fail = false;
                life.resetLife();
                timer.resetTime(5, 0, 0);
                timer.total += 300 - timer.seconds;
                prevScreen = 11;
                currentScreen = 14;
                timer.isRunning = false;
            }

            // Fire
            fire04.paint();

            water04.paint();
            water04.calculateAngle(inputsArray[3].value, 10, 12);

            // Text problem
            noStroke();
            fill(255);
            textFont(regularFont);
            textSize(18);
            text('El bombero necesita lanzar agua y el chorro de agua tiene una Vx de 10m/s  y una Vy de 12m/s, debes calcular el ángulo de inclinación de la manguera para poder apagar el fuego.', 152, 125, 450);

            image(fireman, -218, 420);


            // Collision
            if (water04.posX >= fire04.posX && water04.posX <= fire04.posX + fire04.width &&
                water04.posY >= fire04.posY && water04.posY <= fire04.posY + fire04.height
                && inputsArray[3].value >= 50 && inputsArray[3].value <= 51) {
                water04.isMoving = false;
                win = true;
                timer.isRunning = false;
            }

            // Win
            if (win) {
                fire04.isOver = true;
                fill(255);
                textFont(boldFont);
                textSize(60);
                text("¡Bien!", 150, 350);

                if (frameCount % 200 == 0) {
                    life.resetLife();

                    timer.total += 300 - timer.seconds;

                    // Score
                    score.addScore(23)
                    if (timer.minutes >= 2 && timer.tens >= 3 && timer.unities >= 0) {
                        score.addScore(14);
                    } else if (timer.seconds <= 150 && timer.seconds > 60) {
                        score.addScore(7);
                    } else if (timer.minutes < 1) {
                        score.addScore(4);
                    }

                    totalfireOver++;
                    prevScreen = 11;
                    currentScreen = 13;
                    timer.resetTime(5, 0, 0);
                    win = false;
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
            if (water04.posX > width || water04.posY > height) {
                fail = true;
                water04.isMoving = false;
                life.loseLife();
                water04.posX = 0;
                water04.posY = 0;
                water04.time = 0;
            }


            // Cursor
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 12:
            image(graphic04, 0, 0);
            inputsArray[3].style.display = "none";
            buttonsArray[0].style.display = "none";

            // Level
            fill(255);
            textFont(boldFont);
            textSize(20);
            text("Nivel 4 / 4", 40, 31);

            // Score
            score.paint();

            // Timer
            timer.paint();
            timer.run();

            // Lose by time
            if (timer.minutes == 0 && timer.tens == 0 && timer.unities == 0) {
                timer.resetTime(5, 0, 0);
                life.resetLife();
                timer.total += 300;
                prevScreen = 11;
                currentScreen = 15;
                water04.isMoving = false;
                fail = false;
                timer.isRunning = false;
            }

            // Cursor
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 13:
            // Victoria
            image(screenWin, 0, 0);
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            buttonsArray[0].style.display = "none";

            if (mouseX >= 492 && mouseX <= 492 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 14:
            // Derrota por agua
            image(screenLoseWater, 0, 0);
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            buttonsArray[0].style.display = "none";

            if (mouseX >= 424 && mouseX <= 424 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 15:
            // Derrota por tiempo
            image(screenLoseTime, 0, 0);
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            buttonsArray[0].style.display = "none";
            if (mouseX >= 424 && mouseX <= 424 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 16:
            // Resumen
            image(screenFinal, 0, 0);

            // Score
            fill(255);
            textFont(regularFont);
            textSize(30);
            text(score.value, 490, 352);
            calculateFinalTime();

            // Fire
            fill(255);
            textFont(regularFont);
            textSize(30);
            text(`${totalfireOver} / 4`, 680, 461);

            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            buttonsArray[0].style.display = "none";

            if (mouseX >= 481 && mouseX <= 481 + 175 && mouseY >= 501 && mouseY <= 501 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 17:
            // Select levels
            image(screenlevels, 0, 0);

            if (isBlocked) {
                image(blocked, 318, 280);
            }

            // Completed levels
            for (let i = 0; i < completedLevels; i++) {
                stroke(0, 255, 0);
                strokeWeight(2);
                noFill();
                rect(97 + (i * 221), 280, 194, 194);
            }

            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            inputsArray[4].style.display = "none";
            inputsArray[5].style.display = "none";

            buttonsArray[0].style.display = "none";


            if ((mouseX >= 932 && mouseX <= 932 + 67 && mouseY >= 20 && mouseY <= 20 + 67)
                || (mouseX >= 97 && mouseX <= 97 + 194 && mouseY >= 280 && mouseY <= 280 + 194)
                || (mouseX >= 318 && mouseX <= 318 + 194 && mouseY >= 280 && mouseY <= 280 + 194)) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case 18:
            // Profile
            image(screenProfile, 0, 0);

            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            inputsArray[4].style.display = "none";
            inputsArray[5].style.display = "none";

            buttonsArray[0].style.display = "none";

            fill(255);
            textSize(20);
            textFont(boldFont);
            text("Nombre: " + currentUser.name, 410, 200);

            if (mouseX >= 418 && mouseX <= 418 + 241 && mouseY >= 605 && mouseY <= 605 + 31) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
    }
}

function mousePressed() {
    // Check dX and dY
    /*console.log("X: " + (this.water04.posX - this.water04.initialX) / 100)
    console.log("Y: " + (this.water04.posY - this.water04.initialY) / 100)*/
    switch (currentScreen) {
        case 0:
            // LOGIN
            if (mouseX >= 400 && mouseX <= 400 + 224 && mouseY >= 338 && mouseY <= 338 + 48 && inputsArray[4].value.length > 0) {
                let user;
                let query = userRef.doc(inputsArray[4].value.toLowerCase().replace(" ", ""));

                query.get().then(function (querySnapshot) {
                    user = querySnapshot.data()
                    console.log(user);

                    if (user != null) {
                        currentUser = user;
                        completedLevels = currentUser.completedLevels;
                        currentScreen = 17;
                    } else {
                        alert("El usuario no existe.");
                    }
                });

            } else if (mouseX >= 400 && mouseX <= 400 + 224 && mouseY >= 338 && mouseY <= 338 + 48 && inputsArray[4].value.length == 0) {
                alert("Completa el campo.");
            }

            if (mouseX >= 449 && mouseX <= 449 + 126 && mouseY >= 390 && mouseY <= 390 + 24) {
                currentScreen = 1;
            }
            break;

        case 1:
            // REGISTRO
            if (mouseX >= 400 && mouseX <= 400 + 224 && mouseY >= 338 && mouseY <= 338 + 48 && inputsArray[5].value.length > 0) {
                let newUser = {
                    id: inputsArray[5].value.toLowerCase().replace(" ", ""),
                    name: inputsArray[5].value,
                    completedLevels: 0
                }

                let user;

                let query = userRef.doc(newUser.id);

                query.get().then(function (querySnapshot) {
                    user = querySnapshot.data()
                    console.log(user);

                    if (user == null) {
                        query.set(newUser).then(function () {
                            currentUser = user;
                            completedLevels = currentUser.completedLevels;
                            currentScreen = 17;
                        });
                    } else {
                        alert("El usuario ya existe.");
                    }
                });
            } else if (mouseX >= 400 && mouseX <= 400 + 224 && mouseY >= 338 && mouseY <= 338 + 48 && inputsArray[5].value.length == 0) {
                alert("Completa el campo.");
            }


            if (mouseX >= 449 && mouseX <= 449 + 126 && mouseY >= 390 && mouseY <= 390 + 24) {
                currentScreen = 0;
            }
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
            });

            // Open graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 6;
            }

            break;

        case 6:
            // Grafica 1
            // Close graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 5;
            }
            break;

        case 7:
            // Ejercicio 2
            buttonsArray[0].addEventListener('click', function () {
                if (!water02.isMoving && !fail && !win) {
                    water02.isMoving = true;
                }
            });

            // Open graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 8;
            }
            break;

        case 8:
            // Grafica 2
            // Close graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 7;
            }
            break;

        case 9:
            // Ejercicio 3
            buttonsArray[0].addEventListener('click', function () {
                if (!water03.isMoving && !fail && !win) {
                    water03.isMoving = true;
                }
            });

            // Open graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 10;
            }
            break;

        case 10:
            // Grafica 3
            // Close graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 9;
            }
            break;

        case 11:
            // Ejercicio 4
            buttonsArray[0].addEventListener('click', function () {
                if (!water04.isMoving && !fail && !win) {
                    water04.isMoving = true;
                }
            });

            // Open graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 12;
            }
            break;

        case 12:
            // Grafica 4
            // Close graphics
            if (mouseX >= 739 && mouseX <= 739 + 175 && mouseY >= 646 && mouseY <= 646 + 37.46) {
                currentScreen = 11;
            }
            break;

        case 13:
            // Victoria
            if (mouseX >= 492 && mouseX <= 492 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                if (prevScreen != 11) {
                    currentScreen = prevScreen + 2;
                } else {
                    currentScreen = 16;
                }
            }
            break;

        case 14:
            // Derrota por agua
            if (mouseX >= 424 && mouseX <= 424 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                if (prevScreen != 11) {
                    currentScreen = prevScreen + 2;
                } else {
                    currentScreen = 16;
                }
            }
            break;

        case 15:
            // Derrota por tiempo
            if (mouseX >= 424 && mouseX <= 424 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                if (prevScreen != 11) {
                    currentScreen = prevScreen + 2;
                } else {
                    currentScreen = 16;
                }
            }
            break;

        case 16:
            // Resumen
            if (mouseX >= 481 && mouseX <= 481 + 175 && mouseY >= 501 && mouseY <= 501 + 37.46) {
                isBlocked = false;
                userRef.doc(currentUser.id).update({
                    completedLevels: 2,
                    time: userTime,
                    totalfireOver: totalfireOver,
                    score: score.value

                }).then(function () {
                    completedLevels = 2;
                    currentScreen = 17;
                    console.log("Actualizado")
                });
            }
            break;

        case 17:
            // Niveles
            if (mouseX >= 932 && mouseX <= 932 + 67 && mouseY >= 20 && mouseY <= 20 + 67) {
                currentScreen = 18;
            }

            if (mouseX >= 318 && mouseX <= 318 + 194 && mouseY >= 280 && mouseY <= 280 + 194 && !isBlocked) {
                currentScreen = 5;
            } else {
                alert("Debes terminar el nivel anterior para seleccionar este.")
            }
            break;

        case 18:
            // Perfil
            if (mouseX >= 418 && mouseX <= 418 + 241 && mouseY >= 605 && mouseY <= 605 + 31) {
                currentScreen = 17;
            }
            break;
    }
}


function calculateFinalTime() {

    userTime = (timer.total / 60).toFixed(1);

    fill(255);
    textFont(regularFont);
    textSize(30);
    text(`${userTime} minutos`, 490, 411);
}
