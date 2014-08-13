<?
  session_start();
  include("lib/mysql.php");
  //include("lib/register.php");
  if($_POST['uid'] != '')
  {
    $sqlb = "SELECT * FROM member WHERE uid = ".$_POST['uid'];
    $resultb = exe_sql(DATABASE, $sqlb);

    if($resultb[0]['uid'] == $_POST['uid'])
    {
      $_SESSION['FBUSER_uid'] =  $_POST['uid'] ;
      //echo "歡迎回來";
    }
    else
    {
      $table = "member";
      $data_array['uid'] = $_POST['uid'];
      $data_array['firstname'] = $_POST['first_name'];
      $data_array['lastname'] = $_POST['last_name'];
      $data_array['account'] = $_POST['email'];
      $data_array['gender'] = $_POST['gender'];
      $data_array['link'] = $_POST['link'];
      $data_array['locale'] = $_POST['locale'];
      $data_array['timezone'] = $_POST['timezone'];
      $data_array['updated_time'] = $_POST['updated_time'];
      insert(DATABASE, $table, $data_array);
      $_SESSION['FBUSER_uid'] =  $_POST['uid'] ;
      //echo "註冊成功!!";
    }
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
<!-- 如果是登入使用者，看到 map -->
<!-- 主要界面, js -> mainUI -->
  <div class="mainUI">

    <div class="overlay"></div>
    <div class="overlay-lv2"></div>
    <!-- GoogleMap, js -> mapCanvas -->
    <div id="map" class="map"></div>

    <!-- 使用者頭像，用於切換類別 -->
    <a href="#" id="change_category" class="avatar" title="切換活動與願望顯示類別" data-toggle="tooltip" data-placement="top">
      <img class="img-responsive img-circle" src="./img/dummy-avatar.jpg" alt="">
    </a>

    <!-- 許願表單， js -> makeWishForm -->
    <div class="make-wish">
      <h3><i class="fa fa-edit fa-lg"></i> 許願卡</h3>
      <form name="makeWish" class="form-horizontal" role="form" id="makeWish">

        <!-- 願望 title -->
        <div class="form-wraper">
          <h4>
            <span class="fa-stack">
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-comment fa-stack-1x fa-inverse"></i>
            </span>
            我想要...
          </h4>
          <input name="content" type="text" class="form-control" id="wish-title" placeholder="請寫下你的願望">
        </div>

        <!-- 願望 category，會預設為使用者目前瀏覽的類別 -->
        <div class="form-wraper">
          <h4>
            <span class="fa-stack">
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-folder-open-o fa-stack-1x fa-inverse"></i>
            </span>
            願望類別
          </h4>
          <select name="category" id="wish-cate" class="form-control" >
            <option value="0">藝文</option>
            <option value="1">美食</option>
            <option value="2">運動</option>
            <option value="3">社交</option>
          </select>
        </div>

        <!-- 願望 location，預設為使用者目前位置 -->
        <div class="form-wraper" style="display:none;">
          <h4>
            <span class="fa-stack">
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
            </span>
            願望地點
          </h4>
          <input type="text" class="form-control" id="wish-local" value="臺北火車站">
        </div>

        <div class="button-wraper">
          <button type="button" class="form-cancel">取消</button>
          <button type="button" class="form-submit">送出願望！</button>
        </div>


      </form>

    </div>

    <!-- 詳細資料面板，願望或活動詳細內容顯示區， js -> infoPanel -->
    <div class="info-panel">
      <!-- 願望詳細內容 -->
      <div class="wish-detail">
        <div class="info-section">
        <!-- ajax 讀入詳細內容 -->
        </div>

        <!-- 按鈕們 -->
        <div class="option-buttons">
          <div class="row">
            <div class="observe">
              <button><i class="fa fa-star-o fa-lg"></i> 關注願望</button>
            </div>
          </div>
          <div class="row">
            <div class="share"><button>分享 <i class="fa fa-share-alt"></i></button></div>
            <div class="host"><button>實現 <i class="fa fa-magic"></i></button></div>
            <div class="comment"><button>留言 <i class="fa fa-comment"></i></button></div>
          </div>
        </div>

      </div>

      <!-- 活動詳細內容 -->
      <div class="event-detail">

        <div class="info-section">
        <!-- ajax 讀入詳細內容 -->
        </div>

        <!-- 按鈕們 -->
        <div class="option-buttons">
          <div class="row">
            <div class="observe">
              <button><i class="fa fa-star fa-lg"></i> 關注活動</button>
            </div>
          </div>
          <div class="row">
            <div class="share"><button>分享 <i class="fa fa-share-alt"></i></button></div>
            <div class="join"><button>參加 <i class="fa fa-hand-o-up"></i></button></div>
            <div class="comment"><button>留言 <i class="fa fa-comment"></i></button></div>
          </div>
        </div>

      </div>

    </div>

    <!-- 熱門活動與願望、附近活動與願望 -->
    <div class="list-view">

    </div>

    <!-- 分享視窗 -->
    <div class="share-form">
      <h3><i class="fa fa-share-alt fa-lg"></i> 分享給朋友</h3>
      <form class="form-horizontal" role="form">
        <!-- 分享內容-->
        <div class="form-wraper">
          <h4>
            <i class="fa fa-comment-o fa-lg"></i>
            分享內容
          </h4>
          <textarea class="form-control" rows="4"></textarea>
        </div>
        <div class="button-wraper">
          <button class="share-fb" type="submit" class="form-cancel"><i class="fa fa-facebook-square fa-lg"></i> 分享到 Facebook</button>
          <button class="share-twitter" type="submit" class="form-cancel"><i class="fa fa-twitter fa-lg"></i> 分享到 Twitter</button>
          <button class="share-weibo" type="submit" class="form-cancel"><i class="fa fa-weibo fa-lg"></i> 分享到 微博</button>
          <button class="share-email" type="submit" class="form-cancel"><i class="fa fa-facebook-square fa-lg"></i> 透過 Email 分享</button>
          <button type="button" class="form-cancel">取消</button>
        </div>
      </form>
    </div>

    <!-- 實現願望表單視窗 -->
    <div class="host-form">
      <h3><i class="fa fa-magic fa-lg"></i> 讓願望實現</h3>

      <!-- 原始的願望，包含許願者和願望內容 -->
      <div class="original-wish">
        <!-- 許願者頭像 -->
        <div class="owner-avatar">
          <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
        </div>
        <!-- 許願者名字 -->
        <div class="owner-name">
          <span>Takeshi</span> <span>的願望：</span>
        </div>
        <!-- 原始願望內容 -->
        <div class="wish-title">
          <i>想和不認識的你慢慢喝杯奶茶...</i>
        </div>
      </div><!-- e/o .original-wish -->

      <form class="form-horizontal" role="form">
        <!-- 顯示原始類別，無法更改 -->
        <div class="form-wraper">
          <h4>
            <i class="fa fa-folder-open-o fa-lg"></i> 活動類別：
          </h4>
          <select class="form-control" disabled>
            <option>藝文</option>
            <option selected="selected">美食</option>
            <option>運動</option>
            <option>社交</option>
          </select>
        </div>

        <!-- 設定活動標題 -->
        <div class="form-wraper">
          <h4>
            <i class="fa fa-lightbulb-o fa-lg"></i> 設定活動標題：
          </h4>
          <input type="text" class="form-control" id="wish-title" placeholder="例如：Tabasco 無限暢飲大賽">
        </div>

        <!-- 設定活動時間 -->
        <div class="form-wraper">
          <h4>
            <i class="fa fa-calendar fa-lg"></i> 決定活動時間：
          </h4>
          <input type="date" class="form-control" id="wish-title" placeholder="">
        </div>

        <!-- 設定活動票價 -->
        <div class="form-wraper">
          <h4>
            <i class="fa fa-money fa-lg"></i> 設定活動票價：
          </h4>
          <input type="number" class="form-control" id="wish-title" placeholder="200">
        </div>

        <!-- 設定活動票價 -->
        <div class="form-wraper">
          <h4>
            <i class="fa fa-child fa-lg"></i> 設定人數限制：
          </h4>
          <select class="form-control">
            <option>10 人內</option>
            <option>25 人內</option>
            <option>50 人內</option>
          </select>
        </div>

        <div class="button-wraper">
          <button type="button" class="form-cancel">取消</button>
          <button type="submit" class="form-submit">舉辦活動！</button>
        </div>

      </form>

    </div><!-- e/o host-form -->


    <!-- 留言討論視窗 -->
    <div class="view-comments">
      <h3><i class="fa fa-comments-o fa-lg"></i> 留言牆</h3>

      <!-- 目前 event 上的留言 -->
      <div class="everyones-comments">
        <div class="timeline">

          <!-- comment unit -->
          <div class="comment-unit">

            <div class="comment-time">
              <span class="commenter-avatar">
                <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
              </span>
              <span class="time">
                1 分鐘前
              </span>
            </div>

            <div class="comment-info">
              <div class="commenter-name">
                <span>Takeshi</span> 說：
              </div>
              <div class="comment-content">
                <p>有史寶近，的前勢也；是總是方係藝，如中東入到時經一臺部級不。長球親縣民可們告能美向兩現國照大這節起算性自得完政持向。</p>
              </div>
            </div>

          </div>
          <div class="comment-unit">

            <div class="comment-time">
              <span class="commenter-avatar">
                <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
              </span>
              <span class="time">
                0 分鐘前
              </span>
            </div>

            <div class="comment-info">
              <div class="commenter-name">
                <span>Takeshi</span> 說：
              </div>
              <div class="comment-content">
                <p>有史寶近，的前勢也；是總是方係藝，如中東入到時經一臺部級不。長球親縣民可們告能美向兩現國照大這節起算性自得完政持向。</p>
              </div>
            </div>

          </div>
          <div class="comment-unit">

            <div class="comment-time">
              <span class="commenter-avatar">
                <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
              </span>
              <span class="time">
                50 分鐘前
              </span>
            </div>

            <div class="comment-info">
              <div class="commenter-name">
                <span>Takeshi</span> 說：
              </div>
              <div class="comment-content">
                <p>有史寶近，的前勢也；是總是方係藝，如中東入到時經一臺部級不。長球親縣民可們告能美向兩現國照大這節起算性自得完政持向。</p>
              </div>
            </div>

          </div>
          <div class="comment-unit">

            <div class="comment-time">
              <span class="commenter-avatar">
                <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
              </span>
              <span class="time">
                35 分鐘前
              </span>
            </div>

            <div class="comment-info">
              <div class="commenter-name">
                <span>Takeshi</span> 說：
              </div>
              <div class="comment-content">
                <p>有史寶近，的前勢也；是總是方係藝，如中東入到時經一臺部級不。長球親縣民可們告能美向兩現國照大這節起算性自得完政持向。</p>
              </div>
            </div>

          </div>
          <div class="comment-unit">

            <div class="comment-time">
              <span class="commenter-avatar">
                <img src="./img/dummy-avatar.jpg" alt="" class="img-circle img-responsive">
              </span>
              <span class="time">
                3 分鐘前
              </span>
            </div>

            <div class="comment-info">
              <div class="commenter-name">
                <span>Takeshi</span> 說：
              </div>
              <div class="comment-content">
                <p>有史寶近，的前勢也；是總是方係藝，如中東入到時經一臺部級不。長球親縣民可們告能美向兩現國照大這節起算性自得完政持向。</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 留言表單 -->
      <div class="comment-form">
        <div class="comment-divider"></div>
        <form class="form-horizontal" role="form">
          <div class="comment">
            <textarea class="form-control" rows="3"></textarea>
          </div>
          <div class="buttons">
            <button type="button" class="form-cancel">關閉視窗</button>
            <button type="submit" class="form-submit">送出留言</button>
          </div>
        </form>
      </div>

    </div><!-- e/o view-comments -->

  </div><!-- e/o .mainUI -->

</div><!-- e/o .main_content -->



<!-- 控制列（ctrl_board.html.erb） -->
<div class="ctrl_board">

<!-- 非登入使用者，先看到 not_user -->

<!-- 如果是登入使用者，或成功登入後 ajax 讀入 is_user.html -->

<div class="is_user">

  <!-- 左半部的 Logo -->
  <div class="ctrl-logo">

    <div class="wraper">

      <img src="./img/ctrl-logo.png" alt="" class="img-responsive">

    </div>

  </div><!-- e/o .ctrl-logo -->

  <!-- 中央應用控制區 -->
  <div class="ctrl-main">

    <div class="wraper">

      <div class="options">

        <!-- 測試用按鈕，實際應該由地圖上的 wish marker 觸發 -->
        <a href="#" class="marker-wish" title="wish 測試用" data-toggle="tooltip" data-placement="top">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-comment-o fa-stack-1x fa-inverse"></i>
          </span>
        </a>

        <a href="#" id="makeWishBtn" title="許下願望" data-toggle="tooltip" data-placement="top">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-plus fa-stack-1x fa-inverse"></i>
          </span>
        </a>

        <!-- 測試用按鈕，實際應該由地圖上的 event marker 觸發 -->
        <a href="#" class="marker-event" title="event 測試用" data-toggle="tooltip" data-placement="top">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-cutlery fa-stack-1x fa-inverse"></i>
          </span>
        </a>

        <!-- <a href="#" title="我的位置" data-toggle="tooltip" data-placement="top">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-compass fa-stack-1x fa-inverse"></i>
          </span>
        </a>
 -->

      </div>

    </div>

  </div><!-- e/o .ctrl-main -->

  <!-- 右半部 帳號控制區 -->
  <div class="ctrl-right">
    <div class="wraper">
    <a href="out.php">
      logout
    </a>
      <a id="sign_out" href="out.php" data-toggle="tooltip" data-placement="top" title="登出">
        <span class="fa-stack">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-sign-out fa-stack-1x fa-inverse"></i>
        </span>
      </a>

      <a id="accountManage" href="#" data-toggle="tooltip" data-placement="top" title="帳號管理">
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-user fa-stack-1x fa-inverse"></i>
        </span>
      </a>

      <!-- 訊息通知欄位 -->
      <span class="notifier label label-danger rubberBand">New</span>
    </div>
  </div><!-- e/o .ctrl-right -->

</div><!-- e/o .not_user -->

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