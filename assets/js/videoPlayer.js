import { addPrefixToExitFS, addPrefixToGoFS } from "./prefix";

const videoContainer = document.getElementById('jsVideoPlayer');
const videoplayer = document.querySelector('#jsVideoPlayer video');
const playBtn = document.getElementById('jsVideoPlayBtn');
const volumeBtn = document.getElementById('jsVolumeBtn');
const fullScrnBtn = document.getElementById('jsFullScreen');
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");


const registerView = () => {
    const videoId = window.location.href.split("/videos")[1];
    fetch(`http://localhost:4000/api${videoId}/view`, {method: "GET"});
}




const handlePlayClick = () => {
    if(videoplayer.paused){
        videoplayer.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
        videoplayer.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
}

const handleVolumeClick = () => {
    if(videoplayer.muted){
        videoplayer.muted = false;
        volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`
        volumeRange.value = 0.5;
    } else {
        if(!videoplayer.muted) {
            videoplayer.muted = true;
            volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>` 
            volumeRange.value = 0;
                   
        }
    }
}

const exitFullScreen = () => {
    videoplayer.classList.remove("fullscreen-width");
    addPrefixToExitFS();
    fullScrnBtn.innerHTML = `<i class="fas fa-expand"></i>`
    fullScrnBtn.addEventListener("click", goFullScreen);
}

const goFullScreen = () => {
    videoplayer.classList.add("fullscreen-width");
    addPrefixToGoFS(videoContainer);
    fullScrnBtn.innerHTML = `<i class="fas fa-compress"></i>`;
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", exitFullScreen);
}


const formatDate = (seconds) => {
    
    const secondsNumber = parseInt(seconds, 10);
    // 1시간 = 3600초 / 1분 = 60초 즉. 1시간, 1분 이하의 비디오의 경우 hours, minutes = 0
    let hours = Math.floor( secondsNumber / 3600 );
    // 전체 초수 - 시간 초수 / 60 = 분 초수
    let minutes = Math.floor( (secondsNumber - (hours * 3600)) / 60 );
    // 전체 초수 - 시간 초수 - 분 초수 = 초수
    let totalSeconds = secondsNumber - (hours * 3600) - (minutes * 60);

    // 1의 자리 수일 때, n이 아닌 0n으로 표기되게끔 만들어줌.
    if(hours < 10) {
        hours = `0${hours}`;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(seconds < 10) {
        totalSeconds = `0${totalSeconds}`;
    }

    return `${hours}:${minutes}:${totalSeconds}`;

}

const getCurrentTime = () => {
    currentTime.innerHTML = formatDate(Math.floor(videoplayer.currentTime));
    
}


const setTotalTime = () => {
    const totalTimeString = formatDate(Math.floor(videoplayer.duration));
    totalTime.innerHTML = totalTimeString;
    const setinterval = (function(){setInterval(getCurrentTime, 1000);})();
    // if(Math.floor(videoplayer.currentTime) >= Math.floor(videoplayer.duration)){
    //     clearInterval(setinterval);
    // }
   
}

const handleEnded = () => {
    registerView();
    videoplayer.currentTime = 0;
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
}


const handleDrag = (e) => {
    const {
        target : { value }
    } = e;

    videoplayer.volume = value;
    console.log(value)
    if(vlaue >= 0.6){
        volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
        console.log(volumeBtn.innerHTML)
    } else {
        if(vlaue >= 0.2) {
            volumeBtn.innerHTML = `<i class="fas fa-volume-down"></i>`;
        } else {
            volumeBtn.innerHTML = `<i class="fas fa-volume-off"></i>`;
        }
    }
}

const init = () => {
    
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
    videoplayer.addEventListener("loadedmetadata", setTotalTime);
    videoplayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag);
}

if(videoContainer){
    // window.onload = () => {
        init();
    // }
}