// 사용자 인증 방식(strategy)에 관한 모든 것을 설정해줄 파일
// passport-local-mongoose가 제공하는 stratgy, 페북 strategy, 깃헙 stratgy 등...
import passport from "passport";
import User from "./models/User";

// createStrategy() : 이미 구성된 passport-local의 LocalStrategy를 생성함.
// 이것저것 할 필요 없이 한줄이면 끝!
passport.use(User.createStrategy());


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());