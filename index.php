<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    
    <?php
        include('php/navbar.php');
    ?>   


    <h1>SPACE INVADERS</h2>
      
     <h1>ADD Gif of rocket blasting as a background</h1> 
      

    <div class="selection"> 
        <button href="game.html">Play</button>
        <button href="game.html">LOGIN</button>
    </div>


    <form action="/my-handling-form-page" method="post">
      <ul>
       <li>
          <label for="user_name">Username:</label>
          <input type="text" id="username" name="user_name">
        </li>
       <li>
         <label for="password">Password:</label>
         <input type="password" id="password" name="password">
       </li>
       <li class="button">
          <button type="submit">LOGIN</button>
      </li>
      </ul>
     </form>
    
    

    <script src="js/main.js"></script>
</body>
</html>