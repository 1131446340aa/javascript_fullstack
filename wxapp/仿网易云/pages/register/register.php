<?php		
// 设置数据库主机名，账号，密码
$test = mysql_connect("localhost", "root", "1131446340aa")or die("Mysql Connect Error");
// 数据库库名
mysql_select_db("test");
// 设置编码，否则可能会出错
mysql_query("SET NAMES UTF8");
// 设置时区，避免出错
ini_set("date.timezone", "PRC");
$sql = "select * from users where id=14";
$result = mysql_query($sql, $test);
if (mysql_num_rows($result) > 0) {// 输出小程序数组
	// $data = array();
	// while($row = mysql_fetch_array($result)){
	// 	//键值对必须用""包裹，不能用''，否则会报错
    //     $zifu = '{"id":"'.$row['id'].'","nicheng":"'.$row['nicheng'].'","content":"'.$row['content'].'","time":"'.date("Y-m-d H:i:s", $row['time']).'"}';
    //     //将json格式的字符串解码成对象，加true参数时解码成数组
    //     $data[] = json_decode($zifu);
	// }
	// //将请求结果转换为json格式，微信只能对json格式的数据进行操作
	echo json_encode("1");	
}
mysql_close($test);
?>