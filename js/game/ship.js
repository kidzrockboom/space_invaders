class Ship {
    // Contructor for this ship
    constructor() {
        this.x = width/2;  // initial width
        this.y = height - 2; // initial length 
        this.shipWidth = 50; 
        this.shipHeight = 18;
        this.gunLength = 10;
        this.color = color(255);  // White
        this.direction = 'none'; // initial direction
        this.lives = 5; 
        this.shotInterval = 10;  // how often you can fire bullets
        this.lastShotFired = -this.shotInterval; // check when the last shot was fired


        
    }

    // Draw the design for the players ship
    drawShip (x, y) {
        rect(x, y, this.shipHeight, this.shipWidth, 2);
        rect(x, y - this.shipHeight/ 2 - this.gunLength / 2, this.gunLength, this.gunLength);
        rect(x, y - this.shipHeight/ 2 - this.gunLength - 1, 2, 2);
    }

    // Draw the actual ship
    drawPlayer() {
        fill(this.color);
        rectMode(CENTER);
        noStroke();
        this.drawShip(this.x, this.y);
    }

    // functionality to move the players ship
    moveShip() {
        if (!pauseMode) {
            if (this.direction === 'left' && this.x > this.shipWidth/2) {
                this.x -= 5;
            }
            if (this.direction === 'right' && this.x < width - this.shipWidth/2) {
                this.x += 5;
            }
        }
    }

    changeDir(direction) {
        this.direction = direction; 
    }

    // Functionality for firing bullets from players ship
    fire() {
        // Checks timing for last bullet fired before allowing player to shot again then stores the time of when shots were fired.
        if (frameCount - this.lastShotFired > this.shotInterval) {
            shipShots.push(new shipBullet(this.x, this.y - (this.shipWidth), 1));
            this.lastShotFired = frameCount;
        }
    }

    // Draws the amount of extra lives a player has
    drawLives() {
        fill(color(51, 255, 0));
        let x = width - 210;
        for (let i = 0; i < this.lives; i++) {
            this.drawShip(x, 25);
            x += 40;
            
        }
    }
} 