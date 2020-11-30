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

// Top array
let topArray;

// Ingame
let stroke;
let screenintro;
let screenlogin;
let screenregister;
let screentop;

// Map
let map1;
let map2;
let map2defeat;

// Tutorial caida libre animacion
let animationArray;
let screenlevelone1;
let screenlevelone2;
let screenlevelone3;

// Tutorial
let screentutorialparabolic1;
let screentutorialparabolic2;
let screentutorialparabolic3;
let screeninstruction1;
let screeninstruction2;

// Juego
let screengameplay;
let screenWin;
let screenLoseWater;
let screenLoseTime;
let screenFinal;
let screenlevels;
let screenlevelcomplete1
let screenlevelcomplete2;
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
    stroke = loadImage("../src/img/stroke.png");

    // Inicio
    screenlogin = loadImage("../src/img/login.jpg");
    screenregister = loadImage("../src/img/registro.jpg")
    screenintro = loadImage("../src/img/introduccion.jpg");
    screentop = loadImage("../src/img/topjugadores.jpg");

    // Mapa
    map1 = loadImage("../src/img/mapa1.jpg");
    map2 = loadImage("../src/img/mapa2.jpg");
    map2defeat = loadImage("../src/img/mapa2derrota.jpg");

    // Tutorial caida libre
    //screenlevelone1 = loadImage("../src/img/tutorialcaidalibre.jpg");
    //screenlevelone2 = loadImage("../src/img/tutorialcaidalibre2.jpg");
    screenlevelone3 = loadImage("../src/img/tutocaidalibre3.png")

    // Tutorial movmiento parabolico
    screentutorialparabolic1 = loadImage("../src/img/tutorialparabolico1.jpg");
    screentutorialparabolic2 = loadImage("../src/img/tutorialparabolico2.jpg");
    screentutorialparabolic3 = loadImage("../src/img/tutorialparabolico3.jpg");
    screeninstruction1 = loadImage("../src/img/parabolicoinstrucciones1.jpg");
    screeninstruction2 = loadImage("../src/img/parabolicoinstrucciones2.jpg");

    // Juego
    screengameplay = loadImage("../src/img/screengameplay.jpg");
    screenWin = loadImage("../src/img/pantallavictoria.jpg");
    screenLoseWater = loadImage("../src/img/derrotaagua.jpg");
    screenLoseTime = loadImage("../src/img/derrotatiempo.jpg");
    screenFinal = loadImage("../src/img/resume.jpg");
    screenlevels = loadImage("../src/img/nivelescompletados.jpg");
    screenlevelcomplete1 = loadImage("../src/img/caidalibrecompleto.jpg");
    screenlevelcomplete2 = loadImage("../src/img/parabolicocompleto.jpg");

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
    currentScreen = -1;
    totalfireOver = 0;
    completedLevels = 0;
    isBlocked = true;
    timer = new Timer(806, 30, regularFont, 20, 5, 0, 0, 300);
    score = new Score(450, 30, regularFont, 20, 52);
    win = false;
    fail = false;
    width = 1024;
    height = 700;

    // Top array
    topArray = [];

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


    // Animaciones
    screenlevelone1 = createImg("../src/animated/tutocaidalibre1.gif");
    screenlevelone2 = createImg("../src/animated/tutocaidalibre2.gif");

    screenlevelone1.position(0, 0);
    screenlevelone2.position(0, 0);

    // Animation array
    animationArray = document.querySelectorAll("img");

    animationArray.forEach(function (elem) {
        elem.style.display = "none";
    })
}

