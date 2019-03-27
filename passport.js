// 사용자 인증 방식(strategy)에 관한 모든 것을 설정해줄 파일
// passport-local-mongoose가 제공하는 stratgy, 페북 strategy, 깃헙 stratgy 등...
import passport from "passport-local";
import User from "./models/User"

// createStrategy() : 이미 구성된 passport-local의 LocalStrategy를 생성함.
// 이것저것 할 필요 없이 한줄이면 끝!
passport.use(User.createStrategy())

// serialization? 어떤 정보를 쿠키에게 주느냐. 즉 웹브라우저에 있는 사용자에 대해서 어떤 정보를 가져오느냐를 알려주는 역할
// deserialization? 받은 정보를 어떻게 사용자로 전환하는가
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());