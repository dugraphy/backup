$(function(){
//----------------------------------------


//----풀페이지 만드는 요소
$('.main').fullpage({
  anchors:['c01', 'c02', 'c03', 'c04', 'footer'],
  //navigation: true,
  afterLoad: function(origin, destination, direction){
    let txt = $('.navbar>.navbar>li>a').eq(destination.index).find('a').text();
    $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
    $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
    destination.index===0 ? $('.header').fadeIn() : $('.header').fadeOut();
    },
});

//----메뉴 풀페이지 열기 요소
$('.login .all_open').on('click', function(){
  $(this).toggleClass('on');
  $('.all_menu').slideToggle();
  if($('.login .all_open').hasClass('on')) {
      $.fn.fullpage.setAllowScrolling(false);
  }else{
      $.fn.fullpage.setAllowScrolling(true);
  }
});


$('.all_menu a').on('click', function(){
  $('.all_menu').slideUp();
  $.fn.fullpage.setAllowScrolling(true);
  $('.login .all_open').removeClass('on');
});


//----반응형 메뉴 열기 요소
$('.all_open').on('click', function(){
  $('.gnb').toggleClass('on');
});


$('.gnb ul>li>a').on('click', function(){
  if($(window).width() < 769) {
  
  $(this).next().slideToggle();
  $(this).parent().siblings().find('.sub_gnb').slideUp();
  }

});

$(window).on('resize', function(){
  $('.sub_gnb').removeAttr('style')
})

$('.visual_slider').slick({
arrows:false,
autoplay:true,
fade:true,
dots:true,
pauseOnHover:false,
pauseOnFocus:false,
});

//-----슬라이더 on 붙히는 요소
$('.visual_slider figure').eq(0).addClass('on');
$('.visual_slider').on('afterChange', function(e,s,c){
    $('.visual_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});

$('.content02 .introduction').slick({
infinite: true,
arrows:true,
nextArrow:'<div class="next"><i class="xi-angle-right"></i></div>',
prevArrow:'<div class="prev"><i class="xi-angle-left"></i></div>',
});


$('.content03 .tab_menu>li').on('click', function(){
  var $this= $(this); //자기자신
  var idx=$(this).index(); //자기자신의 번호 0,1,2
  //console.log($this,idx);
  //$('.tab_content>div').eq(idx).show().siblings().hide();
  $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
  $this.addClass('on').siblings().removeClass('on');
})


$('.content03 .slider').slick({
      infinite: true,
      dots:false,
      autoplay:false,
      arrows:true,
      nextArrow:'<div class="next"><i class="xi-angle-right"></i></div>',
      prevArrow:'<div class="prev"><i class="xi-angle-left"></i></div>',
  });


$('.content03 .title li').on('click',function(){
  var idx=$(this).index();
  console.log(idx);
  $('.content03 .slider').slick('slickGoTo', idx)
})


$('.gallery_slide').slick({
  //infinite:true,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
});


//----------------------------------------
});


