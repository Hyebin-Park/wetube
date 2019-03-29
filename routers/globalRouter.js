// these are automatically added by vs code
import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getLogin, postLogin, logout, getJoin, postJoin, githubLogin, postGithubLogin, getMe } from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);

// postJoin(미들웨어)에서 받은 username(email)과 password정보를 postLogin으로 보낸다.
// 마치 form을 통해 정보를 주듯이.
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);


globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search,search);

// 사용자가 auth/github에 접근하면 githubLogin을 실행시켜 /auth/github/callback으로 돌아오게 만든다. 
globalRouter.get(routes.github, githubLogin);
// /auth/github/callback로 가면 postGithubLogin를 실행시켜 로그인을 수행한다.
globalRouter.get(routes.githubCallback, postGithubLogin); 

globalRouter.get(routes.me, getMe);

export default globalRouter;