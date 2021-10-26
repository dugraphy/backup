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