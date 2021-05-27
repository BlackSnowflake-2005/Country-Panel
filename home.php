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
    <link rel="stylesheet" href="css/styleH.css">
    <style>
        area{
            outline: none;
        }
        .loader_bg{
        position: fixed;
        z-index: 999999;
        background-color: #f0f0f0;
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
</head>
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
      <div class="globe"><img src="imgs/continentMap.png" alt="Worldmap" usemap="#worldmap">
        <map name="worldmap">
            <area title="North America" shape="poly" coords="45,96,125,107,133,102,157,99,163,75,170,61,189,47,289,
            20,329,11,362,7,385,9,413,16,440,14,477,8,517,8,559,13,565,22,604,23,574,43,576,73,563,91,566,103,548,
            114,589,123,595,135,571,147,551,140,536,115,521,118,510,134,492,134,481,160,455,161,430,122,431,112,417,77,
            378,73,361,56,349,77,410,122,401,150,436,194,445,220,420,225,382,242,357,269,339,289,406,324,418,334,396,
            339,365,335,337,334,342,364,301,352,238,330,173,275,160,253,162,220,139,205,115,174,77,165,51,182,23,191,7,198,3,
            183,36,172,15,165,8,152,11,138,2,125,17,106" alt="North America" href="northAmerica.php" target="_self" id="NorthAmerica">

            <area title="Asia" shape="poly" coords="1348,123,1323,111,1333,96,1318,96,1307,105,1248,105,1241,97,1215,100,
            1204,90,1186,84,1184,77,1216,72,1179,65,1170,62,1157,68,1170,80,1153,95,1143,92,1137,99,1129,91,1138,83,1106,
            78,1105,88,1070,76,1072,64,1048,59,1041,48,1020,36,1010,30,1003,23,981,40,1010,52,1003,60,920,89,909,77,888,
            94,891,108,901,113,896,115,885,134,864,184,876,205,838,201,831,221,840,223,828,231,842,245,839,247,842,264,
            826,256,828,254,820,240,790,234,795,242,768,240,754,247,738,251,750,262,773,263,768,284,804,346,839,335,854,
            335,868,316,856,306,837,308,873,301,823,228,829,285,849,301,857,297,863,303,891,300,905,314,909,319,914,318,
            915,324,933,365,942,359,942,369,951,367,943,357,943,338,940,319,985,316,998,330,993,338,984,351,990,355,997,
            342,1007,332,1007,368,992,370,1032,409,1102,428,1132,416,1148,415,1170,420,1175,395,1153,392,1130,381,1116,
            352,1103,336,1103,319,1108,302,1108,282,1108,265,1134,293,1144,278,1180,269,1184,244,1210,229,1207,221,1191,
            220,1194,185,1223,174,1223,198,1212,215,1218,220,1257,182,1263,172,1279,161,1290,165,1320,153,1325,137" 
            alt="ASIA" href="asia.php" target="_self" id="Asia">

            <area title="South America" shape="poly" coords="507,415,491,435,485,466,454,476,448,500,424,514,424,523,
            405,531,398,540,387,553,386,560,391,563,379,578,359,581,352,569,355,553,372,455,350,440,335,411,339,400,
            334,392,347,379,346,366,363,352,384,355,400,355,417,369,438,369,452,389,471,392" alt="South America" 
            href="southAmerica.php" target="_self" id="SouthAmerica" >

            <area title="Africa" shape="poly" coords="832,354,817,382,788,408,796,444,823,427,832,446,822,479,807,479,802,465,807,
            460,792,446,774,458,778,417,763,477,762,490,733,509,713,511,706,498,695,485,694,467,681,448,693,428,687,417,691,416,683,
            401,672,397,676,378,660,378,655,366,632,375,622,373,610,377,591,366,589,359,577,349,577,327,573,317,588,297,604,290,
            602,277,616,267,631,267,680,260,681,273,700,276,712,286,715,276,751,281,769,283,770,292,766,300,791,338,801,343,
            808,354" alt="AFRICA" href="africa.php" target="_self" id="Africa">

            <area title="Europe" shape="poly" coords="901,61,895,65,875,70,852,90,859,101,867,106,895,113,884,134,867,183,
            869,203,842,201,830,218,818,228,824,242,795,235,778,228,763,228,757,220,745,238,753,245,737,250,742,264,740,270,727,
            269,715,252,713,242,701,236,689,227,686,228,693,236,702,242,709,249,704,250,700,259,688,256,699,252,679,238,677,254,
            668,254,670,239,678,234,664,238,652,236,653,243,643,247,642,254,621,263,604,261,602,255,605,243,605,233,631,233,
            635,222,619,214,626,209,614,206,617,199,603,205,596,197,603,194,598,190,612,178,611,165,630,162,634,177,651,196,657,
            188,699,188,664,173,652,153,675,137,695,110,701,65,677,49,677,37,700,37,700,33,743,33,811,28,877,22,889,32" 
            alt="EUROPE" href="europe.php" target="_self" id="Europe">

            <area title="Oceania" shape="poly" coords="1173,420,1173,396,1183,399,1194,406,1199,406,1208,404,1213,405,
            1206,399,1219,397,1221,405,1246,414,1264,434,1283,438,1301,451,1317,437,1330,446,1319,458,1304,511,1311,520,
            1319,520,1303,539,1296,549,1285,551,1279,563,1270,563,1269,556,1291,531,1295,522,1285,509,1267,471,1248,460,
            1221,473,1222,488,1208,517,1211,527,1204,528,1201,548,1193,550,1181,537,1167,526,1164,516,1153,520,1141,503,
            1131,500,1108,509,1094,509,1079,514,1071,506,1075,498,1062,478,1065,462,1095,454,1098,441,1115,434,1127,438,
            1133,421,1158,427,1158,440,1169,444" alt="Australia" href="oceania.php" target="_self" id="Australia">
        </map>
    </div>
    <!-- <div class="rules">
        <hr class="line"/>
        <h3>Some of the pre-requisites or rules before you start exploring....</h3>
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
        </p><br/>
    </div> -->
    <footer>
        <p>&copy; Copyright, Country Panel, 2021. All rights reserved.</p>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        setTimeout(function(){
            $('.loader_bg').fadeToggle();
        }, 1100);
    </script>
</body>
</html>