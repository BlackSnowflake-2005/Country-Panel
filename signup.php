<?php

require_once "config.php";
$username = $email = $password = $confirm_password = "";
$username_err = $email_err = $password_err = $confirm_password_err = "";

if($_SERVER['REQUEST_METHOD'] == "POST"){
    //check if the username is empty
    if(empty(trim($_POST['username']))){
        $username_err = "Username Is Required.";
    }else{
        $sql = "SELECT id FROM user WHERE username = ?";
        $stmt = mysqli_prepare($conn, $sql);
        if($stmt){
            mysqli_stmt_bind_param($stmt, "s" , $param_username);
            //set the value of param_username
            $param_username = trim($_POST['username']);

            //try executing statement
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $username_err = "This username already exsits";
                }else{
                    $username = trim($_POST['username']);
                }
            }else{
                echo "Something went wrong";
            }
        }
    }
    mysqli_stmt_close($stmt);

    //check if the email is empty
    if(empty(trim($_POST['email']))){
        $email = "Email Is Required.";
    }else{
        $sql = "SELECT id FROM user WHERE email = ?";
        $stmt = mysqli_prepare($conn, $sql);
        if($stmt){
            mysqli_stmt_bind_param($stmt, "s" , $param_email);

            //set the value of param_email
            $param_email = trim($_POST['email']);

            //try executing statement
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $email_err = "This email already exsits";
                }else{
                    $email = trim($_POST['email']);
                }
            }else{
                echo "Something went wrong";
            }
        }
    }
    mysqli_stmt_close($stmt);


    //check for password

    if(empty(trim($_POST['password_1']))){
        $password_err = "Password cannot be blank";
    }elseif(strlen(trim($_POST['password_1'])) < 5){
        $password_err = "Password cannot be less than 5 char";
    }else{
        $password = trim($_POST['password_1']);
    }

    //validate the re-entered passowrd
    if(trim($_POST['password_2']) != trim($_POST['password_1'])){
        $password_err = "Passwords should match";
    }

    //if there are no error, then insert into the database
    if(empty($username_err) && empty($email_err) && empty($password_err)){
        $sql = "INSERT INTO user(username, email, password) VALUES(?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        if($stmt){
            mysqli_stmt_bind_param($stmt, "sss", $param_username, $param_email, $param_password);

            //set these parameter
            $param_username = $username;
            $param_email = $email;
            $param_password = password_hash($password, PASSWORD_DEFAULT);

            //try to execute the query
            if(mysqli_stmt_execute($stmt)){
                header("location: login.php");
            }else{
                echo "Something went wrong....Cannot redirect";
            }
        }
        mysqli_stmt_close($stmt);
    }
    mysqli_close($conn);
}
?>




<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign Up | Country Panel</title>
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
        <section>
            <div class="imgBox">
                <img id="logo" src="logo/countryPanel.png">
                <img src="imgs/globe2.jpg">
            </div>
            <div class="contentBox">
                <div class="formBox">
                    <h2>Sign Up</h2>
                    <br/><br/>
                    <form action="signup.php" method="POST">
                        <div class="inputBox">
                            <label for="username"><span>Username</span>
                            <input type="text" name="username">
                            </label>
                        </div>
                        <div class="inputBox">
                            <label for="email"><span>email</span>
                            <input type="email" name="email"></label>
                        </div>
                        <div class="inputBox">
                            <label for="password"><span>Password</span>
                            <input type="password" name="password_1"></label>
                        </div>
                        <div class="inputBox">
                            <label for="password"><span>Re-Enter Password</span>
                            <input type="password" name="password_2"></label>
                        </div>
                        <div class="inputBox">
                            <input type="submit" value="Sign Up">
                        </div>
                    </form>
                    <div class="inputBox">
                        <p>Already a member? <a href="login.php">Log In</a></p>
                    </div>
                <!-- <p>or</p>
                <h3>Sign Up With</h3>
                <ul class="sci">
                    <li><i class="fa fa-google" aria-hidden="true"></i></li>
                    <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                </ul> -->
                </div>
            </div>
        </section>
    </body>
</html>