$(function () {
  $("header .gnb li").on("mouseenter", function () {
    $(this).find(".under").css({ transform: "scaleX(1)" });
  });
  $("header .gnb li").on("mouseleave", function () {
    $(this).find(".under").css({ transform: "scaleX(0)" });
  });
  $("header .icon .bar").on("click", function () {
    $("header .menu").css({ display: "block" });
    $("header .wrap09").hide();
  });
  $(".menu .xmark").on("click", function () {
    $("header .menu").hide();
    $("header .wrap09").show();
  });

  $("#visual .list li").on("click", function () {
    let i = $(this).index();

    $("#visual .line").css({ width: "0px" });
    $("#visual .line").stop().animate({ width: "100%" }, 1500);
    $("#visual .wrap08> ul").removeClass("on");
    $("#visual .wrap08 >ul").eq(i).addClass("on");
  });
  $("#visual .wrap08 li").on("mouseenter", function () {
    $(this).find("img").stop().animate({ top: "0px" }, 300);
  });

  $("#visual .wrap08 li").on("mouseleave", function () {
    $(this).find("img").stop().animate({ top: "150px" }, 300);
  });

  let i = 0;
  let stop;

  function cycle() {
    $("#visual .bg img").stop().hide();
    $("#visual .bg img").eq(i).stop().fadeIn();

    $("#visual .line").stop().css({ width: "0px" });
    $("#visual .line").animate({ width: "100%" }, 8000);
    $(".wrap08 ul").removeClass("on");
    $(".wrap08 ul").eq(i).addClass("on");
    $("#visual .list li").removeClass("on");
    $("#visual .list li").eq(i).addClass("on");
    $("#visual .list li>i").removeClass("on");
    $("#visual .list li>i").eq(i).addClass("on");
  }

  function start() {
    stop = setInterval(function () {
      if (i == 2) {
        i = 0;
      } else {
        i++;
      }
      cycle();
    }, 8000);
  }

  $("#visual .list li").on("click", function () {
    clearInterval(stop);

    i = $(this).index();
    cycle();
    start();
  });

  cycle();
  start();

  setInterval(function () {
    $("#con1 .move")
      .stop()
      .animate({ "margin-left": "-400px" }, 1000, function () {
        $("#con1 .move li:first-child").appendTo("#con1 .move");
        $("#con1 .move").css({ "margin-left": "0px" });
      });
  }, 3000);

  $("#con2 li").on("click", function () {
    $("#con2 li").removeClass("on");
    $(this).addClass("on");
    $(this).find(i).toggleClass("on");
  });

  $(window).on("scroll", function () {
    let pos = $(this).scrollTop();
    let vis = $("#visual").offset().top;
    let con1 = $("#con1").offset().top;
    let con2 = $("#con2").offset().top;
    let con3 = $("#con3").offset().top;
    if (pos >= vis - 500) {
      $("vis").find("h2").addClass("on");
    } else {
      $("vis").find("h2").removeClass("on");
    }
    if (pos >= con1 - 500) {
      $("#con1").find(".first").addClass("on");
      $("#con1").find(".second").addClass("on");
    } else {
      $("#con1").find(".first").removeClass("on");
      $("#con1").find(".second").removeClass("on");
    }
    if (pos >= con2 - 500) {
      $("#con2").find(".fir").addClass("on");
      $("#con2").find("ul").addClass("on");
    } else {
      $("#con2").find(".fir").removeClass("on");
      $("#con2").find("ul").removeClass("on");
    }
    if (pos >= con3 - 500) {
      $("#con3").find(".sec1").addClass("on");
      $("#con3").find(".wrap05").addClass("on");
    } else {
      $("#con3").find(".sec1").removeClass("on");
      $("#con3").find(".wrap05").removeClass("on");
    }
  });
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  $("#con2 ul").on("mousedown", function (e) {
    isDown = true;
    startX = e.pageX;
    scrollLeft = this.scrollLeft;
  });

  $(document).on("mousemove", function (e) {
    if (!isDown) return;

    e.preventDefault();

    let moveX = e.pageX - startX;

    $("#con2 ul")[0].scrollLeft = scrollLeft - moveX;
  });

  $(document).on("mouseup", function () {
    isDown = false;
  });
});
