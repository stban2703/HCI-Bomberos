class Water {
    constructor(initialX, initialY, width, height, angle) {
        this.posX = initialX;
        this.posY = initialY;
        this.width = width;
        this.height = height;

        this.initialX = initialX;
        this.initialY = initialY;

        // Test values
        /*this.initialVX = 50 / 10;
        this.initialVY = -50 / 10;*/

        this.acelerationX = 0;
        this.acelerationY = 0.1; // gravity
        this.time = 0;

        this.angle = angle;
        this.direction = this.angle / (180 / Math.PI);

        this.isMoving = false;

        // Test values
        /*this.direction = Math.atan(this.initialVY / this.initialVX);
        this.angle = Math.abs(this.direction * (180 / Math.PI));
        this.calDirection = this.angle / (180 / Math.PI);
        console.log(this.calDirection)*/
    }

    paint() {
        fill("#2FB2EB");
        ellipse(this.posX, this.posY, this.width, this.heigh);
    }

    // Respuesta correcta 1: 12.7
    // Respuesta correcta 3: 16.5
    calculateInititalV(v0) {
        //let gravity = 10;
        //let t = 1.79;
        //let v0 = (gravity * t) / (2 * Math.abs(Math.sin(this.direction)));
        if (this.isMoving) {
            let vX = v0 * Math.cos(this.direction);
            let vY = (v0 * Math.sin(this.direction)) * -1;

            this.posX = this.acelerationX * this.time * this.time + vX * this.time + this.initialX;
            this.posY = this.acelerationY * this.time * this.time + vY * this.time + this.initialY;
            this.time = this.time + 1;
        }
    }


    // Respuesta correcta 2: 48.01
    // Respuesta correcta 4: 50.19
    calculateAngle(angle, vX, vY) {
        let calcAnswer = Math.atan(vY / vX) * (180 / Math.PI);
        let correctAnswer = Math.round(calcAnswer);

        let negativeVY = vY * -1;

        let v0 = 13.45;
        let wrongVx = v0 * Math.cos((angle / (180 / Math.PI)));
        let wrongVy = (v0 * Math.sin((angle / (180 / Math.PI)))) * -1;

        if (this.isMoving) {
            if (angle >= correctAnswer && angle < correctAnswer + 1) {
                this.posX = this.acelerationX * this.time * this.time + vX * this.time + this.initialX;
                this.posY = this.acelerationY * this.time * this.time + negativeVY * this.time + this.initialY;
                this.time = this.time + 1;
            } else {
                console.log('noda')
                this.posX = this.acelerationX * this.time * this.time + wrongVx * this.time + this.initialX;
                this.posY = this.acelerationY * this.time * this.time + wrongVy * this.time + this.initialY;
                this.time = this.time + 1;
            }
        }
    }

    handleClick() {
        console.log(this.posX / 100 - this.initialX)
    }

    // Test move
    /*move() {
        this.posX = 0.5 * this.acelerationX * this.time * this.time + this.initialVX * this.time + this.initialX;
        this.posY = 0.5 * this.acelerationY * this.time * this.time + this.initialVY * this.time + this.initialY;
        this.time = this.time + 1;
    }*/

    // Version anterior
    /*movement(speed, xSpeed, ySpeed, direction) {
        // Gravedad
        let rate = 30;

        const g = 10.0 / rate;
        let grade = ((parseFloat(direction) * Math.PI) / 180);

        // Tiempo
        let t = (2 * speed * Math.sin(grade)) / g;

        // Velocidad en ejes
        let speedX = speed * Math.cos(grade);
        let speedY = speed * Math.sin(grade);// - g * t;

        // Desplazamiento
        let disX = speed * t * Math.cos(direction);
        let disY = speed * t * Math.sin(direction) - ((g * Math.pow(t, 2)) / 2);

        // Trayectoria parabolica
        let parabolic = Math.tan(direction) * disX - ((g) / 2 * Math.pow(speed, 2) * Math.pow(Math.cos(direction), 2)) * Math.pow(disX, 2);

        console.log(parabolic);*/

    /*this.posX += (speedX + 50) / 4;
    this.posY += (10 * Math.sin(speedY)) / 2;
    speedY += g * t;

};*/

}

