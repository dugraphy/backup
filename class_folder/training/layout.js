$(function(){
//---------------------------------------------------
//------헤더 스크롤

$('.mopen').on('click mouseenter',function(){
    $('nav').toggleClass('on')
});

$('.mopen').on('click mouseenter',function(){
    $('.header .call').toggleClass('on')
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    //---var, let: 변수값 const: 상수값(변하지않는 값)
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on'); // 상황 조건부
    // if(sct > 0)  {
    //     $('.header').addClass('on')
    // } else {
    //     $('.header').removeClass('on')
    // }
    
});




//------메인슬라이드
$('.main_slider').slick({
arrows:false,
fade:true,
dots:true,
autoplay:true,
pauseOnHover:false,
pauseOnFocus:false,
});
















//---------------------------------------------------
});