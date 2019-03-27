import routes from "./routes";

// 파일을 업로드하고 폼 데이터를 처리하도록 도와줌
import multer from "multer";

// uploads/videos/ 경로에 데이터가 저장됨
const multerVideo = multer({ dest:"uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    // res.locals : 뷰를 렌더링하는 기본 콘텍스트를 포함하는 객체로, 템플릿에서 접근 가능한 변수들을 담고있다.
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    console.log(req.user)
    next();
}

// form input 태그의 name이 videoFile인 파일 하나를 받겠다는 뜻
export const uploadVideo = multerVideo.single("videoFile");