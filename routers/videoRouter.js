import express from "express";
import routes from "../routes";
import { videos, getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// 여기 속하는 주소는 모두 /videos/~

// UPLOAD
videoRouter.get(routes.upload, getUpload);

// 1: post하면 2: videos/에 파일이 업로드 되고, 3: 해당 파일에 접근할 것.
videoRouter.post(routes.upload, uploadVideo, postUpload);


// VIDEO DETAIL
// :id로 시작하는 주소의 라우터들은 밑으로 내려준다.
// 경로에서 ':'로 시작하는 부분은 동적으로 할당되는 변수를 뜻함, 이 값은 request의 parameter로 저장됨
// 따라서 :id 부분에 어떤 값이 들어가도 parameter로 적용되어 get신호가 요청되고, 컨트롤러 함수가 실행되는 것 
videoRouter.get(routes.videoDetail(), videoDetail);


// EDIT VIDEO
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// DELETE VIDEO
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;