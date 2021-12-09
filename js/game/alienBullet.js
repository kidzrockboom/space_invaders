class alienBullet {
    constructor (x, y, s, c) {
        this.x = x;
        this.y = y;
        this.sign = 1;
        this.used = false;
        this.speed = s;
        this.color = c;
    }


    // Draw the bullets that will be used by aliens
    drawBullet () {
        if (!this.used) {
            noFill();
            stroke(this.color);
            strokeWeight(1);
            beginShape();
            vertex(this.x, this.y);
            vertex(this.x + (2 * this.sign), this.y + 2);
            vertex(this.x - (2 * this.sign), this.y + 6);
            vertex(this.x, this.y + 8);
            endShape();


        }
    }

    // Move the bullet horizontally combined with the speed
    moveBullet () {
        this.y += this.speed;
    }
}