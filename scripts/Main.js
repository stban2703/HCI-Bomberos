let logic;
let isMoving;

function setup() {
    logic = new Logic();
    createCanvas(logic.width, logic.height);
    logic.paintInputs();

    
}

function draw() {
    logic.paintScreen();

}