# Wish.Land

這個 project 使用 [MiddleMan][1] 來開發與生成靜態網站。`./source/` 中為專案原始碼，`./build`內的檔案為生成的靜態網站檔案，可直接使用。

如果想要直接修改原始碼，請先確認開發環境內有 Ruby 2.0.0 與 [Bundler][2] gem。在專案路徑下使用 bundler 一次安裝所有需要的 gems

````sh
$ bundle install
````

安裝好後就可以使用了。

### MiddleMan 指令

只有兩個會用到，`middleman build` 和 `middleman server`，**build** 用來生成靜態網站檔案，而 **server** 是建立開發用的伺服器環境，可以直接在瀏覽器打開，任何檔案有更動會馬上反映到瀏覽器， auto reload。

詳細使用方式請參考[官方網站][3]。


[1]:    http://middlemanapp.com/
[2]:    http://bundler.io/
[3]:    http://middlemanapp.com/
