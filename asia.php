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
    <title>Asia | Country Panel</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon/favicon.ico"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="font-awesome-4.7.0\css\font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .choice{
            width: 100%;
        }
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
        .next{
            visibility: hidden;
            position: absolute;
            top: 86%;
            left: 90%;
        }
        .log{
            display: inline;
        }
        #popup2 .content h5{
            display: inline;
            margin: 4px;
        }
        #popup2 .content h4{
            text-align: center;
        }
        .content1{
            margin: 40px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id='blur'>
    <nav class="navbar navbar-light bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img id="logo" src="logo/countryPanel.png" alt="Logo">
          </a>
          <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" onclick="toggle1()" style="cursor: pointer;">Logout &nbsp;<i class="fa fa-sign-out" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="heading">
          <h1>Asia</h1>
      </div>
      <section>
        <div class="main_quiz left">
          <div class="question row">
            <div class="col-lg-9">
                <h5>1. Kabul is the capital of?</h5>  
                </div>
                <div class="col-lg-3">
                    <span><h5 id="score_Display">Score: 0</h5></span>
                </div>
          </div>
          <div class="options_list">
            <div class="option">
                <label for="Venezuela" class="radio">
                    <input type="radio" name="list" id="Venezuela" class="radio__input" value="Venezuela">
                    <div class="radio__radio"></div>
                    Venezuela
                </label>
            </div>
            <div class="option">
                <label for="Bhutan" class="radio">
                    <input type="radio" name="list" id="Bhutan" class="radio__input" value="Bhutan">
                    <div class="radio__radio"></div>
                    Bhutan
                </label>
            </div>
            <div class="option">
                <label for="Afghanistan" class="radio">
                    <input type="radio" name="list" id="Afghanistan" class="radio__input" value="Afghanistan">
                    <div class="radio__radio"></div>
                    Afghanistan
                </label>
            </div>
            <div class="option">
                <label for="Chile" class="radio">
                    <input type="radio" name="list" id="Chile" class="radio__input" value="Chile">
                    <div class="radio__radio"></div>
                    Chile
                </label>
            </div>
        </div>
        <br/>
        <div class="count_que">
            <p>1 out of <strong>47</strong> countries.</p>
        </div>
        <button type="button" class="btn check">Check <i class="fa fa-check" 
            aria-hidden="true"></i></button>
        <button type="button" class="btn end" onclick="toggle()">End Quiz</button>
        <hr/>
        <p id="comment"></p>
    </div>
    <div class="right row">
        <div class="row">
            <div class="col">
                   <h6>Country: &nbsp;Australia</h6>
                    <h6>Capital: &nbsp;Canberra</h6>
                    <h6>Currency: Australian Dollar AU$ (AUD)</h6>
                    <h6>Offical Languages: &nbsp;English</h6>
            </div>
            <div class="col">
                    <img id="flag" src="flags/oceania/australiaFlag.png" alt="Flag">
            </div>
         </div>
          <br/>
            <p>
                            Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, 
                            the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the 
                            world's sixth-largest country by total area.
            </p>
            <p>Australia is globally famous for its natural wonders, wide-open spaces, beaches, deserts, "The Bush", 
                            and "The Outback". Australia is one of the world's most highly urbanised countries; 
                            it's well known for its attractive mega cities such as Sydney, Melbourne, Brisbane, and Perth.
            </p>
            <p>
                            You can check here for extra information: <a href="https://en.wikipedia.org/wiki/Australia">Australia</a>
            </p>
        </div>
        <button type="button" class="btn next">Next <i class="fa fa-angle-right" 
            aria-hidden="true"></i></button>
      </section>
      <footer>
        <p>&copy; Copyright, Country Panel, 2021. All rights reserved.</p>
    </footer>
    </div>
      <div id="popup">
        <div class="row">
            <div class="col" style="text-align: center; margin: auto;">

                <!-- <span>- - - - - - - - - </span> -->
                <h3 style="display: block; position: absolute; top: 37%; z-index: 6;">Hey, Are you sure you want to end?</h3>
                <!-- <span>- - - - - - - - - -->
                    <img src="continents/asia.png" style="display: block; height: 200px; width: 100%; opacity: 0.3; z-index: 4;">
                <!--</span> -->
            </div>
            
            <div class="col" style="margin-top: 10%;">
                <button type="button" class="btn choice" id="final_end" onclick="end()">Yes, I am done!</button>
                <br/><br/>
                <button type="button" class="btn choice" id="Continue" onclick="toggle()">No, I want to continue.</button>
                <!-- <br/><br/> -->
                <!-- <button type="button" class="btn choice" id="other_continents" onclick="home()">I want to explore other continents.</button>
                <br/><br/> -->
            </div>
        </div>
      </div>
      <div id="popup2">
        <div class="content">
            <h4>Hey, are you sure you are logging out?</h4>
            <div class="content1">
              <button type="button" class="btn choice log" onclick="logout()" style="width: 30%;">  Yes  </button>
              <h5> or </h5>
              <button type="button" class="btn choice log" onclick="toggle1()" style="width: 30%;">  No  </button>
            </div>
        </div>
    </div>
      <script src="js/script.js"></script>
    <script src="js/script3.js"></script>
    <script src="js/asiaJS1.js"></script>
    <script src="js/asiaInfo.js"></script>
    <script type="text/javascript">
        function toggle(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup = document.getElementById('popup');
            popup.classList.toggle('active');
        }
        function toggle1(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup2 = document.getElementById('popup2');
            popup2.classList.toggle('active');
        }
        function logout(){
            window.location.href = 'logout.php';
        }
    </script>
</body>
</html>