<!DOCTYPE html>

<html>

<head>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }

        .center-cropped {
            width: 100%;
            height: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .background {
            background-color: black;
            padding-top: 1%;
        }

        .screen {
            width: 100%;
            min-height: 100vh;
            height: 100%;
        }

        .banner {
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            /* height: fit-content; */
            z-index: 1;
            /* position: absolute; */
            position: relative;
        }

        .banner-new {
            position: absolute;
            z-index: 2;
            width: 15%;
            top: 0;
            left: 1%;
        }

        .bannerArea {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .board {
            margin: 2.5%;
            background-color: black;
            border-radius: 3px;
            /* box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2); */
            /* transition: 0.3s; */
        }

        .detail {
            padding: 10px 16px;
            background-color: black;
            z-index: 0;
            border-radius: 5px;
        }

        .separator {
            margin: 0;
            padding: 0;
            display: block;
        }

        .banner-btn {
            position: absolute;
            z-index: 2;
            right: 1.6%;
            bottom: 5.5%;
            width: 11%;
        }

        .whiteText {
            color: white !important;
        }

        .ellipsis-1 {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            white-space: normal;
        }

        .font5vw {
            font-size: 5vw !important;
        }

        .font1vw {
            font-size: 1vw !important;
        }

        .center-img {
            display: block;
            margin: auto;
        }

        .arrow-size {
            width: 15%;
        }

        p {
            font-size: 5vw;
        }
    </style>
    <title>Announcement</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
</head>

<body>
    <div class="screen background">
        <div id="events" class="center-cropped">
        </div>
    </div>
    <script type="text/javascript" src="./resource/js/script.js"></script>
</body>

</html>