###
////////////////////
//  application.js
////////////////////
###

###
定義變數
////////////////////
###

# overlay
siteOverlay = $('.overlay')
siteOverlayLv2 = $('.overlay-lv2')
################################################################################


# 地圖 canvas
mainUI = $('.mainUI')
mapCanvas = $('#map')
################################################################################

# Ctrl_board 主控制區
ctrlBoard = $('.ctrl_board')
################################################################################

# make-wish 表單
makeWishForm = mainUI.find('.make-wish')

# 分享視窗 表單
shareForm = mainUI.find('.share-form')
################################################################################

# infoPanel 活動或願望的詳細內容顯示區
infoPanel = mainUI.find('.info-panel')
wishDetail = infoPanel.find('.wish-detail')
eventDetail = infoPanel.find('.event-detail')
wishInfoSection = wishDetail.find('.info-section')
eventInfoSection = eventDetail.find('.info-section')
################################################################################

# 訊息通知 lable
newMessageNotifier = ctrlBoard.find('.label')

# FB 登入按鈕
fbLoginBtn = $('a.login-button')

# 切換類別按鈕（使用者頭像）
changeCategoryBtn = $('#change_category')

# 許願按鈕
makeWishBtn = $('#makeWishBtn')
# 取消許願按鈕
cencelWishBtn = makeWishForm.find('.form-cancel')
# 送出願望按鈕
submitWishBtn = makeWishForm.find('.form-submit')

# 控制區的按鈕們
ctrlBtns = ctrlBoard.find('a')
# 帳號管理按鈕
accountManageBtn = $('#accountManage')
# 登出按鈕
signOutBtn = $('#sign_out')

## 詳細活動面板按鈕們 ##
# 關注活動
followEventBtn = eventDetail.find('.observe button')
# 分享活動
shareEventBtn = eventDetail.find('.share button')
# 參加活動
joinEventBtn = eventDetail.find('.join button')
# 留言
commentEventBtn = eventDetail.find('.comment button')
################################################################################

## 詳細願望面板按鈕們 ##
# 關注願望
followWishBtn = wishDetail.find('.observe button')
# 分享願望
shareWishBtn = wishDetail.find('.share button')
# 實現願望
hostWishBtn = wishDetail.find('.host button')
# 留言
commentWishBtn = wishDetail.find('.comment button')
################################################################################

## 分享面板表單按鈕們 ##
# 分享到 FB
shareToFbBtn = shareForm.find('.share-fb')
# 分享到 Twitter
shareToTwitterBtn = shareForm.find('.share-twitter')
# 分享到 微博
shareToWeiboBtn = shareForm.find('.share-weibo')
# 分享到 Email
shareToEmailBtn = shareForm.find('.share-email')
# 取消按鈕
shareCancelBtn = shareForm.find('.form-cancel')
################################################################################



# 視窗寬高度
viewHeight = $( window ).height()
viewWidth = $( window ).width()

###
定義 function
////////////////////
###

# 顯示地圖
showMap = ->
  mainUI.animate(opacity: 1).removeClass("cant-touch")
closeMap = ->
  mainUI.animate(opacity: 0).addClass("cant-touch")

# 載入 is_user.html 主介面
loadCtrlBoard = ->
  ctrlBoard.find('.is_user').fadeIn()

# 移除主介面
unLoadCtrlBoard = ->
  ctrlBoard.find('.is_user').fadeOut()


# 載入願望詳細資訊
loadWishDetail = ->
  $.ajax
    url: './wish_detail.html'
    type: 'GET'
    dataType: 'html'
    success: (respond) ->
      wishDetail.fadeIn(0)
      wishInfoSection.html(respond)
      null
# 載入活動詳細資訊
loadEventDetail = ->
  $.ajax
    url: './event_detail.html'
    type: 'GET'
    dataType: 'html'
    success: (respond) ->
      eventDetail.fadeIn(0)
      eventInfoSection.html(respond)
      null

# 顯示許願卡
showMakeWishForm = ->
  closeUI(0)
  makeWishForm.addClass('animated bounceInUp')
  makeWishForm.add(siteOverlay).fadeIn()
  setTimeout (->
    makeWishForm.removeClass('animated bounceInUp')
    null
  ), 1000
  null

# 送出許願卡
submitWishEffect = ->
  makeWishForm.addClass "animated zoomOutUp"
  setTimeout (->
    closeUI()
    null
  ), 500
  setTimeout (->
    makeWishForm.removeClass "animated zoomOutUp"
    null
  ), 1000
  null

