<?session_start();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
</head>
<body>
<div id="fb-root"></div>
<script src="//connect.facebook.net/en_US/all.js"></script>
<script>
window.fbAsyncInit = function() {
FB.init({
appId : '1455451441374567', // App ID，請輸入 3.1 所又得的 App ID
channelURL : '//www.foncon.com.tw/paul/fblogin/channel.html', // 請輸入 3.2 所新增的 channel.html 網址
status : true, // check login status
cookie : true, // enable cookies to allow the server to access the session
oauth : true, // enable OAuth 2.0
xfbml : true // parse XFBML
});
};

function FBLogin()
{
	FB.login(function(response) 
	{
		if (response.authResponse) 
		{
			alert('登入成功');
			var uid = response.authResponse.userID;
			FB.api('/me', 
			function(response)
			{
				var name 			= response.name;
				var first_name 		= response.first_name;
				var last_name 		= response.last_name;
				var email 			= response.email;
				var gender 			= response.gender;
				var link 			= response.link;
				var locale			= response.locale;
				var timezone 		= response.timezone;
				var updated_time 	= response.updated_time;
				
				rrr(uid,name,first_name,last_name,email,gender,link,locale,timezone,updated_time);
			}
			);
			
		}
		else
		{
				alert('登入失敗');
		}
	},{scope: 'email,public_profile'});
	//rrr();
}

function rrr(uid,name,first_name,last_name,email,gender,link,locale,timezone,updated_time){
	//alert('go');
	//alert(uid);
	document.getElementById('status').innerHTML =
					'<form method="post" action="logout.php" target="upload" id="rrr">id:<input type="text" id="uid" name="uid" value="'+ uid +'"><br>name:<input type="text" id="name" name="name" value="'+ name +'"><br>first_name:<input type="text" id="first_name" name="first_name" value="'+ first_name +'"><br>	last_name:<input type="text" id="last_name" name="last_name" value="'+ last_name +'"><br>mail:<input type="text" id="email" name="email" value="'+ email +'"><br>gender:<input type="text" id="gender" name="gender" value="'+ gender +'"><br>	link:<input type="text" id="link" name="link" value="'+ link +'"><br>	locale:<input type="text" id="locale" name="locale" value="'+ locale +'"><br>	timezone:<input type="text" id="timezone" name="timezone" value="'+ timezone +'"><br>updated_time:<input type="text" id="updated_time" name="updated_time" value="'+ updated_time +'"><br><input type="submit" value="ok"></form>';
	document.getElementById('rrr').submit();
}


function FBLoginOut(){
FB.logout(function(response) {
alert('Logged out.');
});
}

</script>
	<? echo $_SESSION['FBUSER_uid']."<br>"; ?>
	<input type="button" id="pp" value="登入" onclick="FBLogin()"><br>
	<input type="button" id="qq" value="登出" onclick="FBLoginOut();location.href='out.php'"><br>
<div id='status' ></div>
</body>
</html>
