$(function(){
//-----
const mainSlider=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    //--vertical:true,--//
    //--vertical:true, 는 위로 슬라이드 --//
    //--fade:true,--//
    //--fade:true, 는 나타나는 슬라이드 --//
});

let idx=1;
mainSlider.on('afterChange', function(e,s,c){
    console.log(c);
    // $('.num').text(c);
    $('.num').css({backgroundPositionY:-500*c-6000*idx});
    idx++;
})








//------
});