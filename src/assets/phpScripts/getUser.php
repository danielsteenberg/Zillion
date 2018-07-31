<?php

$postdata = file_get_contents("php://input");
$dataDecode = json_decode($postdata);
$email = $dataDecode->email;
$password = $dataDecode->password;

$hashed_password = crypt($password);

// Allow from any origin
if(isset($_SERVER["HTTP_ORIGIN"]))
{
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}
else
{
    //No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
    header("Access-Control-Allow-Origin: *");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes

if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
{
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}


$con=mysqli_connect("localhost","webdexub_Daniel","Dani021193","webdexub_Zillion");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Perform queries
// $users = mysqli_query($con,"SELECT * FROM `Zillion_users` where email='$email' and password='$password'");
// while($row = mysqli_fetch_assoc($users))
//   $allUsers[] = $row;
// $rowsAll = mysqli_num_rows($users);

$users = mysqli_query($con,"SELECT * FROM `Zillion_users` where email='$email'");
while($row = mysqli_fetch_assoc($users))
  $allUsers[] = $row;
$rowsAll = mysqli_num_rows($users);

// echo json_encode($allUsers);

for($i = 0; $i <= $allUsers.length; $i++){
  if(hash_equals($allUsers[$i]['password'], crypt($password, $allUsers[$i]['password']))){
    echo json_encode($allUsers[$i]);
  }
  else{
    echo json_encode(null);
  }
}

mysqli_close($con);

?>
