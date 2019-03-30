const videoContainer = document.getElementById('jsVideoPlayer');
const videoplayer = document.querySelector('#jsVideoPlayer video');
const playBtn = document.getElementById('jsVideoPlayBtn');
const volumeBtn = document.getElementById('jsVolumeBtn');

const handlePlayClick = () => {
    if(videoplayer.paused){
        videoplayer.play();
    } else {
        videoplayer.pause();
    }
}

const handleVolumeClick = () => {
    if(videoplayer.muted){
        videoplayer.muted = false;
        volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`
    } else {
        if(!videoplayer.muted) {
            videoplayer.muted = true;
            volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`        
        }
    }
}

const init = () => {
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
}

if(videoContainer){
    init();
}