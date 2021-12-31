$(function(){
//-----------------------------------------------

$('#popup').draggable();

$('#popup a').on('click', function(){
    $(this).parent().hide();
    return false;
});

$('.search').on('click', function(){
    $('.searchForm').stop().slideToggle('on');
    return false;
});

//----스크롤 내릴 시 header on 시작
$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    // console.log(sct)
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
    // 같은 구조
    // if(sct > 0) {$(('#header').addClass('on')}else{$(('#header').removeClass('on')}
    //----스크롤 내릴 시 header on 끝

    //--- 스크롤 내릴 시 최상단으로 가는 아이콘 나타내기 시작
    sct > 300? $('#toTop').fadeIn() : $('#toTop').fadeOut()
    //--- 스크롤 내릴 시 최상단으로 가는 아이콘 나타내기 끝
    
    //--- 최상단으로 가기 이벤트 시작
    sct > sTop ? $('#solution').addClass('on') : $('#solution').removeClass('on');
    //--- 최상단으로 가기 이벤트 끝
})


$('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

//----- 슬라이드 on 시작
$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
});
//----- 슬라이드 on 끝

$('.product_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    fade:false,
    centerMode:true,
    slidesToShow:3,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:false,
});

$('.product_slider figure').eq(4).addClass('on');
$('.product_slider').on('afterChange', function(e,s,c){
    $('.product_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});

//---- 패밀리사이트 링크 열고 닫기 시작
$('.familyLink .link>a').on('click', function(){
    // e.preventDefault();
    $(this).prev().stop().slideToggle();
    //--- i 에 on 붙히기 시작
    $(this).find('i').toggleClass('on');
    //--- i 에 on 붙히기 끝
    return false;
})
//---- 패밀리사이트 링크 열고 닫기 끝


//--- 최상단으로 가기 이벤트 시작
$('#toTop a').on('click', e=> {
    //--- 이벤트 없애기
    e.preventDefault();
    //--- 링크로 따라가기
    $('html,body').animate({scrollTop:0})
})


//---offset().top; 최상단에서 어디로 가라 
let sTop = $('#solution').offset().top - 200;


//-----
});