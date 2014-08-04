
/*
////////////////////
//  application.js
////////////////////
 */


/*
定義變數
////////////////////
 */

(function() {
  var accountManageBtn, cancelCommentBtn, cancelHostBtn, cencelWishBtn, changeCategoryBtn, closeCommentEffect, closeLv2UI, closeMap, closeUI, commentEventBtn, commentForm, commentWishBtn, ctrlBoard, ctrlBtns, eventDetail, eventInfoSection, fbLoginBtn, followEventBtn, followWishBtn, hostForm, hostWishBtn, infoPanel, joinEventBtn, landingPage, loadCtrlBoard, loadEventDetail, loadWishDetail, mainUI, makeWishBtn, makeWishForm, mapCanvas, newMessageNotifier, sendShareEffect, shareCancelBtn, shareEventBtn, shareForm, shareToEmailBtn, shareToFbBtn, shareToTwitterBtn, shareToWeiboBtn, shareWishBtn, showCommentForm, showHostForm, showInfoPanel, showMakeWishForm, showMap, showSharePanel, signOutBtn, siteOverlay, siteOverlayLv2, submitCommentBtn, submitHostBtn, submitHostEffect, submitWishBtn, submitWishEffect, unLoadCtrlBoard, viewHeight, viewWidth, wishDetail, wishInfoSection;

  siteOverlay = $('.overlay');

  siteOverlayLv2 = $('.overlay-lv2');

  mainUI = $('.mainUI');

  mapCanvas = $('#map');

  landingPage = $('.landing');

  ctrlBoard = $('.ctrl_board');

  makeWishForm = mainUI.find('.make-wish');

  shareForm = mainUI.find('.share-form');

  hostForm = mainUI.find('.host-form');

  commentForm = mainUI.find('.view-comments');

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

  cancelHostBtn = hostForm.find('.form-cancel');

  submitHostBtn = hostForm.find('.form-submit');

  cancelCommentBtn = commentForm.find('.form-cancel');

  submitCommentBtn = commentForm.find('.form-submit');

  viewHeight = $(window).height();

  viewWidth = $(window).width();


  /*
  定義 function
  ////////////////////
   */

  showMap = function() {
    return landingPage.fadeOut();
  };

  closeMap = function() {
    return landingPage.fadeIn();
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
    shareForm.addClass("animated bounceInUp");
    shareForm.add(siteOverlayLv2).fadeIn();
    setTimeout((function() {
      shareForm.removeClass('animated bounceInUp');
      return null;
    }), 1000);
    return null;
  };

  showHostForm = function() {
    hostForm.addClass("animated bounceInUp");
    hostForm.add(siteOverlayLv2).fadeIn();
    setTimeout((function() {
      hostForm.removeClass('animated bounceInUp');
      return null;
    }), 1000);
    return null;
  };

  submitHostEffect = function() {
    hostForm.addClass("animated zoomOutUp");
    setTimeout((function() {
      closeLv2UI();
      closeUI();
      return null;
    }), 500);
    setTimeout((function() {
      hostForm.removeClass("animated zoomOutUp");
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

  showCommentForm = function() {
    commentForm.addClass("animated fadeInDown");
    commentForm.add(siteOverlayLv2).fadeIn();
    setTimeout((function() {
      commentForm.removeClass('animated fadeInDown');
      return null;
    }), 1000);
    return null;
  };

  closeCommentEffect = function() {
    commentForm.addClass("animated fadeOutUp");
    setTimeout((function() {
      closeLv2UI();
      return null;
    }), 500);
    setTimeout((function() {
      commentForm.removeClass("animated fadeOutUp");
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
    shareForm.add(siteOverlayLv2).add(hostForm).add(commentForm).fadeOut(speed);
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
    showMap();
    loadCtrlBoard();
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
    submitWishEffect();
    return null;
  });


  /*
  詳細活動面板按鈕動作
   */


  /*
  ///////////////////分享///////////////////
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
  ///////////////////實現願望（建立活動）///////////////////
   */


  /*
   * 按下實現願望按鈕，顯示分享面板
   */

  hostWishBtn.on("click", function() {
    showHostForm();
    return null;
  });


  /*
   * 按下取消按鈕，關閉視窗
   */

  cancelHostBtn.on("click", function() {
    closeCommentEffect();
    return null;
  });


  /*
   * 按下實現願望按鈕，送出建立活動表單
   */

  submitHostBtn.on("click", function() {

    /*
    do something, maybe pan to location
     */
    submitHostEffect();
    return null;
  });


  /*
  ///////////////////實現願望（建立活動）///////////////////
   */


  /*
   * 按下留言按鈕，顯示留言表單
   */

  commentEventBtn.on("click", function() {
    showCommentForm();
    return null;
  });

  commentWishBtn.on("click", function() {
    showCommentForm();
    return null;
  });


  /*
   * 按下取消按鈕，關閉視窗
   */

  cancelCommentBtn.on("click", function() {
    closeCommentEffect();
    return null;
  });


  /*
   * 按下送出留言按鈕，送出表單
   */

  submitCommentBtn.on("click", function() {

    /*
    do something
     */
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


  /*
  登出，登出使用者然後關閉地圖畫面
   */

  signOutBtn.on("click", function() {

    /*
    logout user
     */
    unLoadCtrlBoard();
    closeMap();
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

}).call(this);