# 顯示願望或活動詳細資訊面板
showInfoPanel = ->
  closeUI(0)
  infoPanel.addClass('animated fadeInRight')
  infoPanel.add(siteOverlay).fadeIn()
  setTimeout (->
    infoPanel.removeClass('animated fadeInRight')
    null
  ), 1000
  null

# 顯示分享視窗
showSharePanel = ->
  closeLv2UI(0)
  shareForm.addClass "animated bounceInUp"
  shareForm.add(siteOverlayLv2).fadeIn()
  setTimeout (->
    shareForm.removeClass('animated bounceInUp')
    null
  ), 1000
  null

sendShareEffect = ->
  shareForm.addClass "animated bounceOutUp"
  setTimeout (->
    closeLv2UI()
    null
  ), 500
  setTimeout (->
    shareForm.removeClass "animated bounceOutUp"
    null
  ), 1000
  null

# 關閉 LV1 UI
closeUI = ( speed = "500" ) ->
  makeWishForm.add(siteOverlay).add(infoPanel).add(wishDetail).add(eventDetail).fadeOut(speed)
  null

# 關閉 LV2 UI
closeLv2UI = ( speed = "500" ) ->
  shareForm.add(siteOverlayLv2).fadeOut(speed)
  null

################################################################################


###
Main section
###

$( document ).ready ->
  new WOW().init();
  ###
  主界面區塊隨視窗高度變動
  ###
  mapCanvas.add(mainUI).height( viewHeight - 80 )
  $( window ).resize ->
    viewHeight = $( window ).height()
    mapCanvas.add(mainUI).height( viewHeight - 80 )
  ###
  固定切換類別按鈕在主介面中間
  ###
  changeCategoryBtn.css
    "margin-top": ( viewHeight / 2 ) - 100
    "left": (viewWidth / 2) - 50
  $( window ).resize ->
    viewHeight = $( window ).height()
    viewWidth = $( window ).width()
    changeCategoryBtn.css
      "margin-top": ( viewHeight / 2 ) - 100
      "left": (viewWidth / 2) - 50

################################################################################


###
tooltip
###
ctrlBtns.add(changeCategoryBtn).tooltip
  delay: {
    show: 600
    hide: 300
  }


###
載入地圖
###
mapCanvas.tinyMap
  center: '台北火車站'
  zoom: 16
  control: false
  autoLocation: true
  panControl: false
  streetViewControl: false
  scaleControl: false


# 顯示地圖界面
###
Facebook 登入成功後 call showMap() & loadCtrlBoard()
###
fbLoginBtn.on "click", ->
  showMap()
  loadCtrlBoard()
  null


###
按下許願按鈕，顯示許願表單
###
makeWishBtn.on "click", ->
  showMakeWishForm()
  null
###
取消許願可關閉視窗
###
cencelWishBtn.on "click", ->
  closeUI()
  null
###
送出願望後關閉視窗
###
submitWishBtn.on "click", ->
  # do something
  submitWishEffect()
  null


###
詳細活動面板按鈕動作
###
###
# 按下分享活動，顯示分享面板
###
shareEventBtn.on "click", ->
  showSharePanel()
  null

###
# 按下分享願望，顯示分享面板
###
shareWishBtn.on "click", ->
  showSharePanel()
  null

###
# 按下取消可關閉視窗
###
shareCancelBtn.on "click", ->
  closeLv2UI()
  null
###
各種分享按鈕的個別動作
###
shareToFbBtn.on "click", ->
  ###
  do something here
  ###
  sendShareEffect()
  null

shareToTwitterBtn.on "click", ->
  ###
  do something here
  ###
  sendShareEffect()
  null

shareToWeiboBtn.on "click", ->
  ###
  do something here
  ###
  sendShareEffect()
  null

shareToEmailBtn.on "click", ->
  ###
  do something here
  ###
  sendShareEffect()
  null


###
黑色 overlay 區域可以關閉視窗
###
siteOverlay.on "click", ->
  closeUI()
  null

###
黑色 overlayLv2 區域可以關閉視窗
###
siteOverlayLv2.on "click", ->
  closeLv2UI()
  null


###
登出，登出使用者然後關閉地圖畫面
###
signOutBtn.on "click", ->
  ###
  logout user
  ###
  unLoadCtrlBoard()
  closeMap()
  null


### TEST AREA ###
## 實際 trigger 應該是地圖上的 markers
#################
ctrlBoard.find('.marker-wish').on "click", ->
  # 先 ajax 讀入表單再顯示面板
  loadWishDetail()
  showInfoPanel()
  null

ctrlBoard.find('.marker-event').on "click", ->
  # 先 ajax 讀入表單再顯示面板
  loadEventDetail()
  showInfoPanel()
  null

################################################################################
