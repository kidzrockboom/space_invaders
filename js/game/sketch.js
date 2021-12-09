let canvas;
let player;
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
let speed = 7; // aliens move once ever x frames.
let alienBulletSpeed = 10; // speed at which alien bullets move
let chanceOfFiringAlienBullet = 50; // x% Chance of aliens firing bullets
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
  frameRate(15);
  player = new Ship();
  createAllAliens();
  imageMode(CENTER);
}

// Draw the objects made in setup unto the canvas element
function draw() {
  // if the canvas is currently in focus draw all the objects and their method calls (run the game)  
  if (focused || frameCount < 60) {
    background(51);
    player.drawPlayer();
    player.moveShip();
    player.drawLives();
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
    playerHit();
    if (allAliensHit()) {
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
    bullet.drawBullet();
  }
}

function moveAllShipBullets() {
  for (let bullet of shipShots) {
    bullet.move();
  }
}

function createAllAliens() {
  let startingX = 70;
  let startingY = 400;
  // Creates aliens of bottom double rows 
  for (let i = 0; i < 22; i++) {
    aliens[i] = new Alien(startingX, startingY, 45, 45, alien1a, alien1b, 10);
    startingX += 60;
    if (startingX > width - 60) {
      startingX = 70;
      startingY -= 60;
    }
  }
  // Creates aliens of middle double rows
  for (let i = 22; i < 44; i++) {
    aliens[i] = new Alien(startingX, startingY, 36, 28, alien2a, alien2b, 20);
    startingX += 60;
    if (startingX > width - 60) {
      startingX = 70;
      startingY -= 60;
    }
  }
  // Creates aliens of top double
  for (let i = 44; i < 66; i++) {
    aliens[i] = new Alien(startingX, startingY, 45, 45, alien3a, alien3b, 50);
    startingX += 60;
    if (startingX > width - 60) {
      startingX = 70;
      startingY -= 60;
    }
  }
}

function drawAllAliens() {
  for (let alien of aliens) {
    alien.drawAliens();
  }
}

// Check if aliens touch the edge of the canvas
function checkIfAliensReachedEdge() {
  let edgeReached = false;
  for (let alien of aliens) {
    if ((alien.x < 25 && alien.alive) || (alien.x > width - 25 && alien.alive)) {
      edgeReached = true
    }
  }
  return edgeReached;
}

// Reverse the horizontal travel direction of the aliens 
function reverseAlienDirections() {
  if (alienDirection === 'left') {
    alienDirection = 'right';
  } else {
    alienDirection = 'left';
  }
}

// Move aliens downwards
function moveAllAliensDown() {
  for (let alien of aliens) {
    alien.moveVertical();
  }
}

// Functionality for moving the aliens across the screen
function moveAllAliens() {
  for (let alien of aliens) {
   alien.moveAliens(alienDirection); 
  }
  if (checkIfAliensReachedEdge()) {
    reverseAlienDirections();
    moveAllAliensDown();
  }
}

// Checks if the dimensions of the players bullets touches the aliens and if so kills the alien and increasese the players points based on the aliens pts parameter
function hitAlien() {
  for (let shot of shipShots) {
    for (let alien of aliens) {
      if (shot.x > alien.x - alien.alienWidth / 2 &&
        shot.x < alien.x + alien.alienWidth / 2 &&
        shot.y - shot.length > alien.y - alien.alienHeight / 2 &&
        shot.y - shot.length < alien.y + alien.alienHeight / 2 &&
        !shot.used && alien.alive
      ) {
        print('Alien Hit');
        alien.alive = false;
        shot.used = true;
        score += alien.pts;
      }
    }
  }
}

// checks if all aliens have been hit
function allAliensHit() {
  let test = true;
  for (let alien of aliens) {
    if (alien.alive) {
      test = false;
    }
  }
  return test; 
}


// resets the aliens positions
function resetAliens() {
  createAllAliens();
  if (speed > 2) {
    speed -= 2;
  }
  chanceOfFiringAlienBullet += 10;
}

function fireAlienBullet() {
  // change of aliens firing bullets would be random

  if (random(100) < chanceOfFiringAlienBullet) {
    let a = floor(random(aliens.length));
    if (aliens[a].alive) {
      let b = new alienBullet(aliens[a].x, aliens[a].y + (aliens[a].alienHeight / 2), alienBulletSpeed, color(255));
      alienShots.push(b)
    }
  }
}

// Draw alien Bullets

function drawAllAlienBullets() {
  for (let shot of alienShots) {
    shot.drawBullet();
  }
}

// move all alien bullets
function moveAllAlienBullets() {
  for (let shot of alienShots) {
    shot.moveBullet();
  }
}

// Show the players score
function drawScore() {
  noStroke();
  fill(255);
  textSize(28);
  textAlign(LEFT);
  text('LIVES: ', width - 325, 54);
  text('SCORE: ', 50, 54);
  // Highlight the score if its higher than previous high scores
  if (highScore > 0 && score > highScore) {
    fill(color(255, 51, 0));
  }
  text(score, 170, 54);
}


function playerHit() {
  for (let bullet of alienShots) {
    let leftEdgeOfBullet = bullet.x - 2;
    let rightEdgeofBullet = bullet.x + 2;
    let frontofBullet = bullet.y + 8;
    let backofBullet = bullet.y;
    let leftEdgeOfShip = player.x - (player.shipWidth / 2);
    let rightEdgeOfShip = player.x + (player.shipWidth / 2);
    let frontOfShip = player.y - (player.shipHeight / 2);
    let backOfShip = player.y + (player.shipHeight / 2); 

    if (rightEdgeofBullet > leftEdgeOfShip &&
      leftEdgeOfBullet < rightEdgeOfShip &&
      frontofBullet > frontOfShip &&
      backofBullet < backOfShip &&
      !bullet.used) {
      print('player hit!!!');
      bullet.used = true; // that bullet is now used and can't hit player again, or be drawn
      if (player.lives > 0) {
        lifeLost();
      }
      if (player.lives == 0) {
        gameOverDesu();
      }
    }
  }
}

function lifeLost() {
  pauseTime = frameCount + 50;
  print('You lost a Life!');
  player.color = red;
  pauseMode = true;
}

// Uses an extra life to bring back the player
function animateNewLife() {
  print('Repawning');
  
  // Resets the players ship  and resets the aliens bullets and player bullets
  if (frameCount > pauseTime - 30) {
    player.color = color(51, 255, 0);
    player.x - width / 2;
    pauseMode = false;
    player.lives -= 1;

    for (let bullet of alienShots) {
      bullet.used = true;
    }

    for (let shot of shipShots) {
      shot.used = true;
    }
  }
}

// Game over functionality
function gameOverDesu() {
  gameOver = true;
  background(0, 125);
  print('GAME OVER!');
  textSize(40);
  stroke(0);
  fill(255);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  if (score > highScore) {
    fill(red);
    text("NEW HIGH SCORE!!", width / 2, (height / 2) + 75);
    fill(255);
  }
  text("PRESS ENTER TO START ANOTHER ROUND", width / 2, (height / 2) + 125);
  noLoop();
}

// Reset game state

function reset() {
  highScore = score;
  if (!sessionStorage.length == 0) {
    let user = document.getElementById('user');

    let playerId = user.innerHTML;

    sessionStorage.setItem(playerId, highScore);
  }
  score = 0;
  player = new Ship();
  createAllAliens();
  for (let bullet of alienShots) {
    bullet.used = true;
  }

  for (let shot of shipShots) {
    shot.used = true;
  }
  loop();
}