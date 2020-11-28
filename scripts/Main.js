let logic;

function setup() {
    logic = new Logic();
    createCanvas(logic.width, logic.height);
    logic.paintInputs();
    logic.paintButtons();
}

function draw() {
    logic.paintScreen();
}

function mousePressed() {
    logic.handleClick();
}
