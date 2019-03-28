import express from "express";
import routes from "../routes";
import {userDetail, editProfile, changePassword } from "../controllers/userController";
import { onlyPrivate } from "../middlewares"

const userRouter = express.Router();


// 여기 속하는 주소는 모두 /user/~

// 라우터가 /edit-profile을 :id로 인식하기 때문에 순서를 바꿔준다.
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

// 템플릿(header.pug)에서는 routes.userDetail(user.id)를 통해 /users/${id}가 반영된 url로 연결되지만,
// 실제 라우터는 routes.userDetail()를 요청하기 때문에 기존의 /users/:id가 유지되고 있다.
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;