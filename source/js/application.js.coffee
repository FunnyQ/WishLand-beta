###
////////////////////
//  application.js
////////////////////
###

###
定義變數
////////////////////
###

# 地圖 canvas
mapCanvas = $('#map')
mainUI = $('.mainUI')

# Ctrl_board 主控制區
ctrlBoard = $('.ctrl_board')



# 訊息通知 lable
notifyLabel = ctrlBoard.find('.label')

# 控制區的按鈕們
ctrlBtns = ctrlBoard.find('a')

# FB 登入按鈕
fbLoginBtn = $('a.login-button')

# 帳號管理按鈕
accountManageBtn = $('#accountManage')

# 登出按鈕
signOutBtn = $('#sign_out')



# 視窗高度

viewHeight = $( window ).height()

###
定義 function
////////////////////
###

# 顯示地圖
showMap = ->
  mainUI.animate(opacity: 1).removeClass("cant-touch")

# 載入 is_user.html 主介面
loadCtrlBoard = ->
  $.ajax
    url: './is_user.html'
    type: 'GET'
    dataType: 'html'
    success: (respond) ->
      ctrlBoard.html(respond)
      null


###
Main section
###

$( document ).ready ->
  # 主界面區塊隨視窗高度變動
  mapCanvas.add(mainUI).height( viewHeight - 80 )
  $( window ).resize ->
    viewHeight = $( window ).height()
    mapCanvas.add(mainUI).height( viewHeight - 80 )


# tooltip
ctrlBtns.add(notifyLabel).tooltip
  delay: {
    show: 600
    hide: 300
  }

# 載入地圖
mapCanvas.tinyMap
  center: '台北火車站'
  zoom: 16


# 顯示地圖界面
###
Facebook 登入成功後 call showMap() & loadCtrlBoard()
###
fbLoginBtn.on "click", ->
  showMap()
  loadCtrlBoard()
  null
