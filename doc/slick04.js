$(function(){
//-----


$('.main_slider').on('init reInit afterChange', function(e,s,c){
    console.log(c,s.slideCount);
    var i= (c?c:0);
    $('.snum').text(i+1 + "/" + s.slideCount)
});


//----- 숫자애니메이션 시작

// var ms= 이름 달아주는 방법

var mS=$('.main_slider').slick({
    autoplay:true,
    fade:true,
    arrows:false,
    pauseOnHover:false,
});

//----- 콘솔 설명 시작

// ms.on('afterChange', function(e,s,c){
//     console.log(c)
// });
//----- 콘솔 설명끝

$('.main_slider figure').eq(0).addClass('animation_active');
$('#main_visual .sbar').addClass('animation_active');
$('#main_visual .sbar2 span').css({height:100})

mS.on('beforeChange', function(e,s,c,n){
    $('#main_visual .sbar').removeClass('animation_active');
});
mS.on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');
    $('#main_visual .btn li').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');

    
    $('#main_visual .sbar').addClass('animation_active');
    $('#main_visual .sbar2 span').css({height:100*(c+1)})

});

$('#main_visual .btn li').on('click', function(){
    var idx=$(this).index();
    mS.slick('slickGoTo', idx)
});


//----- 숫자애니메이션 끝







//------
});