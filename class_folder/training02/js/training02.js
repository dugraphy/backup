$(function(){
//---------------------------------------------------
$('.main').fullpage({
    //navigation: true,
    anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
    afterLoad: function(origin, destination, direction){
        let txt = $('.navbar>li').eq(destination.index).find('a').text();
        $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.now').text(txt);
        // if(destination.index==0) {$('.header').show()} else {$('.header').hide()}
        destination.index==0 ? $('.header').fadeIn() : $('.header').fadeOut();
        destination.index==0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
    },
});

//예시
// function cook (재료1, 재료2){
//     let 끓인라면=재료1+ "과" + 재료2+ "로 끓인 라면";
//     return 끓인라면;
// }

// let 라면 = cook("신라면", "스프");
// console.log(라면);

$('.brand_slider').slick({
    arrows:false,
    asNavFor:'.brand_slider',
    autoplay:true,
});

$('.brand_name li').on('click', function(){
    // $(this).addClass('on').siblings().removeClass('on');
    let idx=$(this).index();
    $('.brand_slider').slick('slickGoTo', idx);
});

$('.brand_slider').on('afterChange', function(e,s,c){
    $('.brand_name li').eq(c).addClass('on').siblings().removeClass('on');
});

$('.header>a').on('click', function(){
    $(this).toggleClass('on');
    $('.all_menu').slideToggle();
    if($('.header>a').hasClass('on')) {
        $.fn.fullpage.setAllowScrolling(false);
    }else{
            $.fn.fullpage.setAllowScrolling(true);
        }
    
});


$('all_menu a').on('click', function(){
    $('.all_menu').slideUp();
    $.fn.fullpage.setAllowScrolling(true);
    $('.header>a').removeClass('on');
})


//---------------------------------------------------
});