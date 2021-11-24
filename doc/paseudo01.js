$(function(){
//-----
//---function: 함수
//---var / let / const: 변수
// var num=1;

// function numc() {
//     console.log(num);
//     num++;
//     if(num>5) num=1;
// }

// setInterval(numc,2000)

var num=0;

function numc() {
    // console.log(num);
    $('#sec10 figure').eq(num).addClass('on').siblings().removeClass('on');
    num++;
    if(num>2) num=0;
}

setInterval(numc,2000);



var snum=0;

function move() {
    $('.move').css({left:-snum*500});
    snum++;
    if(snum>2) snum=0;
}
setInterval(move,3000);







//------
});