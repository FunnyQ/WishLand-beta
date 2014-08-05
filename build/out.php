<?session_start();?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
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
<script src="js/application.js"></script>

<script>
FBLoginOut();
</script>
<?
	unset($_SESSION['FBUSER_uid']);
	header('Location: http://www.foncon.com.tw/powish/');
	exit;
?>

</body>
</html>