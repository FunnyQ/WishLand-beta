
/*
////////////////////
//  application.js
////////////////////
 */
 
/*
2014/08/04 Paul edited
Facebook login fuunction
*/


/*
定義變數
////////////////////
 */

  var accountManageBtn, cencelWishBtn, changeCategoryBtn, closeLv2UI, closeMap, closeUI, commentEventBtn, commentWishBtn, ctrlBoard, ctrlBtns, eventDetail, eventInfoSection, fbLoginBtn, followEventBtn, followWishBtn, hostWishBtn, infoPanel, joinEventBtn, loadCtrlBoard, loadEventDetail, loadWishDetail, mainUI, makeWishBtn, makeWishForm, mapCanvas, newMessageNotifier, sendShareEffect, shareCancelBtn, shareEventBtn, shareForm, shareToEmailBtn, shareToFbBtn, shareToTwitterBtn, shareToWeiboBtn, shareWishBtn, showInfoPanel, showMakeWishForm, showMap, showSharePanel, signOutBtn, siteOverlay, siteOverlayLv2, submitWishBtn, submitWishEffect, unLoadCtrlBoard, viewHeight, viewWidth, wishDetail, wishInfoSection;

  siteOverlay = $('.overlay');

  siteOverlayLv2 = $('.overlay-lv2');

  mainUI = $('.mainUI');

  mapCanvas = $('#map');

  ctrlBoard = $('.ctrl_board');

  makeWishForm = mainUI.find('.make-wish');

  shareForm = mainUI.find('.share-form');

  infoPanel = mainUI.find('.info-panel');

  wishDetail = infoPanel.find('.wish-detail');

  eventDetail = infoPanel.find('.event-detail');

  wishInfoSection = wishDetail.find('.info-section');

  eventInfoSection = eventDetail.find('.info-section');

  newMessageNotifier = ctrlBoard.find('.label');

  fbLoginBtn = $('a.login-button');

  changeCategoryBtn = $('#change_category');

  makeWishBtn = $('#makeWishBtn');

  cencelWishBtn = makeWishForm.find('.form-cancel');

  submitWishBtn = makeWishForm.find('.form-submit');

  ctrlBtns = ctrlBoard.find('a');

  accountManageBtn = $('#accountManage');

  signOutBtn = $('#sign_out');

  followEventBtn = eventDetail.find('.observe button');

  shareEventBtn = eventDetail.find('.share button');

  joinEventBtn = eventDetail.find('.join button');

  commentEventBtn = eventDetail.find('.comment button');

  followWishBtn = wishDetail.find('.observe button');

  shareWishBtn = wishDetail.find('.share button');

  hostWishBtn = wishDetail.find('.host button');

  commentWishBtn = wishDetail.find('.comment button');

  shareToFbBtn = shareForm.find('.share-fb');

  shareToTwitterBtn = shareForm.find('.share-twitter');

  shareToWeiboBtn = shareForm.find('.share-weibo');

  shareToEmailBtn = shareForm.find('.share-email');

  shareCancelBtn = shareForm.find('.form-cancel');

  viewHeight = $(window).height();

  viewWidth = $(window).width();


  /*
  定義 function
  ////////////////////
   */
   
   
FBLogin = function() 
{
	FB.login(function(response) 
	{
		if (response.authResponse) 
		{
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
			showMap();
			loadCtrlBoard();
		}
		else
		{
				alert('登入失敗');
		}
		},{scope: 'email,public_profile'});
};
rrr = function(uid,name,first_name,last_name,email,gender,link,locale,timezone,updated_time)
{
	document.getElementById('status').innerHTML =  
		'<form method="post" action="main.php" id="rrr" style="display:none;">id:<input type="text" id="uid" name="uid" value="'+ uid +'"><br>name:<input type="text" id="name" name="name" value="'+ name +'"><br>first_name:<input type="text" id="first_name" name="first_name" value="'+ first_name +'"><br>	last_name:<input type="text" id="last_name" name="last_name" value="'+ last_name +'"><br>mail:<input type="text" id="email" name="email" value="'+ email +'"><br>gender:<input type="text" id="gender" name="gender" value="'+ gender +'"><br>	link:<input type="text" id="link" name="link" value="'+ link +'"><br>	locale:<input type="text" id="locale" name="locale" value="'+ locale +'"><br>	timezone:<input type="text" id="timezone" name="timezone" value="'+ timezone +'"><br>updated_time:<input type="text" id="updated_time" name="updated_time" value="'+ updated_time +'"><br><input type="submit" value="ok"></form>';
	document.getElementById('rrr').submit();
};
   
