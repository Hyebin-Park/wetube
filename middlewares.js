import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    // res.locals : 뷰를 렌더링하는 기본 콘텍스트를 포함하는 객체로, 템플릿에서 접근 가능한 변수들을 담고있다.
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
}