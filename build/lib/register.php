<?
	if($_POST['uid']!= '')
	{
		$sqlb = "SELECT * FROM fblogin WHERE uid = ".$_POST['uid'];
		$resultb = exe_sql(DATABASE, $sqlb);
		
		if($resultb[0]['uid'] == $_POST['uid']){
			$_SESSION['FBUSER_uid'] =  $_POST['uid'] ;
			echo "歡迎回來";
		}else{
			$table = "fblogin";
			$data_array['uid'] = $_POST['uid'];
			$data_array['name'] = $_POST['name'];
			$data_array['first_name'] = $_POST['first_name'];
			$data_array['last_name'] = $_POST['last_name'];
			$data_array['email'] = $_POST['email'];
			$data_array['gender'] = $_POST['gender'];
			$data_array['link'] = $_POST['link'];
			$data_array['locale'] = $_POST['locale'];
			$data_array['timezone'] = $_POST['timezone'];
			$data_array['updated_time'] = $_POST['updated_time'];
			insert(DATABASE, $table, $data_array);
			$_SESSION['FBUSER_uid'] =  $_POST['uid'] ;
			echo "註冊成功!!";
		}
	}
	//echo $_SESSION['FBUSER_uid'];
?>