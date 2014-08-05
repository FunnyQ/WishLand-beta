
<?
include("lib/mysql.php");
$sql = "SELECT * FROM `event` WHERE id=".$_POST['wishId']." ORDER BY id DESC LIMIT 0 , 1";
$result = exe_sql(DATABASE, $sql);
$getContent = $result[0]['content'];
$getTimestamp = $result[0]['timestamp'];
$getCategory = $result[0]['category'];
$getLat = $result[0]['lat'];
$getLng = $result[0]['lng'];

$arrayCateImg[] = "<i class='fa fa-photo'></i>";
$arrayCateImg[] = "<i class='fa fa-cutlery'></i>";
$arrayCateImg[] = "<i class='fa fa-dribbble'></i>";
$arrayCateImg[] = "<i class='fa fa-users'></i>";

$arrayCateText[] = "藝文";
$arrayCateText[] = "美食";
$arrayCateText[] = "運動";
$arrayCateText[] = "社交";

?>
<h3><i class="fa fa-list-alt fa-lg"></i> 願望詳細內容<? echo $_POST['wishId'];?></h3>

<!-- 許願者欄位，可 follow 人 -->
<div class="wish-owner">
  <!-- <h4><i class="fa fa-child fa-lg"></i> 許願者：</h4> -->
  <div class="owner-inner">
    <div class="owner-avatar">
      <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
    </div>
    <div class="owner-name">
      <span>Takeshi Kaneshiro</span>
      <button><i class="fa fa-heart-o"></i> Follow </button>
    </div>
  </div>
</div>

<!-- 願望標題 -->
<div class="wish-title">
  <div class="inner">
    <p><i><?echo $getContent;?></i></p><br />
    <p class="signature">by <span>Takeshi</span></p>
  </div>
</div>

<!-- 其他詳細資訊 -->
<div class="other-info">
  <div class="detail">
    <h4>
      <span class="fa-stack">
        <i class="fa fa-square fa-stack-2x"></i>
        <i class="fa fa-folder-open-o fa-stack-1x fa-inverse"></i>
      </span>
      願望類別
      <p>
        <?echo $arrayCateImg[$getCategory];?> <?echo $arrayCateText[$getCategory];?>
      </p>
    </h4>
  </div>

  <div class="detail">
    <h4>
      <span class="fa-stack">
        <i class="fa fa-square fa-stack-2x"></i>
        <i class="fa fa-clock-o fa-stack-1x fa-inverse"></i>
      </span>
      許願時間
      <p>
        <!--2014-08-03 （<span>2 天前</span>）-->
		<?echo $getTimestamp;?>
      </p>
    </h4>
  </div>

  <div class="detail">
    <h4>
      <span class="fa-stack">
        <i class="fa fa-square fa-stack-2x"></i>
        <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
      </span>
      許願地點
      <p>
        <?echo $getLat;?>,<?echo $getLng;?>
		<!--臺北火車站 （距離我 <span>3</span> 公里遠）-->
      </p>
    </h4>
  </div>
</div><!-- e/o 其他詳細資訊 -->

