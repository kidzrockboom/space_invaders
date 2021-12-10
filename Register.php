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
      require_once("php/navbar.php");
      displayNav();
    ?>

    <form class="signup-form">
      <!-- Header -->
      <div class="form-header">
        <h1>Create Account</h1>
      </div>

      <!-- Body -->
    <div class="form-body">
        <div class="horizontal-group">
          <div class="form-group left">
            <label for="firstname" class="label-title"> First name </label>
            <input type="text" id="firstname" class="form-input" placeholder="enter your firstname">
          </div>
          <div class="form-group right">
            <label for="lastname" class="label-title"> Last name</label>
            <input type="text" id="lastname" class="form-input" placeholder="enter your lastname">
          </div>
        </div>


      <!-- Username -->
      <div class="form-group">
        <label for="username" class="label-title">Username *</label>
        <input onclick="clearUser()" type="text" id="username" class="form-input" placeholder="enter your username">
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email" class="label-title">Email *</label>
        <input onclick="clearEmail()" type="email" id="email" class="form-input" placeholder="enter your email">
      </div>

      <!-- Password -->
      <div class="horizontal-group">

        <div class="form-group left">
          <label for="password" class="label-title">Password *</label>
          <input onclick="clearPass()" type="password" id="password" class="form-input" placeholder="enter your password">
        </div>

        <div class="form-group right">
          <label for="confirm-password" class="label-title">Confirm Password *</label>
          <input onclick="clearPass2()" type="password" class="form-input" id="confirm-password" placeholder="enter your password again">
        </div>

      </div>
    </div>

      

      <!-- Footer -->
      <div class="form-footer">
        <span id="feedback">* Required </span>
        <button type="button" onclick="register()" class="btn"> Create </button>
      </div>
    </form>
    
    
    <script src="js/main.js" defer></script>
</body>
</html>