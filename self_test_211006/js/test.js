$(function(){

    $(".또누기").on("click",function(){
        $("h1").hide();
    })

    $("#반응형").on("click",function(){
        $("h1").show();
    })

    $(".출발").on("click", function(){
        $("figure").toggleClass("on")
    });
});