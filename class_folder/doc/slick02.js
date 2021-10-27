$(function(){
//-----
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    //--vertical:true,--//
    //--vertical:true, 는 위로 슬라이드 --//
    //--fade:true,--//
    //--fade:true, 는 나타나는 슬라이드 --//
});

$('#main_visual span.left').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('#main_visual span.right').on('click', function(){
    $('.main_slider').slick('slickNext');
});

$('#main_visual .list li').on('click', function(){
    var idx=$(this).index();
    console.log(idx);
    $('.main_slider').slick('slickGoTo',idx);
    $(this).addClass('on').siblings().removeClass('on')
});
var z=1
$('#main_visual .list li').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    console.log(c);
    $('#main_visual .list li').eq(c).addClass('on').siblings().removeClass('on')
    $('#main_visual .photo').css({transform: 'rotate('+120*z+'deg)'});
    z++;
});

//---제품 이미지 슬라이드---//
$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    dots:true,
});

$('#content01 .btn .xi-angle-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn .xi-angle-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});







//------
});