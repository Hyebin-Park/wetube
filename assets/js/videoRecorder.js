const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const recordedVideo = document.getElementById("jsVideoPreview");

let videoRecorder;



const handleVideoData = (e) => {
    const { data: videoFile } = e;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = "recorded.webm";
    document.body.appendChild(link);
    link.click();
}


const stopRecording = () => {
    videoRecorder.stop();
    // start부터 stop까지 레코딩 된 결과물이 생기면 dataavailable 이벤트가 발생
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = `START RECORDING`;
    
}


const startRecording = (stream) => {
    videoRecorder = new MediaRecorder(stream);
    videoRecorder.start();
    recordBtn.addEventListener("click", stopRecording)
}

const getVideo = async () => {
    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
            // video: { width: 1280, height: 720 }
        });
        console.log(stream);
        recordedVideo.srcObject = stream;
        recordedVideo.muted = true;
        recordedVideo.play();
        recordBtn.innerHTML = `STOP RECORDING`;
        startRecording(stream);

    } catch(error){
        console.log(error);
        recordBtn.innerHTML = `YOU CAN'T RECORD`

    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
}

const init = () => {
    recordBtn.addEventListener("click", getVideo);
}

if(recorderContainer) {
    init();
}
