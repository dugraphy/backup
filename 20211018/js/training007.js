$(function(){
    $('.main_slider').slick({
        autoplay:true,
        autoplayspeed:4000,
        pauseOnHover:false,
        arrows:false,
        dots:true,
    });

    $('#visual .main_btn i.xi-angle-left-min').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#visual .main_btn i.xi-angle-right-min').on('click',function(){
        $('.main_slider').slick('slickNext');
    });

    $('.main_slider').on('afterChange', function(e,s,c){
        //console.log(c);
        $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });
});