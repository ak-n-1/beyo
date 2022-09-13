// ハンバーガーメニュー
var state = false;
var scrollpos;
$('.nav_toggle').on('click', function (){
  $('.hamburgermenu').toggleClass('is-active');
  if(state == false) {
    scrollpos = $(window).scrollTop();
    $('.hamburgermenu').addClass('fixed').css({'top': -scrollpos});
    state = true;
  } else {
    $('.hamburgermenu').removeClass('fixed').css({'top': 0});
    window.scrollTop( 0 , scrollpos );
    state = false;
  }
});

// スライダー
$(function(){
$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 1000,
    fade: true,
  });
});

// アクセスフェードイン
$(function(){
    $(window).scroll(function (){
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $('.access-img').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
});
