
//2014/08/04 Paul edited

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
			alert('登入成功OK1');
			showMap();
			loadCtrlBoard();
			alert('登入成功OK2');
		}
		else
		{
				alert('登入失敗');
		}
	},{scope: 'email,public_profile'});
}

function rrr(uid,name,first_name,last_name,email,gender,link,locale,timezone,updated_time){
	
	document.getElementById('status').innerHTML =
					'<form method="post" target="upload" id="rrr" style="display:none;">id:<input type="text" id="uid" name="uid" value="'+ uid +'"><br>name:<input type="text" id="name" name="name" value="'+ name +'"><br>first_name:<input type="text" id="first_name" name="first_name" value="'+ first_name +'"><br>	last_name:<input type="text" id="last_name" name="last_name" value="'+ last_name +'"><br>mail:<input type="text" id="email" name="email" value="'+ email +'"><br>gender:<input type="text" id="gender" name="gender" value="'+ gender +'"><br>	link:<input type="text" id="link" name="link" value="'+ link +'"><br>	locale:<input type="text" id="locale" name="locale" value="'+ locale +'"><br>	timezone:<input type="text" id="timezone" name="timezone" value="'+ timezone +'"><br>updated_time:<input type="text" id="updated_time" name="updated_time" value="'+ updated_time +'"><br><input type="submit" value="ok"></form>';
	document.getElementById('rrr').submit();
}

function FBLoginOut()
{
	FB.logout(function(response) {
		alert('Logged out.');
		unLoadCtrlBoard();
		closeMap();
	});
}
