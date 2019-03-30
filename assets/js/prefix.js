export const addPrefixToExitFS = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
      }
}


export const addPrefixToGoFS = (videoContainer) => {
    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
            videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
      }
}