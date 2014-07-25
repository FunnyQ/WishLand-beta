(function() {
  var indexEventCreate, indexEventID, indexIsUser, indexMakeWish, indexMap, indexOverlay, indexUI, indexWishID, pageIndex;

  $("#map").tinyMap({
    center: "捷運忠孝復興站",
    scrollwheel: true,
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    zoom: 14,
    marker: [
      {
        addr: ["25.033972149830436", "121.56063079833984"]
      }, {
        addr: ["25.031794640503858", "121.56414985656738"]
      }, {
        addr: ["25.035255306871402", "121.56998634338379"]
      }, {
        addr: ["25.033855498524844", "121.5686559677124"]
      }, {
        addr: ["25.036927279240775", "121.57376289367676"]
      }, {
        addr: '捷運忠孝復興站',
        text: '捷運忠孝復興站'
      }
    ],
    circle: [
      {
        center: {
          x: 25.047924,
          y: 121.51708099999996
        },
        radius: 500,
        width: 1,
        color: '#de4c5f',
        fillcolor: '#de4c5f'
      }, {
        center: {
          x: 25.038,
          y: 121.56399999999996
        },
        radius: 400,
        widrth: 3,
        color: '#FF0000',
        fillcolor: '#CC0000'
      }
    ],
    markerCluster: true
  });

  $('.carousel').carousel({
    interval: 8000,
    pause: true,
    interval: false
  });

  $('#login').modal("show");

  $('#discover-trigger img').tooltip({
    delay: {
      hide: 300
    }
  });

  pageIndex = $('.index');

  indexMap = $("#map");

  indexUI = pageIndex.find('.ui');

  indexOverlay = pageIndex.find('.overlay');

  indexWishID = indexOverlay.find('#wish001');

  indexEventID = indexOverlay.find('#event001');

  indexIsUser = pageIndex.find('.isUser');

  indexMakeWish = indexOverlay.find("#wish-maker");

  indexEventCreate = indexOverlay.find("#event-creator");

  $("#discover-trigger").click(function(e) {
    e.preventDefault();
    indexMap.removeClass("blur");
    indexUI.fadeOut();
    indexOverlay.fadeOut("slow");
    indexIsUser.fadeIn("slow");
  });

  $(".wish-point").click(function(e) {
    e.preventDefault();
    indexOverlay.fadeIn();
    indexWishID.fadeIn().removeClass("off-canvas");
    $(".panelNav").click(function(e) {
      e.preventDefault();
      indexOverlay.fadeOut();
      indexWishID.fadeOut().addClass("off-canvas");
    });
  });

  $(".event-point").click(function(e) {
    e.preventDefault();
    indexOverlay.fadeIn();
    indexEventID.fadeIn().removeClass("off-canvas");
    $(".panelNav").click(function(e) {
      e.preventDefault();
      indexOverlay.fadeOut();
      indexEventID.fadeOut().addClass("off-canvas");
    });
  });

  $(".food-button, .social-button, .sport-button, .art-button").click(function(e) {
    e.preventDefault();
    indexOverlay.fadeIn();
    indexMakeWish.fadeIn().removeClass("off-canvas");
    $(".panelNav").click(function(e) {
      e.preventDefault();
      indexOverlay.fadeOut();
      indexMakeWish.fadeOut().addClass("off-canvas");
    });
  });

  $("#food").click(function(e) {
    e.preventDefault();
    $('#food, .food-button').addClass("hidden");
    $('#social, .social-button').removeClass("hidden");
  });

  $("#social").click(function(e) {
    e.preventDefault();
    $('#social, .social-button').addClass("hidden");
    $('#sport, .sport-button').removeClass("hidden");
  });

  $("#sport").click(function(e) {
    e.preventDefault();
    $('#sport, .sport-button').addClass("hidden");
    $('#art, .art-button').removeClass("hidden");
  });

  $("#art").click(function(e) {
    e.preventDefault();
    $('#art, .art-button').addClass("hidden");
    $('#food, .food-button').removeClass("hidden");
  });

  $("#host").click(function(e) {
    e.preventDefault();
    indexWishID.fadeOut().addClass("off-canvas");
    indexEventCreate.fadeIn().removeClass("off-canvas");
    $(".panelNav").click(function(e) {
      e.preventDefault();
      indexOverlay.fadeOut();
      indexEventCreate.fadeOut().addClass("off-canvas");
    });
  });

}).call(this);
