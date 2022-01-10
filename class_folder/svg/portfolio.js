$(function(){
//-
let sc=$('.section');
let sideBar=$('nav li')
$('main').fullpage({
    anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'info'],
    afterLoad: function(origin, destination, direction){
        let idx=destination.index;
        sc.eq(idx).addClass("on").siblings().removeClass('on');
        sideBar.eq(idx).addClass("on").siblings().removeClass('on');
    },
});

new Typed('.slogan_text',{
    strings: ['이건 슬로건이라는데?'],
    typeSpeed: 100,
});






})