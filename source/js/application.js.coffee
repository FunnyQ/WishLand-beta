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

signUpBtn.add(signInBtn).tooltip
  delay: {
    show: 200
    hide: 200
  }

