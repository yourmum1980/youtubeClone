<?php
require_once("includes/header.php");


$subscriptionsProvider = new subscriptionsProvider($con, $userLoggedInObj);
$videos = $subscriptionsProvider->getVideos();

$videoGrid = new VideoGrid($con, $userLoggedInObj);


?>

<div class="largeVideoGridContainer">
    <?php
        if(sizeof($videos) > 0) {
            echo $videoGrid->createLarge($videos, "New from your subscriptions", false);
        } else {
            echo "No videos to show";
        }
    ?>
</div>