$(function(){
//-----

//---메뉴열기--//

$('.mopen').on('click', function(){
  $('.gnb').toggleClass('on');
});






$('.depth01>li>a').on('click', function(){
  if($(window).width() < 769) {
  
  $(this).next().slideToggle();
  $(this).parent().siblings().find('.depth02').slideUp();
  }

});

$(window).on('resize', function(){
  $('.depth02').removeAttr('style')
})

//-----
});