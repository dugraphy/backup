$(function(){
//-----

$('.btn li').on('click', slidingcar);
function slidingcar() {
    let idx=$(this).index();
    console.log(idx);
    $('.case').animate({top:-321*idx}, 2000, "easeOutBounce")
};

//------
});