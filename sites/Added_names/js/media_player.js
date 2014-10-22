$(document).ready(function(){
    var controls = {
        video: $("#video-1"),
        playpause: $("#play-pause")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).removeClass("play-video");
            $(this).addClass("pause-video");    
        } else {
            video.pause();
            $(this).removeClass("pause-video");
            $(this).addClass("play-video");
        }
                
        $(this).toggleClass("play-button");
    });

}); 