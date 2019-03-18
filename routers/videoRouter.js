import express from "express";
import routes from "../routes";
import { videos, getUpload, postUpload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

// 여기 속하는 주소는 모두 /videos/~

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

// :id로 시작하는 주소의 라우터들은 밑으로 내려준다.
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;