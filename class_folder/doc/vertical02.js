$(function(){
//-----

$('.main_visual').slick({
    // arrows:false,
    autoplay:true,
    dots:true,
    nextArrow:'<div class="next"><i class="xi-arrow-right"></i></div>',
    prevArrow:'<div class="prev"><i class="xi-arrow-left"></i></div>',
});

$('.main_visual figure').eq(1).addClass('on');
$('.main_visual').on('afterChange', function(e,s,c){
    $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
});


//------
});