$(function(){
//-----

$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp(100);
})
//-----.slideUp(100); 위로 슬라이드 속도는 기본값 (400) /(100)은 1초/

//-----$('#top_banner i').on('click', function(){
//-----    $('#top_banner').hide();
//})
//-----.hide(); 숨기다

//------

$('.menu_open').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});




$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    fade:true,
    speed:1000,

});


$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,  
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});


$('#link select').on('change', function(){
    var lnk = $(this).val();
    if(lnk) window.open(lnk);

});



//-----
});