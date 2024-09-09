$(function () {
  $("body > header").hover(function () {
    $("body header").toggleClass("bg000");
  });
  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop();
    if (windowScroll > 100) {
      $("body > header").addClass("bg000");
      $("body > header").hover(function () {
        $("body header").addClass("bg000");
      });
    } else {
      $("body > header").removeClass("bg000");
      $("body > header").mouseover(function () {
        $("body header").addClass("bg000");
      });
      $("body > header").mouseout(function () {
        $("body header").removeClass("bg000");
      });
    }
  });
  // ########## nav ##########
  // resize
  $(window).resize(function(){
    location.reload();
  })
  if($(window).width() < 1200) {
    $('nav').addClass('responsive');
    $('.titleMenu > li').click(function(){
      $(this).siblings().children('.subMenuWrap').stop().slideUp()
      $(this).children('.subMenuWrap').stop().slideToggle()
    });
    $('.menubtn').click(function(){
      $('.subMenuWrap').stop().slideUp()
    })
  } else {
    $('nav').removeClass('responsive');
    $('.titleMenu > li').hover(function(){
      $(this).children('.subMenuWrap').stop().slideToggle()
    })
  }
  // ########## hambtn ##########
  $(".menubtn").click(function () {
    $(this).toggleClass("select");
    $("body, nav").toggleClass("select");
  });
  // ########## familySite ##########
  $(".familySite > ul > li").click(function () {
    $(".familySiteList").slideToggle();
  });
});
