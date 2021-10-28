//--- $(document).ready(function(){

//--- });
$(function(){
//--------------------------
$('#top_banner .container i').on('click', function(){
    $(this).parent().parent().hide();
});

$('#top_banner02 i').on('click', function(){
    $('#top_banner02 .case').toggleClass('on');
    $(this).toggleClass('on');
});

$('#top_banner03 i').on('click', function(){
    $('#top_banner03 .case').slideToggle(200);
    $(this).toggleClass('on');
});

$('#top_banner04 i').on('click', function(){
    $('#top_banner04 .case').toggleClass('on');
    $(this).toggleClass('on');
});

$('#bottom_banner01 i').on('click', function(){
    $('#bottom_banner01 .case').slideToggle(200);
    $(this).toggleClass('on');
});

$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},600)
});
//----
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
 //   if(set>400) {
 //       $('#toTop').fedeIn()
 //   }else{
 //       $('#toTop').fedeOut()
 //   }
    sct>400 ? $('#toTop').fadeIn()  :   $('#toTop').fadeOut();
    $('#scroll_banner').css({top:300+sct})
});

$('#left_banner i').on('click', function(){
    $('#left_banner').toggleClass('on');
    $(this).toggleClass('on');
});

$('#right_banner i').on('click', function(){
    $('#right_banner').toggleClass('on');
    $(this).toggleClass('on');
});
//--------------------------
});