FBLoginOut = function(){
	FB.logout(function(response)
	{
	});
};
   
  showMap = function() {
    return mainUI.animate({
      opacity: 1
    }).removeClass("cant-touch");
  };
	
  closeMap = function() {
    return mainUI.animate({
      opacity: 0
    }).addClass("cant-touch");
  };

  loadCtrlBoard = function() {
    return ctrlBoard.find('.is_user').fadeIn();
  };

  unLoadCtrlBoard = function() {
    return ctrlBoard.find('.is_user').fadeOut();
  };

  loadWishDetail = function() {
    return $.ajax({
      url: './wish_detail.html',
      type: 'GET',
      dataType: 'html',
      success: function(respond) {
        wishDetail.fadeIn(0);
        wishInfoSection.html(respond);
        return null;
      }
    });
  };

  loadEventDetail = function() {
    return $.ajax({
      url: './event_detail.html',
      type: 'GET',
      dataType: 'html',
      success: function(respond) {
        eventDetail.fadeIn(0);
        eventInfoSection.html(respond);
        return null;
      }
    });
  };

  showMakeWishForm = function() {
    closeUI(0);
    makeWishForm.addClass('animated bounceInUp');
    makeWishForm.add(siteOverlay).fadeIn();
    setTimeout((function() {
      makeWishForm.removeClass('animated bounceInUp');
      return null;
    }), 1000);
    return null;
  };

  submitWishEffect = function() {
    makeWishForm.addClass("animated zoomOutUp");
    setTimeout((function() {
      closeUI();
      return null;
    }), 500);
    setTimeout((function() {
      makeWishForm.removeClass("animated zoomOutUp");
      return null;
    }), 1000);
    return null;
  };

  showInfoPanel = function() {
    closeUI(0);
    infoPanel.addClass('animated fadeInRight');
    infoPanel.add(siteOverlay).fadeIn();
    setTimeout((function() {
      infoPanel.removeClass('animated fadeInRight');
      return null;
    }), 1000);
    return null;
  };

  showSharePanel = function() {
    closeLv2UI(0);
    shareForm.addClass("animated bounceInUp");
    shareForm.add(siteOverlayLv2).fadeIn();
    setTimeout((function() {
      shareForm.removeClass('animated bounceInUp');
      return null;
    }), 1000);
    return null;
  };

  sendShareEffect = function() {
    shareForm.addClass("animated bounceOutUp");
    setTimeout((function() {
      closeLv2UI();
      return null;
    }), 500);
    setTimeout((function() {
      shareForm.removeClass("animated bounceOutUp");
      return null;
    }), 1000);
    return null;
  };

  closeUI = function(speed) {
    if (speed == null) {
      speed = "500";
    }
    makeWishForm.add(siteOverlay).add(infoPanel).add(wishDetail).add(eventDetail).fadeOut(speed);
    return null;
  };

  closeLv2UI = function(speed) {
    if (speed == null) {
      speed = "500";
    }
    shareForm.add(siteOverlayLv2).fadeOut(speed);
    return null;
  };


  /*
  Main section
   */

  $(document).ready(function() {
    new WOW().init();

    /*
    主界面區塊隨視窗高度變動
     */
    mapCanvas.add(mainUI).height(viewHeight - 80);
    $(window).resize(function() {
      viewHeight = $(window).height();
      return mapCanvas.add(mainUI).height(viewHeight - 80);
    });

    /*
    固定切換類別按鈕在主介面中間
     */
    changeCategoryBtn.css({
      "margin-top": (viewHeight / 2) - 100,
      "left": (viewWidth / 2) - 50
    });
    return $(window).resize(function() {
      viewHeight = $(window).height();
      viewWidth = $(window).width();
      return changeCategoryBtn.css({
        "margin-top": (viewHeight / 2) - 100,
        "left": (viewWidth / 2) - 50
      });
    });
  });


  /*
  tooltip
   */

  ctrlBtns.add(changeCategoryBtn).tooltip({
    delay: {
      show: 600,
      hide: 300
    }
  });


  /*
  載入地圖
   */

  mapCanvas.tinyMap({
    center: '台北火車站',
    zoom: 16,
    control: false,
    autoLocation: true,
    panControl: false,
    streetViewControl: false,
    scaleControl: false
  });


  /*
  Facebook 登入成功後 call showMap() & loadCtrlBoard()
   */

  fbLoginBtn.on("click", function() {
  
	FBLogin();
    return null;
  });
  
  /*
  登出，登出使用者然後關閉地圖畫面
   */

  signOutBtn.on("click", function() {

    /*
    logout user
     */
	FBLoginOut();
	return null;
  });

  /*
  按下許願按鈕，顯示許願表單
   */

  makeWishBtn.on("click", function() {
    showMakeWishForm();
    return null;
  });


  /*
  取消許願可關閉視窗
   */

  cencelWishBtn.on("click", function() {
    closeUI();
    return null;
  });


  /*
  送出願望後關閉視窗
   */

  submitWishBtn.on("click", function() {
	//確認資料都存在	
	var t = $('#wish-title').val();
	var c = $('#wish-cate').val();
	var l = $('#wish-local').val();
	
	var URLs= "php/makeWish.php";
	$.ajax({
        url: URLs,
        data: $('#makeWish').serialize(),
        type:"POST",
        dataType:'text',
        success: function(msg){
			if(msg=="OK"){
				alert(msg);
			}else{
				alert(msg);
			}
		},
         error:function(xhr, ajaxOptions, thrownError){ 
            alert(xhr.status); 
            alert(thrownError); 
         }
    });
	
	//否則不執行效果
    submitWishEffect();
    return null;
  });


  /*
  詳細活動面板按鈕動作
   */


  /*
   * 按下分享活動，顯示分享面板
   */

  shareEventBtn.on("click", function() {
    showSharePanel();
    return null;
  });


  /*
   * 按下分享願望，顯示分享面板
   */

  shareWishBtn.on("click", function() {
    showSharePanel();
    return null;
  });


  /*
   * 按下取消可關閉視窗
   */

  shareCancelBtn.on("click", function() {
    closeLv2UI();
    return null;
  });


  /*
  各種分享按鈕的個別動作
   */

  shareToFbBtn.on("click", function() {

    /*
    do something here
     */
    sendShareEffect();
    return null;
  });

  shareToTwitterBtn.on("click", function() {
    /*
    do something here
     */
    sendShareEffect();
    return null;
  });

  shareToWeiboBtn.on("click", function() {

    /*
    do something here
     */
    sendShareEffect();
    return null;
  });

  shareToEmailBtn.on("click", function() {

    /*
    do something here
     */
    sendShareEffect();
    return null;
  });


  /*
  黑色 overlay 區域可以關閉視窗
   */

  siteOverlay.on("click", function() {
    closeUI();
    return null;
  });


  /*
  黑色 overlayLv2 區域可以關閉視窗
   */

  siteOverlayLv2.on("click", function() {
    closeLv2UI();
    return null;
  });

  /* TEST AREA */

  ctrlBoard.find('.marker-wish').on("click", function() {
    loadWishDetail();
    showInfoPanel();
    return null;
  });

  ctrlBoard.find('.marker-event').on("click", function() {
    loadEventDetail();
    showInfoPanel();
    return null;
  });


