$(function(){
//----------------------------------------

$(".section01 .case").YTPlayer({videoURL:'https://www.youtube.com/embed/HVw84iDz2r4?list=PLxenVXjyviTNotHRWiezfXqqVDPJa77u3',containment:'.section01 .case',
autoPlay:true, 
mute:true, 
startAt:0, 
opacity:1,
showControls:false,
ratio:true,
});

$('.tab_menu>li').on('click', function(){
    var $this= $(this); //자기자신
    var idx=$(this).index(); //자기자신의 번호 0,1,2
    //console.log($this,idx);
    //$('.tab_content>div').eq(idx).show().siblings().hide();
    $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    $this.addClass('on').siblings().removeClass('on');
})

$('.event_slider figure').eq(1).addClass('on');
$('.event_slider').slick({
arrows:false,
slidesToShow: 3,
autoplay:true,
});

$('.event_slider figure').eq(1).addClass('on');
$('.event_slider').on('afterChange', function(e,s,c){
    $('.event_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});
// ----------------------------------------
});




