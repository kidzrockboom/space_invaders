let canvas;
let player;
let green;
let red;
let backGroundColor;
let shipShots = []; // stores all shots
let aliens = []; // stores all aliens
let alienShots = [];
let score = 0;
let highScore = 0;
// all alien ship images
let alien1a;
let alien1b;
let alien2a;
let alien2b;
let alien3a;
let alien3b;
let alien4; // red alien ship
let speed = 10; // aliens move once ever x frames.
alienBulletSpeed = 10; // speed at which alien laser shots move
let chanceOfFiringLaser = 50; // x% Chance of aliens firing lasers
let alienDirection = 'left'; // Check for alien movement
let pauseMode = false;
let pauseTime = 0;
let gameOver = false; // Check if the player has no lives left

// Load all the alien images
function preload() {
    alien1a = loadImage('../../img/alien1a.png');
    alien1b = loadImage('../../img/alien1b.png');
    alien2a = loadImage('../../img/alien2a.png');
    alien2b = loadImage('../../img/alien2b.png');
    alien3a = loadImage('../../img/alien3a.png');
    alien3b = loadImage('../../img/alien3b.png');
    alien4 = loadImage('../../img/alien4.png');
}
// Create all the objects for the aliens, ship and draw the canvas and set the frame rate
function setup() {
  createCanvas(1400, 900);
  noSmooth();
  frameRate(30);
  player = new Ship();
  //createAllAliens();
  imageMode(CENTER);
}

// Draw the objects made in setup unto the canvas element
function draw() {
  // if the canvas is currently in focus draw all the objects and their method calls (run the game)  
  if (focused || frameCount < 60) {
    background(51);
    player.drawPlayer();
    player.moveShip();
   // player.drawLives();
    drawScore();
    if (!pauseMode) {
      moveAllShipBullets();
      moveAllAlienBullets();

      if (frameCount % speed == 0) {
        moveAllAliens();
        fireAlienBullet();
      }

    }
    if (pauseMode) {
      animateNewLife();
    }
    drawAllShipBullets();
    drawAllAlienBullets();
    drawAllAliens();
    hitAlien();
    hitPlayer();
    if (allAliensKilled) {
      print('All aliens killed!')
      resetAliens();
    }
  } else {
    drawUnpauseInstructions();
  }
  
}

function drawUnpauseInstructions () {
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(" CLICK TO PLAY", width/2, height - (height/4));
}

function keyPressed() {
  if (key === " ") {
    if (!pauseMode) {
      print('Shots fired!');
      player.fire();
    }
  }
  if (keyCode === LEFT_ARROW) {
    print('Direction changes!');
    player.changeDir('left')
  }
  if (keyCode === RIGHT_ARROW) {
    print('Direction changes!');
    player.changeDir('right')
  }
  if ((keyCode === RETURN || keyCode === ENTER) && gameOver)  {
    reset();
  }
}

function keyReleased() {
  if (keyIsPressed === false) {
    player.changeDir('none');
  }
}

function drawAllShipBullets() {
  for (let bullet of shipShots) {
    bullet.draw();
  }
}

function drawAllShipBullets() {
  for (let bullet of shipShots) {
    bullet.move();
  }
}