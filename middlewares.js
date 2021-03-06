import routes from "./routes";

// 파일을 업로드하고 폼 데이터를 처리하도록 도와줌
import multer from "multer";

// uploads/videos/ 경로에 데이터가 저장됨(이렇게 직접 저장하는 방식은 좋지 않음. 나중에 aws로 옮길것)
const multerVideo = multer({ dest:"uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" })

export const localsMiddleware = (req, res, next) => {
    // res.locals : 뷰를 렌더링하는 기본 콘텍스트를 포함하는 객체로, 템플릿에서 접근 가능한 변수들을 담고있다.
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    console.log(req.user)
    next();
}

// 로그아웃 상태인 경우에만 특정 주소를 담당하는 라우터의 실행을 허용하는 미들웨어
export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect(routes.home);
    } else {
        next();
    }
}
// 로그인 상태인 경우에만 특정 주소를 담당하는 라우터의 실행을 허용하는 미들웨어
export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next();
    } else {
        res.redirect(routes.home);
    }
}

// form input 태그의 name이 videoFile인 파일 하나를 받겠다는 뜻
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");