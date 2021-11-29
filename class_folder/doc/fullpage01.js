$(function(){
//-----

//----풀페이지 만드는 함수
var main=$('.main_full').fullpage({
    anchors:['f01', 'f02', 'f03', 'f04'],
    // navigation: true,

    // 자주 쓰는 부분
    afterLoad: function(origin, destination, direction){
        // console.log(destination.index)
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    },
});


//------
});