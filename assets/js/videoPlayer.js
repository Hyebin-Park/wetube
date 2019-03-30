const videoContainer = document.getElementById('jsVideoPlayer');
const videoplayer = document.querySelector('#jsVideoPlayer video');
const playBtn = document.getElementById('jsVideoPlayBtn');

const handlePlayClick = () => {
    if(videoplayer.paused){
        videoplayer.play();
    } else {
        videoplayer.pause();
    }
}

const init = () => {
    playBtn.addEventListener("click", handlePlayClick);
}

if(videoContainer){
    init();
}