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
    <title>Home | Country Panel</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon/favicon.ico"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="font-awesome-4.7.0\css\font-awesome.min.css">
    <!-- <link rel="stylesheet" href="css/styleH.css"> -->
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Sigmar+One&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    .rules{
        position: absolute;
        top: 10%;
        left: 27%;
        padding: 20px;
        padding-bottom: 0%;
        width: 640px;
        height: 540px;
        z-index: 20;
        /* border: 1px solid black; */
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    .rules h3{
        font-weight: 570;
        text-transform: uppercase;
        font-size: 2em;
        letter-spacing: 1px;  
        text-align: center;
    }
    .rules h4{
        text-align: center;
    }
    .rules p{
        font-weight: 300;
        font-size: 17px;
        letter-spacing: 0.5px;
        text-align: left;
    }
    .bgimg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
        filter: blur(4px);

    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        mix-blend-mode: screen;
    }
    a{
        color: #3c9770;
        font-weight: 300;
    }
    a:hover{
        color: #80ed99;
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
    <img class="bgimg" src="imgs/bgrules.jpg">
    <div class="overlay"></div>
    <div class="rules">
        <h3>Some of the pre-requisites or rules before you start exploring....</h3>
        <h6>Hey, sorry to grab your time but please read these before you start</h6>
        <p>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            Have a basic idea of the rough geographical location of the continents on the map.
        </p>
        <p>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            You get a point only when you guess the answer in the first attempt.
        </p>
        <p>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            Even though you could not answer in first attempt you will be able to attempt and move forward but you will not be getting a point.
        </p>
        <p>
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            Last but not the least...just a little bit of excitement and interest to explore....<i class="fa fa-smile-o" aria-hidden="true"></i>
        </p>
        <h4>Now, choose your continent to start the quiz . . . . . <a href="home.php">Let's start choosing</a></h4>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        setTimeout(function(){
            $('.loader_bg').fadeToggle();
        }, 1300);
    </script>
</body>
</html>