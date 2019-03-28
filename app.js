//const express = require('express');

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import "./passport"

const app = express();

console.log(process.env.COOKIE_SECRET)

// connect-mongo(MongoStore)에 session의 데이터를 저장하라고 지시한 상태.
const CookieStore = MongoStore(session)

// HTTP 헤더를 적절히 설정하여 웹 취약성으로부터 앱을 보호하는 미들웨어
app.use(helmet());

// pug : html 파일 작성시 반복 작업을 최소화 하게 해주는 템플릿 엔진 중 하나
app.set('view engine', "pug");

// express.static() : 특정 디렉토리에 포함된 정적파일을 제공함
//  /uploads 경로 접두부를 통해 uploads 디렉토리에 포함된 파일을 로드할 수 있게 된다.
app.use("/uploads", express.static("uploads"));

app.use("/static", express.static("static"));

//use middleware globally for all route
app.use(cookieParser());

// 요청된 데이터를 해석해주는 미들웨어, form, json, AJAX 요청의 데이터를 처리 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// application에서 발생하는 모든 일들을 logging 하는 미들웨어
app.use(morgan("dev"));


// session을 통해 쿠키가 express로 전달됨
app.use(session({
    // 정보를 암호화 시킴
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    // CookieStore와 mongoDB의 중간다리 역할을 함.이 과정을 통해 CookiStore를 mongoDB에 저장할 수 있게 됨.
    store: new CookieStore({ mongooseConnection : mongoose.connection })
}))

// 위에서 실행된 쿠키파서로부터 내려온 쿠키를 사용할 것임.
// 일단 passport를 초기화시키고
app.use(passport.initialize());

// session이 갖고있는 쿠키를 이용할 것이고, 그 쿠키 정보에 해당하는 사용자를 찾아낼 예정
// a middleware to alter the req object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object.
// how? passport에 해독된 쿠키를 넘겨 deserializeUser 함수를 실행시킴으로써
// deserializeUser 함수의 결과 즉 쿠키에 해당하는 user를 미들웨어(localsMiddleware) routes의 request 객체에 할당시킨다.
// 어느 라우터에서든 로그인한 유저가 누구인지 알 수 있게 된 것임
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;