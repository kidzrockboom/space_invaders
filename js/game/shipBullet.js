class shipBullet {
    constructor (x, y, direction) {
        this.x = x;
        this.y = y;
        this.dir = direction;
        this.length = 5;
        this.hit = false;
    }

    // Draw the ships bullet
    drawBullet () {
        if (!this.hit) {
            stroke(255);
            strokeWeight(2);
            line(this.x, this.y, this.x, this.y, - this.length);
            if (this.y < 0) {
                // When bullet leaves the screen area remove it
                shots.splice(0, 1); 
            }
        }
    }

    // move the bullet across the screen
    move () {
        this.y -= 12;
    }
}