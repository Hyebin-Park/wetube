const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const recordedVideo = document.getElementById("jsVideoPreview");


const startRecording = async () => {
    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
            // video: { width: 1280, height: 720 }
        });
        console.log(stream);
        recordedVideo.srcObject = stream;
        recordedVideo.muted = true;
        recordedVideo.play();

    } catch(error){
        console.log(error);
        recordBtn.innerHTML = `YOU CAN'T RECORD`
        recordBtn.removeEventListener("click", startRecording);

    }
}

const init = () => {
    recordBtn.addEventListener("click", startRecording);
}

if(recorderContainer) {
    init();
}
