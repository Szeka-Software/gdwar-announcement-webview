<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" href="../resource/static/css/style.css">
    <title>Announcement</title>
    <meta name="platform" content="jgg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
</head>

<body>
    <div class="screen background">
        <div id="events" class="center-cropped">
            <div class="board" id="202207251216">
                <div class="bannerArea">
                    <img id="banner" class="banner separator" src="../resource/jgg/banner/banner_maintain.png">
                    <img id="new" class="banner-new" src="../resource/static/images/new.png">
                </div>
                <div class="detail">
                    <div id="content" class="content">
                        <p class="whiteText font5vw">
                            <span >親愛的艦長大人：<br><br>目前遊戲登入異常，玩家無法登入遊戲，遊戲製作團隊正全力搶修。如有任何申訴歡迎加入以下群組。</span>
                            <br><br>
                            <span id="account"></span>
                            <br><br>
                            <span>另外玩家可加入到以下玩家群組討論</span>
                            <br>
                            <span>Telegram：</span>
                            <br>
                            <span><a href="https://t.me/+geJHdvwKnFBiZGI9">https://t.me/+geJHdvwKnFBiZGI9</a></span>
                            <span>Email：</span>
                            <br>
                            <span>cocoball286@gmail.com</span>

                        </p>
                    </div>
                </div>
                <img src="../resource/static/images/divider.png">
            </div>
        </div>
    </div>
    <script>
        function renderId() {
            var url = new URL(window.location.href);
            var id = url.searchParams.get('account');
            var ele = '<span>請玩家載圖保留以下帳號(為保障帳號安全，不要分享給任何人)<br><br><b>帳號：';
            ele +=  id;
            ele += '</b></span>';
            document.getElementById('account').innerHTML = ele;
        }
        window.onload = renderId();
    </script>
</body>

</html>