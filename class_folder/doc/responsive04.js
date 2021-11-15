$(function(){
//-----

$('.main_slider').slick({
  arrows:false,
});


$('.gnb>ul>li>a').on('click', function(e){
// if($(window).width()<769) {   
 if($('.gnb').hasClass('on')) {   
    e.preventDefault();
    // $('sub_menu').hide();
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.sub_menu').stop().slideUp();
  }
});

$('.mopen').on('click', function(){
  $('.gnb').toggleClass('on');
  $('.sns').fadeToggle();
});


$(window).on('resize',function(){
  $('.sub_menu').removeAttr('style')
});





//-----
});