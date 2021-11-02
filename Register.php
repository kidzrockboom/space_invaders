<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <?php
        include('php/navbar.php');
    ?>

    <form action="/"></form>
    <form action="/game.php" method="post">
        <ul>
         <li>
           <label for="name">Name:</label>
           <input type="text" id="name" name="user_name">
         </li>
         <li>
            <label for="user_name">Username:</label>
            <input type="text" id="username" name="user_name">
          </li>
         <li>
           <label for="mail">E-mail:</label>
           <input type="email" id="mail" name="user_email">
         </li>
         <li>
           <label for="password">Password:</label>
           <input type="password" id="password" name="password">
         </li>
         <li class="button">
            <button type="submit">REGISTER</button>
        </li>
        </ul>
       </form>

    
</body>
</html>