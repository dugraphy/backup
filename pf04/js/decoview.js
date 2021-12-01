$(function(){
//----------------------------------------


$('.gnb>li>a').on('click', function(e){
    // if($(window).width()<769) {   
     if($('.bottom_menu').hasClass('on')) {   
        e.preventDefault();
        // $('sub_menu').hide();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.sub_menu').stop().slideUp();
      }
    });
    
    $('.mopen').on('click', function(){
      $('.bottom_menu').toggleClass('on');
      $('.search').toggleClass('on');
    });
    
    $('.mopen').on('click', function(){
      $('.mypage').toggleClass('on');
  });

  $('.top_nav .xi-bars').on('click', function(){
   $(this).toggleClass('on');
   $('.pc_bottom_menu').toggleClass('on');
 });

    
    $(window).on('resize',function(){
      $('.sub_menu').removeAttr('style')
    });




    $(window).on('scroll', function(){
      var sct=$(window).scrollTop();
      //---var, let: 변수값 const: 상수값(변하지않는 값)
      sct > 0 ? $('.top_menu').addClass('on') : $('.top_menu').removeClass('on'); // 상황 조건부
      // if(sct > 0)  {
      //     $('.header').addClass('on')
      // } else {
      //     $('.header').removeClass('on')
      // }
      
  });


    $(window).width(function() {
      var didScroll;
      var lastScrollTop = 0;
      var delta = 1;
    
      $(window).scroll(function(event) {
         didScroll = true;
      });
    
      setInterval(function() {
         if (didScroll) {
            hasScrolled();
            didScroll = false;
         }
      }, 100);
    
      function hasScrolled() {
         var st = $(this).scrollTop();
    
         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta)
            return;
    
         // If they scrolled down and are past the navbar, add class .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st < 0) {
            $('.bottom_menu').removeClass('dl-down').removeClass('dl-up').removeClass('dl-hover-out');
         } else if (st > lastScrollTop && st > 0) {
            // Scroll Down
            $('.bottom_menu').removeClass('dl-down').addClass('dl-up').removeClass('dl-hover-out');
         } else {
            // Scroll Up
            $('.bottom_menu').removeClass('dl-up').addClass('dl-down').removeClass('dl-hover-out');
         }
         lastScrollTop = st;
      }
    });





      // ------메인슬라이드
      $('.bg_img').slick({
        arrows:false,
        fade:true,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        asNavFor:'.circle',
        });

      $('.circle').slick({
        arrows:false,
        fade:false,
        dots:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        asNavFor:'.bg_img',
        });
    


//----------------------------------------
});