<?php session_start();
	include_once("../lib/mysql.php");
	include_once("../lib/functions.php");
	if($_POST['email']!="")
	{
		$address = checkInput($_POST['address']);
		$cellphone = checkInput($_POST['cellphone']);
		$fullname = checkInput($_POST['fullname']);
		$password = checkInput($_POST['password']);
		$cpassword = checkInput($_POST['cpassword']);
		$frequency = checkInput($_POST['frequency']);
		$email = checkInput($_POST['email']);

		if($password==$cpassword)
		{
			$password = sha1($password);

			$sql = "SELECT * FROM member WHERE account = '$email'";
			$result = exe_sql(DATABASE, $sql);
			if($result[0]['account'] != $email )
			{
				$data_array['account'] =  $email;
				$data_array['password'] = $password;
				$data_array['fullname'] = $fullname;
				$data_array['card'] = '';
				$data_array['cellphone'] = $cellphone;
				$data_array['address'] = $address;
				$data_array['brand'] = 0;
				$data_array['method'] = 0;
				$data_array['verification'] = sha1($data_array['account'].$data_array['deadline']);
				$data_array['deadline'] = (time()+(24 * 60 * 60));
				$data_array['verify_status'] = 0;
				$data_array['level'] = 0;
				$table="member";
				if(insert(DATABASE, $table, $data_array)){
					//header("HTTP/1.1 301 Moved Permanently");
					//header("Location: membership.php");
					echo "OK";
					$_SESSION['account'] = $email;
					getMemberData($_SESSION['account']);
					if(count($_POST["cartId"])>0)
					{
						$key_column = "MID";
						$id = $_SESSION['mid'];
						$table ="cart";
						$sql_array['STATUS'] = 1;
						update(DATABASE, $table, $sql_array, $key_column, $id);
						//VOID CART

						for($i=0;$i<count($_POST["cartId"]);$i++)
						{
							$data_array['MID'] = $_SESSION['mid'];
							$data_array['PID'] = $_POST["cartId"][$i];
							$data_array['QTY'] = $_POST["number"][$i];
							$data_array['AMOUNT'] = $_POST["price"][$i];
							$table = "cart";
							insert(DATABASE, $table, $data_array);
						}
					}
				}
			}else{
				echo "此信箱已註冊，請查詢密碼！";
			}
		}else{
				echo "你輸入兩次的密碼不一樣！";
		}
	}else{
		echo "no data";
	}

?>