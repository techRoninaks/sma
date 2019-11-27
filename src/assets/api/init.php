<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');

// DB configuration
const DB_SMA_PR = "roninaks_smapr";
const DB_SMA_USER = "roninaks_smausr";
const DB_USER_NAME = "root";
const DB_USER_PASS = "";
const DB_HOST = "localhost";

$con1 = mysqli_connect(DB_HOST, DB_USER_NAME, DB_USER_PASS, DB_SMA_PR);
$con2 = mysqli_connect(DB_HOST, DB_USER_NAME, DB_USER_PASS, DB_SMA_USER);

// Check connection
if ($con1->connect_errno) {
    echo "Failed to connect to MySQL: " . $con1->connect_error;
    exit();
}

if ($con2->connect_errno) {
    echo "Failed to connect to MySQL: " . $con2->connect_error;
    exit();
}

mysqli_set_charset($con1, 'utf8');
mysqli_set_charset($con2, 'utf8');

spl_autoload_register(function ($class) {
    include strtolower($class) . '.class.php';
});
// Default connection will be DB_SMA_USER.
$dbObj = new MysqliDb(DB_HOST, DB_USER_NAME, DB_USER_PASS, DB_SMA_USER);
$dbObj->addConnection(
    'sma_pr',
    [
        'host' => DB_HOST,
        'username' => DB_USER_NAME,
        'password' => DB_USER_PASS,
        'db' => DB_SMA_PR,
        'port' => 3306,
        'prefix' => '',
        'charset' => 'utf8'
    ]
);
