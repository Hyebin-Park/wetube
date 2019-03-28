import express from "express";
import routes from "../routes";
import { getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import { onlyPrivate } from "../middlewares"

const videoRouter = express.Router();

// 여기 속하는 주소는 모두 /videos/~

// UPLOAD
videoRouter.get(routes.upload, onlyPrivate, getUpload);

// 1: post하면 2: videos/에 파일이 업로드 되고, 3: 해당 파일에 접근할 것.
videoRouter.post(routes.upload, uploadVideo, onlyPrivate, postUpload);


// VIDEO DETAIL
// :id로 시작하는 주소의 라우터들은 밑으로 내려준다.
// 경로에서 ':'로 시작하는 부분은 동적으로 할당되는 변수를 뜻함, 이 값은 request의 parameter로 저장됨
// 따라서 url 경로의 :id 부분에 어떤 값이 들어가도 parameter로 적용되어 get신호가 요청되고, 컨트롤러 함수가 실행되는 것 
// 라우트에 필요한건 :id의 '값'이 아니라 parameter로 들어오는 '변수'인 것임.
// https://m.blog.naver.com/PostView.nhn?blogId=azure0777&logNo=220475344428&proxyReferer=https%3A%2F%2Fwww.google.com%2F
videoRouter.get(routes.videoDetail(), videoDetail);


// EDIT VIDEO
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// DELETE VIDEO
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;