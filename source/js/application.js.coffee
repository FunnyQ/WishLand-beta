# *************************************
#
#   application.js
#
#
# *************************************

# 註冊按鈕
signUpBtn = $('.sign-up_button a')
# 登入按鈕
signInBtn = $('.sign-in_button a')

# 地圖 canvas
mapCanvas = $('#map')

# not_user 登入註冊按鈕 tooltip 顯示
signUpBtn.add(signInBtn).tooltip
  delay: {
    show: 200
    hide: 200
  }


# 載入地圖
mapCanvas.tinyMap()
