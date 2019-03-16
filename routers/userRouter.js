import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);

// 여기 속하는 주소는 모두 /user/~

// 라우터가 /edit-profile을 :id로 인식하기 때문에 순서를 바꿔준다.
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;