$(function(){
    


    $(".또누기").on("click",function(){
        $("h1").hide();
    });
 
    $("#이동욱").on("click",function(){
        $("h1").show();
    });

    $(".나는버튼").on("click", function(){
       $("figure").toggleClass("on")
    });

});