// 사용자 인증 방식(strategy)에 관한 모든 것을 설정해줄 파일
// passport-local-mongoose가 제공하는 stratgy, 페북 strategy, 깃헙 stratgy 등...

// oauth 과정
// 1. 사용자를 정보를 받아올 페이지로 보낸다. 
// 2. 페이지는 사용자의 승인을 받은뒤 요청한 사용자의 정보와 함께 callbackURL로 돌려보낸다.
import passport from "passport";

import GithubStrategy from "passport-github";
import User from "./models/User"
import { githubLoginCallback } from "./controllers/userController";

import FacebookStrategy from "passport-facebook";
import { facebookLoginCallback } from "./controllers/userController";

import routes from "./routes";

// createStrategy() : 이미 구성된 passport-local의 LocalStrategy를 생성함.
// 이것저것 할 필요 없이 한줄이면 끝!
passport.use(User.createStrategy());

// 2번 과정
passport.use(new GithubStrategy({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:4000${routes.githubCallback}`
    }, 
        // 첫 passport.authenticate(('github')를 통해 인증에 성공하면
        // user를 찾거나 생성한 뒤, user객체를 인자로 받은 ***함수 호출***
        // local 방식으로 로그인할 때의 조건이 갖춰짐 그 이후의 과정은 동일 ↓
        githubLoginCallback
    )

)

passport.use(new FacebookStrategy({
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: `https://horrible-cow-12.localtunnel.me/auth/facebook/callback`,
        profileFields: ["id", "displayName", "photos", "email"],
        scope: ["public_profile", "email"]
    },
        facebookLoginCallback
    )
)

// serialization? 어떤 정보를 쿠키에게 주느냐. 즉 웹브라우저에 있는 사용자에 대해서 어떤 정보를 가져오느냐를 알려주는 역할
// deserialization? 받은 정보로 어떻게 사용자를 식별하는가
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());