<?php session_start();
	include_once("../lib/mysql.php");
	if($_POST['content']!="")
	{
		$table = "event";
		$data_array['title'] 	= $_POST['title'];
		$data_array['category'] = $_POST['category'];
		$data_array['tag'] 		= $_POST['tag'];
		$data_array['process'] 	= $_POST['process'];
		$data_array['priority'] = $_POST['priority'];
		$data_array['location'] = $_POST['location'];
		//$data_array['lat'] 		= $_POST['lat'];
		$data_array['lat'] 		= (rand(-800000000,800000000))/10000000;
		//$data_array['lng'] 		= $_POST['lng'];
		$data_array['lng'] 		= (rand(-1500000000,1500000000))/10000000;
		$data_array['time'] 	= $_POST['time'];
		$data_array['content'] 	= $_POST['content'];
		$data_array['limitt'] 	= $_POST['limitt'];
		$data_array['player'] 	= $_POST['player'];
		$data_array['w_belong'] = $_POST['w_belong'];
		$data_array['e_belong'] = $_POST['e_belong'];
		$data_array['counter'] 	= $_POST['counter'];
		insert(DATABASE, $table, $data_array);
		$sql = "SELECT id FROM `event` ORDER BY id DESC LIMIT 0 , 1";
		$result = exe_sql(DATABASE, $sql);
		$getWishId = $result[0]['id'];
		echo $getWishId.";".$data_array['lat'].",".$data_array['lng'];
	}

?>