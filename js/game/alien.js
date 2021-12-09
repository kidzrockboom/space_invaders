class Alien {
    constructor (x, y, w, h, img1, img2, points) {
        this.x = x;
        this.y = y;
        this.alienWidth = w;
        this.alienHeight = h;
        this.alive = true;
        this.img1 = img1;
        this.img2 = img2;
        this.currentImg = 1;
        this.pts = points;
    }

    drawAliens () {
        // if alien alive bool is true draw else remove alien
        if (this.alive) {
            if (this.currentImg === 1) {
                image(this.img1, this.x, this.y, this.alienHeight, this.alienWidth)
            }
            if (this.currentImg === 2) {
                image(this.img2, this.x, this.y, this.alienHeight, this.alienWidth)
            }
        }
        if (!this.alive) {
            this.removeAlien();
        }
    }

    removeAlien () {
        push();
        noFill();
        stroke(255);
        strokeWeight(2);
        pop();
    }
    
    // Move aliens horizontally across the screen
    moveAliens () {
        if (alienDirection === 'left') {
            this.x -= 10;
        }
        if (alienDirection === 'right') {
            this.x += 10;
        }
        if (this.currentImage === 1) {
            this.currentImage = 2;
        } 
        else if (this.currentImage === 2) {
            this.currentImage = 1;
        }
    }

    // Move the aliens downward
    moveVertical() {
        this.y += 25;
      }
}