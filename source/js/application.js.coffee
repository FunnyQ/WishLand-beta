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
#   Bootstrap modal
# -------------------------------------

$('#login').modal "show"


# -------------------------------------
#   Bootstrap tooltip
# -------------------------------------

$('#discover-trigger img').tooltip
  delay: { hide: 300 }


# -------------------------------------
#   main UI
# -------------------------------------
pageIndex = $('.index')
indexMap = $("#map")
indexUI  = pageIndex.find('.ui')
indexOverlay = pageIndex.find('.overlay')
indexWishID = indexOverlay.find('#wish001')
indexEventID = indexOverlay.find('#event001')
indexIsUser = pageIndex.find('.isUser')
indexMakeWish = indexOverlay.find("#wish-maker")
indexEventCreate = indexOverlay.find("#event-creator")

$("#discover-trigger").click (e) ->
  e.preventDefault()
  indexMap.removeClass "blur"
  indexUI.fadeOut()
  indexOverlay.fadeOut "slow"
  indexIsUser.fadeIn "slow"
  return

$(".wish-point").click (e) ->
  e.preventDefault()
  indexOverlay.fadeIn()
  # indexMap.addClass "blur"
  indexWishID.fadeIn().removeClass "off-canvas"
  $(".panelNav").click (e) ->
    e.preventDefault()
    indexOverlay.fadeOut()
    # indexMap.removeClass "blur"
    indexWishID.fadeOut().addClass "off-canvas"
    return
  return

$(".event-point").click (e) ->
  e.preventDefault()
  indexOverlay.fadeIn()
  # indexMap.addClass "blur"
  indexEventID.fadeIn().removeClass "off-canvas"
  $(".panelNav").click (e) ->
    e.preventDefault()
    indexOverlay.fadeOut()
    # indexMap.removeClass "blur"
    indexEventID.fadeOut().addClass "off-canvas"
    return
  return

$("#make-wish").click (e) ->
  e.preventDefault()
  indexOverlay.fadeIn()
  indexMakeWish.fadeIn().removeClass "off-canvas"
  $(".panelNav").click (e) ->
    e.preventDefault()
    indexOverlay.fadeOut()
    # indexMap.removeClass "blur"
    indexMakeWish.fadeOut().addClass "off-canvas"
    return
  return

$("#host").click (e) ->
  e.preventDefault()
  indexWishID.fadeOut().addClass "off-canvas"
  indexEventCreate.fadeIn().removeClass "off-canvas"
  $(".panelNav").click (e) ->
    e.preventDefault()
    indexOverlay.fadeOut()
    # indexMap.removeClass "blur"
    indexEventCreate.fadeOut().addClass "off-canvas"
    return
  return

