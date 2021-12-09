<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High Score</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
<?php 
      require_once("php/navbar.php");
      displayNav();
    ?>


    
    <table class="score">
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td class="playerName">Richard</td>
                <td class="playerScore">100</td>
            </tr>
            <tr class="active-row">
                <td class="playerName">Shreyas</td>
                <td class="playerScore">90</td>
            </tr>
            <tr>
                <td class="playerName">Jubair</td>
                <td class="playerScore">80</td>
            </tr>
            <tr>
                <td class="playerName">Anil</td>
                <td class="playerScore">80</td>
            </tr>
            <tr>
                <td class="playerName">Shirohige</td>
                <td class="playerScore">70</td>
            </tr>
            <tr>
                <td class="playerName">Akshith</td>
                <td class="playerScore">60</td>
            </tr>
            <tr>
                <td class="playerName">Adesh</td>
                <td class="playerScore">50</td>
            </tr>
        </tbody>
    </table>
    
    <script src="js/main.js" defer></script>
    <script src="js/leaderboard.js" defer></script>

</body>
</html>