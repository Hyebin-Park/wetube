//const express = require('express');

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

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

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;