<?php

session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true){
    header("location: login.php");
}
?> 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Country Panel</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon/favicon.ico"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
        <link rel="stylesheet" href="font-awesome-4.7.0\css\font-awesome.min.css">
        <link rel="stylesheet" href="css/styleE.css">
    </head>
    <style>
        /* .choice{
        width: 100%;
        } */
        .btn{
            background-color: #263855;
            border: none;
            padding: 10px;
            color: #fff;
        }
        .btn:hover{
            background-color: #05668d;
            color: aliceblue;
        }
        .loader_bg{
        position: fixed;
        z-index: 999999;
        background-color: #fff;
        width: 100%;
        height: 100%;
    }
    .loader{
        border: 0 solid transparent;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        position: absolute;
        top: calc(50vh - 75px);
        left: calc(50vw - 75px);
    }
    .loader:before, .loader:after{
        content: '';
        border: 1em solid #57cc99;
        border-radius: 50%;
        width: inherit;
        height: inherit;
        position: absolute;
        top: 0;
        left: 0;
        animation: loader 2s linear infinite;
        opacity: 0;
    }
    .loader:before{
        animation-delay: .5s;
    }
    @keyframes loader {
        0%{
            transform: scale(0);
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            transform: scale(1);
            opacity: 0;
        }
    }
    </style>
<body>
<div class="loader_bg">
        <div class="loader">
    </div>
    </div>
    <nav class="navbar navbar-light bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img id="logo" src="logo/countryPanel.png" alt="Logo">
          </a>
        </div>
      </nav>
      <div class="containerBx">
        <div class="score left">
          <h3><?php echo $_SESSION['username']; ?>, You have guessed</h3>
          <div id="main"> 
            <h2>10 / 30</h2>
            <h3>countries of Europe correctly</h3>
            <h5>Keep it up!</h5>
            </div>
            <button type="button" class="btn choice" onclick="explore()">Explore other continents</button>
            <p>or</p>
            <button type="button" class="btn choice" onclick="exitPage()">Logout &nbsp;
            <i class="fa fa-sign-out" aria-hidden="true"></i></button>
        </div>
          <div class="right">
          <h1>Your Analysis</h1>
          <h3>Continent: </h3>
          <p><i class="fa fa-globe" aria-hidden="true"></i> Europe</p>
          <h3>Countries visited: </h3>
          <p><i class="fa fa-flag" aria-hidden="true"></i> 20</p>
          <h3>Guessed correctly: </h3>
          <p><i class="fa fa-check" aria-hidden="true"></i> 10 countries</p>
        </div>
    </div>
    <script src="js/script2.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_pkanqwys.json"  background="transparent" id="confetti" speed="1"  style="width: 675px; height: 323px;" autoplay></lottie-player>
    <footer>
      <p>&copy; Copyright, Country Panel, 2021. All rights reserved.</p>
  </footer>
  <script>
    function explore(){
    window.location.href = "home.php";
    }
    function exitPage(){
      window.location.href = 'logout.php';
    }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        setTimeout(function(){
            $('.loader_bg').fadeToggle();
        }, 400);
    </script>
</body>
</html>