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
    <div class="carousel_images">
        <p>Space invaders is a classic game made by Tomohiro Nishikado, here are some images of how the game looks and I hope you enjoy the game. </p>

        <section class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport">
            <li id="carousel__slide1"
                tabindex="0"
                class="carousel__slide">
              <div class="carousel__snapper">
                <a href="#carousel__slide4"
                   class="carousel__prev">Go to last slide</a>
                <a href="#carousel__slide2"
                   class="carousel__next">Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide2"
                tabindex="0"
                class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide1"
                 class="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide3"
                 class="carousel__next">Go to next slide</a>
            </li>
            <li id="carousel__slide3"
                tabindex="0"
                class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide2"
                 class="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide4"
                 class="carousel__next">Go to next slide</a>
            </li>
            <li id="carousel__slide4"
                tabindex="0"
                class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide3"
                 class="carousel__prev">Go to previous slide</a>
              <a href="#carousel__slide1"
                 class="carousel__next">Go to first slide</a>
            </li>
          </ol>
          <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">
              <li class="carousel__navigation-item">
                <a href="#carousel__slide1"
                   class="carousel__navigation-button">Go to slide 1</a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide2"
                   class="carousel__navigation-button">Go to slide 2</a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide3"
                   class="carousel__navigation-button">Go to slide 3</a>
              </li>
              <li class="carousel__navigation-item">
                <a href="#carousel__slide4"
                   class="carousel__navigation-button">Go to slide 4</a>
              </li>
            </ol>
          </aside>
        </section>
    </div>
    

    <script src="js/main.js"></script>
</body>
</html>