// these are automatically added by vs code
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getLogin, postLogin, logout, getJoin, postJoin } from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);

// postJoin(미들웨어)에서 받은 username(email)과 password정보를 postLogin으로 보낸다.
// 마치 form을 통해 정보를 주듯이.
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);


globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search,search);

export default globalRouter;