import express from "express";
import routes from "../routes";
import { postregisterView } from "../controllers/videoController";

const apiRouter = express.Router();

// registerView에서 post가 들어온다! -> postregisterView 함수 실행시켜서 database 변경시키자
apiRouter.post(routes.registerView, postregisterView); 

export default apiRouter;