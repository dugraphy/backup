$(function(){
//-----

    $('#top_banner i').on('click', function(){
        $('#top_banner').hide();
        //--$('#top_banner').slideUp();
    });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $('.pr_slider').slick({
        arrows:false,
        slidesToShow:5,
        autoplay:true,
        autoplaySpeed:2000,
        //centerMode:true,
        //centerPadding:"100px",
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $('.pr_slider figure').eq(7).addClass('on');
        $('.pr_slider').on('afterChange', function(e,s,c){
    $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
        $('#product03 .slide_bar>span').css({left:c*100});
    });


    // $('.pic').slick({
    //     arrows:false,
    //     autoplay:true,
    //     pauseOnHover:false,
    //     pauseOnFocus:false,
    //     asNavFor:'.pic',
    // });
    

    $('.pr_slider02').slick({
        arrows:false,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        //centerMode:true,
        //centerPadding:"100px",
        pauseOnHover:false,
        pauseOnFocus:false,  
    });
    


    $('#product04 .container .con i.xi-arrow-left').on('click', function(){
        $('.pr_slider02').slick('slickPrev');
    });
    $('#product04 .container .con i.xi-arrow-right').on('click', function(){
        $('.pr_slider02').slick('slickNext');
    });


    $('#link select').on('change', function(){
        var link=$(this).val();
        if(link) window.open(link)
    });






//------
});