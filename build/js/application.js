
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
  var accountManageBtn, cencelWishBtn, changeCategoryBtn, closeMap, closeUI, ctrlBoard, ctrlBtns, eventDetail, eventInfoSection, fbLoginBtn, infoPanel, loadCtrlBoard, loadEventDetail, loadWishDetail, mainUI, makeWishBtn, makeWishForm, mapCanvas, notifyLabel, showInfoPanel, showMakeWishForm, showMap, signOutBtn, siteOverlay, submitWishBtn, submitWishEffect, unLoadCtrlBoard, viewHeight, viewWidth, wishDetail, wishInfoSection;

  siteOverlay = $('.overlay');

  mapCanvas = $('#map');

  mainUI = $('.mainUI');

  ctrlBoard = $('.ctrl_board');

  makeWishForm = mainUI.find('.make-wish');

  infoPanel = mainUI.find('.info-panel');

  wishDetail = infoPanel.find('.wish-detail');

  eventDetail = infoPanel.find('.event-detail');

  wishInfoSection = wishDetail.find('.info-section');

  eventInfoSection = eventDetail.find('.info-section');

  notifyLabel = ctrlBoard.find('.label');

  ctrlBtns = ctrlBoard.find('a');

  fbLoginBtn = $('a.login-button');

  accountManageBtn = $('#accountManage');

  signOutBtn = $('#sign_out');

  makeWishBtn = $('#makeWishBtn');

  cencelWishBtn = makeWishForm.find('.form-cancel');

  submitWishBtn = makeWishForm.find('.form-submit');

  changeCategoryBtn = $('#change_category');

  viewHeight = $(window).height();

  viewWidth = $(window).width();


  /*
  定義 function
  ////////////////////
   */

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
    infoPanel.add(siteOverlay).fadeIn();
    infoPanel.addClass('animated fadeInRight');
    setTimeout((function() {
      infoPanel.removeClass('animated fadeInRight');
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

  ctrlBtns.add(notifyLabel).add(changeCategoryBtn).tooltip({
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
  黑色 overlay 區域可以關閉視窗
   */

  siteOverlay.on("click", function() {
    closeUI();
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
