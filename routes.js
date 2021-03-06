// APPLY SINGLE SOURCE OF TRUTH(SSOT)
// 한 곳에 모든 정보를 모아둠으로써 코드를 명료화하고, 버그를 최소화시키자!

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // ':' --> it means the value can change not just text 
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me"

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; 
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete"

// Gitgub

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Facebook

const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// API --> 서버와 통신하기 위한 URL(1. 유저가 절대 찾을 수 없음 / 2. 어떤 내용도 렌더링하지 않음)

const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment"

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if (id) {
        // this is for template
          return `/users/${id}`;
        } else {
        // this is for router
          return USER_DETAIL;
        }
      },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if(id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: id => {
        if(id) {
            return `/videos/${id}/edit`
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: id => {
        if(id) {
            return `/videos/${id}/delete`
        } else {
            return DELETE_VIDEO;
        }
   },
   github: GITHUB,
   githubCallback: GITHUB_CALLBACK,
   me: ME,
   facebook: FACEBOOK,
   facebookCallback: FACEBOOK_CALLBACK,
   api: API,
   registerView: REGISTER_VIEW,
   addComment: ADD_COMMENT
};

export default routes;