# *************************************
#
#   application.js
#
#
# *************************************

# -------------------------------------
#   tinyMap 地圖操作
# -------------------------------------

$("#map").tinyMap
  center           : "捷運忠孝復興站"
  scrollwheel      : false
  panControl       : false
  streetViewControl: false
  mapTypeControl   : false

  zoom: 14
  marker: [
    {
      addr: [
        "25.033972149830436"
        "121.56063079833984"
      ]
    }
    {
      addr: [
        "25.031794640503858"
        "121.56414985656738"
      ]
    }
    {
      addr: [
        "25.035255306871402"
        "121.56998634338379"
      ]
    }
    {
      addr: [
        "25.033855498524844"
        "121.5686559677124"
      ]
    }
    {
      addr: [
        "25.036927279240775"
        "121.57376289367676"
      ]
    }
    {
      addr: '捷運忠孝復興站',
      text: '捷運忠孝復興站',
      # icon: '圖示 URL'
      # {
      #     url: 'string', //圖示位址
      #     size: [width, height] // 單位: pixel,
      #     anchor: [x, y] // 位移
      # }
      # id: {string} '識別名稱，適用於以 modify 更新時使用',
      # label: {string} '文字層，不填寫或未設定則不顯示',
      # css: {string} '文字層的 css 樣式名稱',
      # event: {function|Object}
    }
  ]

  circle: [
      {
          center: {x: 25.047924, y: 121.51708099999996}, # 圓心
          radius: 500, # 半徑公尺
          width: 1, # 圓周寬度
          color: '#de4c5f', # 圓周顏色
          fillcolor: '#de4c5f', # 中心填色
      },
      {
          center: {x: 25.038, y: 121.56399999999996},
          radius: 400,
          widrth: 3,
          color: '#FF0000',
          fillcolor: '#CC0000',
      }
  ]

  # 設置 markerCluster: true 以啟用分組
  markerCluster: true


# -------------------------------------
#   Bootstrap carousel
# -------------------------------------

$('.carousel').carousel
  interval: 8000
  pause: true
  interval: false


# -------------------------------------
#   main UI
# -------------------------------------
pageIndex = $('.index')
indexMap = $("#map")
indexUI  = pageIndex.find('.ui')
indexOverlay = pageIndex.find('.overlay')
indexDetail = indexOverlay.find('.detail')
indexIsUser = pageIndex.find('.isUser')

$("#discover-trigger").click ->
  indexMap.removeClass "blur"
  indexUI.fadeOut()
  indexOverlay.fadeOut "slow"
  indexIsUser.fadeIn "slow"
  return

$(".wish-point, .event-point").click ->
  indexOverlay.fadeIn()
  # indexMap.addClass "blur"
  indexDetail.fadeIn().removeClass "off-canvas"
  $(".panelNav").click ->
    indexOverlay.fadeOut()
    # indexMap.removeClass "blur"
    indexDetail.fadeOut().addClass "off-canvas"
    return
  return