function draw() {
    switch (currentScreen) {
        case -9:
            // Tutorial caida libre 3
            animationArray[0].style.display = "none";
            animationArray[1].style.display = "none";
            image(screenlevelone3, 0, 0);

            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case -8:
            // TOP SCREEN
            image(screentop, 0, 0);

            let sortedArray = topArray.sort(function (a, b) {
                var scoreA = a.totalScore;
                var scoreB = b.totalScore;
                var timeA = parseFloat(a.time);
                var timeB = parseFloat(b.time);

                // Compare the 2 keys
                if (scoreA < scoreB) return 1;
                if (scoreA > scoreB) return -1;
                if (timeA < timeB) return -1;
                if (timeA > timeB) return 1;
                return 0;
            });

            // Pintar lista
            for (let i = 0; i < 5; i++) {
                let elem = sortedArray[i];
                // Name
                fill(255);
                textSize(20);
                textAlign(LEFT, BASELINE);
                textFont(regularFont);
                text(elem.name.slice(0, elem.name.indexOf(" ", elem.name.indexOf(" ") + 1)), 127, 244 + (85 * i));

                // Time
                textAlign(CENTER, CENTER);
                text(parseFloat(elem.time), 415, (244 - 10) + (85 * i));

                text(parseFloat(elem.totalScore), 645, (244 - 10) + (85 * i));

                textAlign(LEFT, BASELINE)
            }

            // Mouse
            if (mouseX >= 18 && mouseX <= 18 + 69 && mouseY >= 44 && mouseY <= 44 + 57) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case -7:
            // MAPA 2
            if (totalfireOver >= 3) {
                image(map2, 0, 0);
            } else {
                image(map2defeat, 0, 0);
            }

            if (mouseX >= 718 && mouseX <= 718 + 175 && mouseY >= 615 && mouseY <= 615 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
        case -6:
            // MAPA 1
            image(map1, 0, 0);
            if (mouseX >= 718 && mouseX <= 718 + 175 && mouseY >= 615 && mouseY <= 615 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case -5:
            // Tutorial movimiento parabolico 2
            image(screeninstruction2, 0, 0);
            // Cursor
            if (mouseX >= 751 && mouseX <= 751 + 175 && mouseY >= 430 && mouseY <= 430 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case -4:
            // Tutorial movimiento parabolico 1
            image(screeninstruction1, 0, 0);
            // Cursor
            if (mouseX >= 760 && mouseX <= 760 + 175 && mouseY >= 612 && mouseY <= 612 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case -3:
            // Tutorial caida libre 2
            //image(screenlevelone2, 0, 0);
            animationArray[0].style.display = "none";
            animationArray[1].style.display = "block";

            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }

            break;

        case -2:
            // Tutorial caida libre 1
            //image(screenlevelone1, 0, 0);
            animationArray[0].style.display = "block";
            animationArray[1].style.display = "none";

            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

        case -1:
            // Introduccion
            image(screenintro, 0, 0);
            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            inputsArray[4].style.display = "none";
            inputsArray[5].style.display = "none";
            buttonsArray[0].style.display = "none";

            if ((mouseX >= 390 && mouseX <= 390 + 277 && mouseY >= 405 && mouseY <= 405 + 59)
                || (mouseX >= 390 && mouseX <= 390 + 277 && mouseY >= 490 && mouseY <= 490 + 59)) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;

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
            image(screentutorialparabolic1, 0, 0);

            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
        case 3:
            image(screentutorialparabolic2, 0, 0);

            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            break;
        case 4:
            image(screentutorialparabolic3, 0, 0);

            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
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
            switch (completedLevels) {
                case 0:
                    image(screenlevels, 0, 0);
                    break;

                case 1:
                    image(screenlevelcomplete1, 0, 0);
                    break;

                case 2:
                    image(screenlevelcomplete2, 0, 0);
                    break;
            }

            if (completedLevels >= 1) {
                isBlocked = false;
            }

            if (isBlocked) {
                //image(blocked, 318, 280);
            }

            // Completed levels
            image(stroke, 113 + (202 * completedLevels), 280);

            inputsArray[0].style.display = "none";
            inputsArray[1].style.display = "none";
            inputsArray[2].style.display = "none";
            inputsArray[3].style.display = "none";
            inputsArray[4].style.display = "none";
            inputsArray[5].style.display = "none";

            buttonsArray[0].style.display = "none";


            if ((mouseX >= 932 && mouseX <= 932 + 67 && mouseY >= 20 && mouseY <= 20 + 67)
                || (mouseX >= 121 && mouseX <= 121 + 189 && mouseY >= 288 && mouseY <= 288 + 189)
                || (mouseX >= 323 && mouseX <= 323 + 189 && mouseY >= 288 && mouseY <= 288 + 189)) {
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

            // User name
            textAlign(CENTER, CENTER);
            noStroke();
            fill(255);
            textSize(25);
            textFont(regularFont);
            text("Nombre: " + currentUser.name, width / 2, 150);

            // Points
            textAlign(LEFT, BASELINE)
            fill(255);
            textSize(35);
            textFont(regularFont);

            if (currentUser.freefallScore) {
                text(currentUser.freefallScore + " pts", 770, 278);
            } else {
                text(0 + " pts", 770, 278);
            }

            if (currentUser.parabolicScore) {
                text(currentUser.parabolicScore + " pts", 770, 475);
            } else {
                text(0 + " pts", 770, 475);
            }


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
        case -9:
            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47 && mouseIsPressed && completedLevels < 1) {
                completedLevels = 1;
                isBlocked = false;
                userRef.doc(currentUser.id).update({
                    completedLevels: 1,
                    freefallScore: 50,
                    totalScore: 50

                }).then(function () {
                    completedLevels = 1;
                    currentScreen = 17;
                    console.log("Actualizado");
                    currentUser.freefallScore = 50;
                });
            } else if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47 && mouseIsPressed && completedLevels >= 1) {
                currentScreen = 17;
                console.log("Otra vez");
            }
            break;

        case -8:
            // TOP
            if (mouseX >= 18 && mouseX <= 18 + 69 && mouseY >= 44 && mouseY <= 44 + 57) {
                currentScreen = -1;
                topArray = [];
            }
            break;

        case -7:
            // MAPA 2
            if (mouseX >= 718 && mouseX <= 718 + 175 && mouseY >= 615 && mouseY <= 615 + 37.46) {
                currentScreen = 16;
            }
            break;
        case -6:
            // MAPA 1
            if (mouseX >= 718 && mouseX <= 718 + 175 && mouseY >= 615 && mouseY <= 615 + 37.46) {
                currentScreen = 5;
            }
            break;

        case -5:
            // 
            if (mouseX >= 751 && mouseX <= 751 + 175 && mouseY >= 430 && mouseY <= 430 + 37.46) {
                currentScreen = -6;
            }
            break;

        case -4:
            if (mouseX >= 760 && mouseX <= 760 + 175 && mouseY >= 612 && mouseY <= 612 + 37.46) {
                currentScreen = -5;
            }
            break;

        case -3:
            // Tutorial caida libre 2
            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47 && mouseIsPressed) {
                currentScreen = -9;
            }
            break;

        case -2:
            // Tutorial caida libre 1
            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.47 && mouseIsPressed) {
                currentScreen = -3;
            }
            break;

        case -1:
            // Introduccion
            if (mouseX >= 390 && mouseX <= 390 + 277 && mouseY >= 405 && mouseY <= 405 + 59 && mouseIsPressed) {
                currentScreen = 0;
            }

            if (mouseX >= 390 && mouseX <= 390 + 277 && mouseY >= 490 && mouseY <= 490 + 59 && mouseIsPressed) {
                userRef.get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (elem) {
                        const obj = elem.data();
                        obj.id = elem.id;
                        topArray.push(obj);
                    });
                    console.log(topArray.length);
                    currentScreen = -8;
                });
            }
            break;

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
                    completedLevels: 0,
                    parabolicScore: 0,
                    freefallScore: 0,
                    totalScore: 0,
                    time: "0"
                }

                let user;

                let query = userRef.doc(newUser.id);

                query.get().then(function (querySnapshot) {
                    user = querySnapshot.data()
                    console.log(user);

                    if (user == null) {
                        query.set(newUser).then(function () {
                            currentUser = newUser;
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
            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46) {
                currentScreen = 3;
            }
            break;
        case 3:
            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46) {
                currentScreen = 4;
            }
            break;
        case 4:
            if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46 && completedLevels < 2) {
                score.value += 52;
                currentScreen = -4;
            } else if (mouseX >= 797 && mouseX <= 797 + 175 && mouseY >= 623 && mouseY <= 623 + 37.46 && completedLevels >= 2) {
                currentScreen = -4;
            }
            break;
        case 5:
            // Ejercicio 1
            buttonsArray[0].addEventListener('click', function () {
                if (!water01.isMoving && !fail && !win) {
                    water01.isMoving = true;
                    water02.isMoving = false;
                    water03.isMoving = false;
                    water04.isMoving = false;
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
                    water01.isMoving = false;
                    water02.isMoving = true;
                    water03.isMoving = false;
                    water04.isMoving = false;
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
                    water01.isMoving = false;
                    water02.isMoving = false;
                    water03.isMoving = true;
                    water04.isMoving = false;
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
                    water01.isMoving = false;
                    water02.isMoving = false;
                    water03.isMoving = false;
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
                    currentScreen = -7;
                }
            }
            break;

        case 14:
            // Derrota por agua
            if (mouseX >= 424 && mouseX <= 424 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                if (prevScreen != 11) {
                    currentScreen = prevScreen + 2;
                } else {
                    currentScreen = -7;
                }
            }
            break;

        case 15:
            // Derrota por tiempo
            if (mouseX >= 424 && mouseX <= 424 + 175 && mouseY >= 464 && mouseY <= 464 + 37.46) {
                if (prevScreen != 11) {
                    currentScreen = prevScreen + 2;
                } else {
                    currentScreen = -7;
                }
            }
            break;

        case 16:
            // Resumen
            if (mouseX >= 481 && mouseX <= 481 + 175 && mouseY >= 501 && mouseY <= 501 + 37.46 && completedLevels < 2) {
                isBlocked = false;
                userRef.doc(currentUser.id).update({
                    completedLevels: 2,
                    time: userTime,
                    totalfireOver: totalfireOver,
                    parabolicScore: score.value,
                    totalScore: 50 + score.value

                }).then(function () {
                    completedLevels = 2;
                    currentUser.parabolicScore = score.value;
                    currentScreen = 17;
                    console.log("Actualizado")
                });
            } else if (mouseX >= 481 && mouseX <= 481 + 175 && mouseY >= 501 && mouseY <= 501 + 37.46 && completedLevels >= 2) {
                currentScreen = 17;
                console.log("Otra vez")
            }
            break;

        case 17:
            // Niveles
            if (mouseX >= 932 && mouseX <= 932 + 67 && mouseY >= 20 && mouseY <= 20 + 67) {
                currentScreen = 18;
            }

            // Caida libre
            if (mouseX >= 121 && mouseX <= 121 + 189 && mouseY >= 288 && mouseY <= 288 + 189) {
                currentScreen = -2;
            }

            // Movimiento parabolico
            if (mouseX >= 323 && mouseX <= 323 + 189 && mouseY >= 288 && mouseY <= 288 + 189 && !isBlocked) {
                // Reset game
                prevScreen = 0;
                timer = new Timer(806, 30, regularFont, 20, 5, 0, 0, 300);

                score = new Score(450, 30, regularFont, 20, 0);
                totalfireOver = 0;

                if (currentUser.parabolicScore) {
                    score.value = currentUser.parabolicScore
                };

                inputsArray[0].value = "";
                inputsArray[1].value = "";
                inputsArray[2].value = "";
                inputsArray[3].value = "";

                win = false;
                fail = false;
                life = new Life();
                water01 = new Water(360, 476, 30, 30, 45);
                water02 = new Water(360, 476, 30, 30, 0);
                water03 = new Water(170, 478, 30, 30, 25);
                water04 = new Water(170, 478, 30, 30, 0);

                water01.isMoving = false;
                water02.isMoving = false;
                water03.isMoving = false;
                water04.isMoving = false;

                fire01 = new Fire(755, 195, 171, 140);
                fire02 = new Fire(851, 189, 171, 140);
                fire03 = new Fire(638, 264, 171, 140);
                fire04 = new Fire(630, 47, 171, 140);
                fire01.isOver = false;
                fire02.isOver = false;
                fire03.isOver = false;
                fire04.isOver = false;

                // pantalla
                currentScreen = 2;

            } else if (mouseX >= 323 && mouseX <= 323 + 189 && mouseY >= 288 && mouseY <= 288 + 189 && isBlocked) {
                alert("Debes terminar el nivel anterior para seleccionar este.");
            }

            /*if (mouseX >= 318 && mouseX <= 318 + 194 && mouseY >= 280 && mouseY <= 280 + 194 && !isBlocked) {
                currentScreen = 5;
            } else if (mouseX >= 318 && mouseX <= 318 + 194 && mouseY >= 280 && mouseY <= 280 + 194 && isBlocked) {
                alert("Debes terminar el nivel anterior para seleccionar este.")
            }*/
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
