<?php
//this script will handle login
session_start();

//check if user is already logged in
if(isset($_SESSION['username'])){
    header("location: rules.php");
    exit;
}
require_once "config.php";

$username = $password = "";
$err = "";

//if request method is post
if($_SERVER['REQUEST_METHOD'] == "POST"){
    if(empty(trim($_POST['username'])) || empty(trim($_POST['password']))){
        $err = "Please enter user name and password";
    }else{
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
    }

    if(empty($err)){
        $sql = "SELECT id, username, password FROM user WHERE username = ?";
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $param_username);
        $param_username = $username;

        //try executing the statement
        if(mysqli_stmt_execute($stmt)){
            mysqli_stmt_store_result($stmt);
            if(mysqli_stmt_num_rows($stmt) == 1){
                mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
                if(mysqli_stmt_fetch($stmt)){
                    if(password_verify($password, $hashed_password)){
                        //it means the password is correct, therefore, allow user to login
                        session_start();
                        $_SESSION["username"] = $username;
                        $_SESSION["id"] = $id;
                        $_SESSION["loggedin"] = true;

                        //redirect user to welcome page
                        header("location: rules.php");
                    }
                }
            }
        }
    }
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Country Panel</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon/favicon.ico"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="font-awesome-4.7.0\css\font-awesome.min.css">
    <link rel="stylesheet" href="css/styleLogin.css">
</head>
<body>
    <!-- <header>
        <h1>Country Panel</h1>
    </header> -->
    <section>
        <div class="imgBox">
            <img id="logo" src="logo/countryPanel.png">
            <img src="imgs/globe2.jpg">
        </div>
        <div class="contentBox">
            <div class="formBox">
                <h2>Login</h2>
                <br/><br/>
                <form action="" method="post">
                <div class="inputBox">
                    <label for="username"><span>Username</span>
                    <input type="text" name="username" placeholder="John Doe"></label>
                </div>
                <!-- <div class="inputBox">
                    <span>email</span>
                    <input type="email" name="email" placeholder="JohnDoe@example.com">
                </div> -->
                <div class="inputBox">
                    <label for="password"><span>Password</span>
                    <input type="password" name="password"></label>
                </div>
                <div class="remember">
                    <label><input type="checkbox" name=""> Remember me</label>
                </div>
                <div class="inputBox">
                    <input type="submit" value="Log In" name="">
                </div>
                <div class="inputBox">
                    <p>Not a member yet? <a href="signup.php">Sign Up</a></p>
                </div>
            </form>
            <!-- <p>or</p>
            <h3>Login With</h3>
            <ul class="sci">
                <li><i class="fa fa-google" aria-hidden="true"></i></li>
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
            </ul> -->
            </div>
        </div>
    </section>
    <!-- <footer>
        <p>&copy; Copyright, Country Panel, 2021. All rights reserved.</p>
    </footer> -->
</body>
</html>