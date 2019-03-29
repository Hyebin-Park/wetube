import routes from "../routes";
import User from "../models/User"
import passport from "passport";


export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};


// 미들웨어 함수로 바꿔준다.
export const postJoin = async (req, res, next) => {
    // body parser 미들웨어가 요청바디를 읽을 수 있게 해준다.
    const {
        body: { name, email, password, password2 }
    } = req;

    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try{
            // to do : register user
            const user = await User({name,email});
            await User.register(user, password);
            // postLogin한테 정보 넘겨주자!
            next();
        }catch(error){
            console.log(`The error is ${error}`)
            res.redirect(routes.home)
        }
        // to do : log user in
    }
};

export const getLogin = (req, res) => {
    res.render("login");
};

// local is strategy name we installed before
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

// passport.js에 설정해놓은 strategy를 실행함.
export const githubLogin = passport.authenticate('github');

export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    const { 
        _json: { id, avatar_url, name, email } 
    } = profile;
    try{
        const user = await User.findOne({email});
        if(user) {
            user.githubId = id;
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl: avatar_url
        })
        return cb(null, newUser);

        }catch(error) {
            console.log(error)
            return cb(error);
        }
  };



// 받아온 정보로 실질적인 로그인 작업을 수행하는 코드
export const postGithubLogin = passport.authenticate("github", {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const logout = (req, res) => {
    // to do : processing log out using passport
    req.logout();
    res.redirect(routes.home);
};

export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle : "User Detail", user: req.user });
};

export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");