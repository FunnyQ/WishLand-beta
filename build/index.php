<?	
session_start();
if($_SESSION['FBUSER_uid']!=''){
	header('Location: ttp://www.foncon.com.tw/powish/main.php');
	exit;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml"> <!--<![endif]-->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <!-- Use title if it's in the page YAML frontmatter -->
        <title>Po Wish</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/application.css">
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
		<script src="//connect.facebook.net/en_US/all.js"></script>
		<script>
			window.fbAsyncInit = function() {
				FB.init({
				appId : '1455451441374567', // App ID，請輸入 3.1 所又得的 App ID
				channelURL : '//www.foncon.com.tw/powish/channel.html', // 請輸入 3.2 所新增的 channel.html 網址
				status : true, // check login status
				cookie : true, // enable cookies to allow the server to access the session
				oauth : true, // enable OAuth 2.0
				xfbml : true // parse XFBML
				});
			};
		</script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->
		
<!-- 主要內容（index.html.erb） -->
<div class="main_content">

<!-- 如果是非登入使用者，看到 landing page -->

<div class="landing">
  <!-- landing page 內容 -->
  <div class="lp-content">
    <!-- logo -->
    <div class="lp-logo">
      <div class="logo">
        <img class="img-responsive" src="./img/landing-logo.png" alt="Po Wish" >
      </div>
    </div>

    <!-- slogan -->
    <div class="lp-slogan">
      <!-- <h5>讓願望成真</h5> -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <!-- facebook 登入按鈕，js -> fbLoginBtn，登入成功後 call showMap() & loadCtrlBoard() -->
    <a class="login-button" href="#" >
      <i class="fa fa-facebook-square fa-lg" ></i> 馬上登入許下願望
    </a>
  </div><!-- e/o .lp-content -->
</div><!-- e/o .landing -->

<!-- 如果是登入使用者，看到 map -->
<!-- 主要界面, js -> mainUI -->

</div><!-- e/o .main_content -->



<!-- 控制列（ctrl_board.html.erb） -->
<div class="ctrl_board">

<!-- 非登入使用者，先看到 not_user -->

<!-- 如果是登入使用者，或成功登入後 ajax 讀入 is_user.html -->

</div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
        <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script src="js/plugins.js"></script>
        <script src="js/application.js"></script>

<!-- Google Analystics -->
<div id='status' style="display:none;"></div>
</body>
</html>

<script>


</script>