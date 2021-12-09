<?php
function displayNav() {
    echo "<nav>";
    echo    "<a href='index.php'>Home</a>";
    echo        "<a href='game.php'>Play</a>";
    echo        "<a href='highscore.php'>highscore</a>";
    echo        "<a href='Register.php' id='logout'>Register</a>";
    echo        "<a href='#' id='user'>User</a>";
    echo    "<div class='animation start-home'></div>";
    echo "</nav>";
}

?>

    