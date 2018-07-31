<?php

$postdata = file_get_contents("php://input");
$dataDecode = json_decode($postdata);
$name = $dataDecode->name;
$category = $dataDecode->category;
$active = $dataDecode->active;
$promoId = $dataDecode->promoId;

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
$zillionCompotition = mysqli_query($con,"INSERT INTO `zillion_compotitions` (name, url, category, active, promoId)
VALUES ('$name', 'test', '$category', '$active', '$promoId')");

if ($zillionCompotition === TRUE) {
    echo json_encode("New record created successfully");
} else {
    echo json_encode("Error: " . $zillionCompotition . "<br>" . $con->error);
}

mysqli_close($con);

?>
