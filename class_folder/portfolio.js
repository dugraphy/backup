$(function(){
//------------------------------------------------
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


//--- 다중 이벤트 방법 ---//
$('.cover_btn').on('click touchmove', function(){
    $('#cover').fadeToggle();
});

//--- 메뉴 추가 이벤트 ---//
let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    //cloneMenu.appendTo('#cove');- 이렇게도 쓸 수 있음//


    //-- 이동했을때 닫히는 이벤트 --//
    $('#cover a').on('click touchmove', function(){
        $('#cover').fadeOut();
    });

//-- 스크롤 못하게 하는 이벤트 --//    
$('#cover').on('scroll wheel touchmove', function(){
    return false;
})


 
//------------------------------------------------
})