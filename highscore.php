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

        <tbody id="table">
            <tr class="active-row">
                <td >Shreyas</td>
                <td >90</td>
            </tr>
            
        </tbody>
    </table>
    

    <script src="js/leaderboard.js" defer></script>
    <script src="js/main.js" defer></script>
</body>
</html>