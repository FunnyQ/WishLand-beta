
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
  var accountManageBtn, cancelCommentBtn, cancelHostBtn, cencelWishBtn, changeCategoryBtn, closeCommentEffect, closeLv2UI, closeMap, closePowishForm, closeUI, commentEventBtn, commentForm, commentWishBtn, confirmChangeLocationBtn, confirmDialog, confirmSubmitWish, confirmSubmitWishBtn, ctrlBoard, ctrlBtns, eventDetail, eventInfoSection, fbLoginBtn, followEventBtn, followWishBtn, hideListView, hostForm, hostWishBtn, infoPanel, joinEventBtn, landingPage, listFollowBtn, listHostBtn, listJoinBtn, listView, loadCtrlBoard, loadEventDetail, loadWishDetail, mainUI, makeWishBtn, makeWishForm, mapCanvas, newMessageNotifier, powishArtBtn, powishBasic, powishBtn, powishCategoryBtn, powishCloseBtn, powishEatBtn, powishForm, powishSocialBtn, powishSportBtn, powishSubmit, removeListUnit, sendShareEffect, shareCancelBtn, shareEventBtn, shareForm, shareToEmailBtn, shareToFbBtn, shareToTwitterBtn, shareToWeiboBtn, shareWishBtn, showCommentForm, showConfirmDialog, showHostForm, showInfoPanel, showListView, showMap, showPowishForm, showSharePanel, signOutBtn, siteOverlay, siteOverlayLv2, submitCommentBtn, submitHostBtn, submitHostEffect, submitWishBtn, switchListView, topbar, topbarToggleListviewBtn, unLoadCtrlBoard, viewHeight, viewWidth, welcomeSplash, windows, wishDetail, wishInfoSection;

  siteOverlay = $('.overlay');

  siteOverlayLv2 = $('.overlay-lv2');

  // Welcome splash screen 歡迎畫面;

  powishBasic = $('.powish-basic');

  welcomeSplash = $('.welcome_splash');

  powishBtn = powishBasic.find('.btn-mode');

  powishForm = powishBasic.find('.form-mode');

  powishCloseBtn = powishForm.find('.powish-close-btn');

  powishEatBtn = powishForm.find('.eat');

  powishSocialBtn = powishForm.find('.social');

  powishSportBtn = powishForm.find('.sport');

  powishArtBtn = powishForm.find('.art');

  powishCategoryBtn = powishEatBtn.add(powishArtBtn).add(powishSocialBtn).add(powishSportBtn);

  powishSubmit = powishForm.find('.form-submit');

  mainUI = $('.mainUI');

  mapCanvas = $('#map');

  windows = $('.windows');

  landingPage = $('.landing');

  ctrlBoard = $('.ctrl_board');

  makeWishForm = windows.find('.make-wish');

  // top-bar;

  topbar = mainUI.find('.top-bar');

  // 手動開關 listview;

  topbarToggleListviewBtn = topbar.find('.toggle-listview');

  // 確認視窗;

  confirmDialog = windows.find('.confirm-dialog');

  shareForm = windows.find('.share-form');

  hostForm = windows.find('.host-form');

  commentForm = windows.find('.view-comments');

  infoPanel = mainUI.find('.info-panel');

  wishDetail = infoPanel.find('.wish-detail');

  eventDetail = infoPanel.find('.event-detail');

  wishInfoSection = wishDetail.find('.info-section');

  eventInfoSection = eventDetail.find('.info-section');

  listView = mainUI.find('.list-view');

  listFollowBtn = listView.find('.follow');

  listJoinBtn = listView.find('.join');

  listHostBtn = listView.find('.host');

  newMessageNotifier = ctrlBoard.find('.label');

  fbLoginBtn = $('a.login-button');

  changeCategoryBtn = $('#change_category');

  makeWishBtn = ctrlBoard.find('.is_user');

  cencelWishBtn = makeWishForm.find('.form-cancel');

  submitWishBtn = makeWishForm.find('.form-submit');

  // 更改地點按鈕;

  confirmChangeLocationBtn = confirmDialog.find('.form-change');

  // 送出願望按鈕;

  confirmSubmitWishBtn = confirmDialog.find('.form-submit');

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

  showListView = function() {
    listView.addClass('animated fadeInLeft active');
    listView.fadeIn();
    setTimeout((function() {
      listView.removeClass('animated fadeInLeft');
      return null;
    }), 1000);
    return null;
  };

  hideListView = function() {
    listView.addClass('animated fadeOutLeft');
    setTimeout((function() {
      listView.removeClass('animated fadeOutLeft active').hide();
      return null;
    }), 1000);
    return null;
  };

  switchListView = function() {
    if (listView.hasClass('active')) {
      hideListView();
    } else {
      showListView();
    }
    return null;
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

  showPowishForm = function() {
    return powishBtn.fadeOut(function() {
      powishBasic.removeClass("powish-btn-mode").addClass("powish-form-mode");
      return powishForm.fadeIn();
    });
  };

  closePowishForm = function() {
    return powishForm.fadeOut(function() {
      powishBasic.removeClass("powish-form-mode").addClass("powish-btn-mode");
      return powishBtn.fadeIn();
    });
  };

  // 顯示確認視窗;

  showConfirmDialog = function() {
    closeUI(0);
    confirmDialog.addClass('animated bounceInDown');
    confirmDialog.add(siteOverlay).fadeIn();
    setTimeout((function() {
      confirmDialog.removeClass('animated bounceInDown');
      return null;
    }), 1000);
    return null;
  };

  // 確認送出願望;

  confirmSubmitWish = function() {
    confirmDialog.addClass("animated zoomOutUp");
    setTimeout((function() {
      closeUI();
      confirmDialog.fadeOut();
      return null;
    }), 500);
    setTimeout((function() {
      confirmDialog.removeClass("animated zoomOutUp");
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

  removeListUnit = function(button) {
    button.parents('.listUnit').fadeOut();
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
    makeWishForm.add(siteOverlay).add(infoPanel).add(wishDetail).add(eventDetail).add(confirmDialog).fadeOut(speed);
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
    mapCanvas.add(mainUI).height(viewHeight);
    $(window).resize(function() {
      viewHeight = $(window).height();
      return mapCanvas.add(mainUI).height(viewHeight);
    });

    /*
    固定切換類別按鈕在主介面中間
     */
    changeCategoryBtn.css({
      "margin-top": (viewHeight / 2) - 100,
      "left": (viewWidth / 2) - 50
    });
    powishBasic.find('.slogan').css({
      "margin-top": (viewHeight / 2) - 150
    });
    powishForm.css({
      "margin-top": (viewHeight / 2) - 330
    });
    return $(window).resize(function() {
      viewHeight = $(window).height();
      viewWidth = $(window).width();
      changeCategoryBtn.css({
        "margin-top": (viewHeight / 2) - 100,
        "left": (viewWidth / 2) - 50
      });
      powishBasic.find('.slogan').css({
        "margin-top": (viewHeight / 2) - 150
      });
      return powishForm.css({
        "margin-top": (viewHeight / 2) - 330
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
  dropdown
   */

  $('#dropdown').dropdown();


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
  點擊任意位置關閉 splash screen
   */

  powishBasic.on("click", function() {
    if ($(this).hasClass('welcome_splash')) {
      $(this).find('.slogan').fadeOut(function() {
        powishBasic.removeClass("welcome_splash").addClass("powish-form-mode");
        powishForm.fadeIn();
        return console.log('test');
      });
    }
    return null;
  });


  /*
  取消許願
   */

  powishCloseBtn.on("click", function() {
    closePowishForm();
    return null;
  });


  /*
  選擇願望類別
   */

  powishCategoryBtn.on("click", function() {
    powishCategoryBtn.removeClass('selected');
    return $(this).addClass('selected');
  });


  /*
  送出願望
   */

  powishSubmit.on("click", function() {
    closePowishForm();
    return null;
  });


  /*
  按下 powish 按鈕，打開表單
   */

  powishBtn.on("click", function() {
    showPowishForm();
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
    // 只有第一次會 showConfirmDialog(), 第二次之後使用 submitWishEffect();
    showConfirmDialog();
    return null;
  });


  /*
  按下更改地點後，移除 disabled 屬性、清除目前的 value，並 focus on input element
   */

  confirmChangeLocationBtn.on("click", function() {
    confirmDialog.find('input').prop('disabled', false).prop('value', '').focus();
    return null;
  });


  /*
  確認送出願望後關閉視窗
   */

  confirmSubmitWishBtn.on("click", function() {
    confirmSubmitWish();
    return null;
  });


  /*
  List View 按下關注或加入按鈕移除元件
   */

  listFollowBtn.on("click", function() {
    var button;
    button = $(this);
    removeListUnit(button);
    return null;
  });

  listJoinBtn.on("click", function() {
    var button;
    button = $(this);
    removeListUnit(button);
    return null;
  });


  /*
  List View 按下實現後移除元件並顯示實現視窗
   */

  listHostBtn.on("click", function() {
    var button;
    button = $(this);
    removeListUnit(button);
    showHostForm();
    return null;
  });

  // 手動開關 listview;

  topbarToggleListviewBtn.on("click", function() {
    switchListView();
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

  $('.test-listView').on("click", function() {
    if (listView.hasClass('active')) {
      hideListView();
    } else {
      showListView();
    }
    return null;
  });

  $('.test-confirmDialog').on("click", function() {
    showConfirmDialog();
    return null;
  });

  $('.test-wishDetail').on("click", function() {
    showInfoPanel();
    loadWishDetail();
    return null;
  });

  $('.test-eventDetail').on("click", function() {
    showInfoPanel();
    loadEventDetail();
    return null;
  });

}).call(this);
