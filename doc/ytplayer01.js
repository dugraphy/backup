$(function(){
//-----
$("#Video").YTPlayer({videoURL:'https://www.youtube.com/embed/Hn1fh7XgXlM',containment:'#visual',
autoPlay:true, 
mute:true, 
startAt:0, 
opacity:1,
showControls:false,
});

$('#visual i.xi-play').on('click', function(){
    $("#Video").YTPPlay();
});

$('#visual i.xi-pause').on('click', function(){
    $("#Video").YTPPause();
});

$('#visual i.xi-overscan').on('click', function(){
    $("#Video").YTPFullscreen();
});

//------
});