$(function(){
//-----


//---- 배열: 번호가 있는 자료형 0,1,2,... left_text[0]
var left_text=['01구역', '02구역', '03구역','04구역']


//----풀페이지 만드는 함수
var main=$('.main_full').fullpage({
    anchors:['f01', 'f02', 'f03', 'f04'],
    // navigation: true,
    //--- fixed 먹게 하는 방법 (background-attachment 활성)
    css3:false,

    // 자주 쓰는 부분
    afterLoad: function(origin, destination, direction){
        // console.log(destination.index)
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.footer .left strong').text('0' + (idx+1));
        $('.footer .left span').text(left_text[idx]);
    },
});

//---- 유튜브 영상
$(".youtube").YTPlayer({
    videoURL:'https://youtu.be/lK96xgfdR7g',
    containment:'body',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,
    });

//------
});