<?php

$curDirPath = dirname(__FILE__);

// If DB sync is already running, terminate the script.
$dbSyncStatusFilePath = "$curDirPath/../../../syncStatus.txt";
$dbSyncStatus         = file_get_contents($dbSyncStatusFilePath);
if ($dbSyncStatus == '1')
{
    header('Content-type: text/html; charset=utf-8');
    exit('只今同期中です。5分程お待ちください。');
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
        <title>注文の管理｜Anyway-Grapes</title>
        <link rel="stylesheet" type="text/css" href="./dist/index.css">
    </head>
    <body class="body">
        <div id="root"></div>
        <div id="modal"></div>
    </body>
</html>
<script src="./dist/bundle.js"></script>
