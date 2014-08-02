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


# FB 登入按鈕
fbLoginBtn = $('a.login-button')

# 帳號管理 trigger
accountManageBtn = $('#accountManage')


###
定義 function
////////////////////
###

# 顯示地圖
showMap = ->
  mainUI.animate(opacity: 1).removeClass("cant-touch")



###
Main section
###

# tooltip
accountManageBtn.tooltip
  delay: {
    show: 600
    hide: 300
  }

# 載入地圖
mapCanvas.tinyMap
  center: '台北車站'
  zoom: 15


# 顯示地圖界面
fbLoginBtn.on "click", ->
  showMap()
  $.ajax
    url: './is_user.html'
    type: 'GET'
    dataType: 'html'
    success: (respond) ->
      ctrlBoard.html(respond)
  null
