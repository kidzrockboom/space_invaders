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
    <style>
        body {
            background-image: url("https://i.pinimg.com/originals/38/ad/33/38ad331b0dbf96ae9a9046577a49e201.gif");
        }
    </style>
</head>
<body>
    
    <?php 
      require_once("php/navbar.php");
      displayNav();
    ?>
    


    <h1>SPACE INVADERS</h2>


    <form onsubmit="return false;" class="signup-form">
      <!-- Header -->
      <div class="form-header">
        <h1>Login</h1>
      </div>

      <!-- Body -->
    <div class="form-body">
        
      <!-- Username -->
      <div class="form-group">
        <label for="username" class="label-title">Username *</label>
        <input type="text" id="logUsername" class="form-input" placeholder="enter your username" required="required">
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password" class="label-title">Password *</label>
        <input type="password" id="logPassword" class="form-input" placeholder="enter your password" required="required">
      </div>
    </div>

      <!-- Footer --> 
      <div class="form-footer">
        <span id="info">* Required </span>
        <button onclick="login()" class="btn"> Login </button>
      </div>
    </form>
    
    

    <script src="js/main.js" defer></script>
</body>
</html>