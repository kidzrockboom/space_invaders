<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Space Invaders</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

    <script src="js/game/libraries/p5.min.js"></script>
    <script src="js/game/libraries/p5.sound.min.js"></script>
    
</head>
<body>

    <?php 
      require_once("php/navbar.php");
      displayNav();
    ?>

    <script src="js/game/ship.js" defer></script>
    <script src="js/game/shipBullet.js" defer></script>
    <script src="js/game/alien.js" defer></script>
    <script src="js/game/alienBullet.js" defer></script>
    <script src="js/game/sketch.js" defer></script>
</body>
</html>