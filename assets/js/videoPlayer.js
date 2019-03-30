const videoContainer = document.getElementById('jsVideoPlayer');
const videoplayer = document.querySelector('#jsVideoPlayer video');
const playBtn = document.getElementById('jsVideoPlayBtn');
const volumeBtn = document.getElementById('jsVolumeBtn');
const fullScrnBtn = document.getElementById('jsFullScreen');

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

const exitFullScreen = () => {
    videoplayer.classList.remove("fullscreen-width");
    document.webkitExitFullscreen();
    fullScrnBtn.innerHTML = `<i class="fas fa-expand"></i>`
    fullScrnBtn.addEventListener("click", goFullScreen);
}

const goFullScreen = () => {
    videoplayer.classList.add("fullscreen-width");
    videoContainer.webkitRequestFullscreen();
    fullScrnBtn.innerHTML = `<i class="fas fa-compress"></i>`;
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", exitFullScreen);
}


const init = () => {
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
}

if(videoContainer){
    init();
}