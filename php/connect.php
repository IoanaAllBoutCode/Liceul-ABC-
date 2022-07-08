<?php
$emaial = $_POST['email'];
$password = $_POST['password'];
if(!empty($email)||!empty($password))
{
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword= "";
    $dbname = "test111";
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if(mysqliconnect_error()){
    die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    }
    else{
        $SELECT = "SELECT email From register Where email = ? Limit 1";
        $INSERT = "INSERT Into register (email, password) values(?, ?)";
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
    $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if($rnum==0)
        {
    $stmt->close();
            $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
        echo "Succes!";
        }
        else{
            echo "Contul nu exista";
        }
    $stmt->close();
    }
}
else{
    echo "Toate spatiile trebuie completate";
    die();
}
/*
 $conn = new mysqli('localhost', 'root', '', 'test111');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration (email, password) values(?, ?)");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    echo "registration Successful...";
    $stmt->close();
    $conn->close();
}*/
?>