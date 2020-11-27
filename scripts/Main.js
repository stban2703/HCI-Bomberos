let logic;
let isMoving;

function setup() {
    logic = new Logic();
    createCanvas(logic.width, logic.height);
}

function draw() {
    logic.paintScreen();
}