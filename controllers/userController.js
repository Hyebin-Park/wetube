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



export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb);
}

export const postFacebookLogin = passport.authenticate("facebook", {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const logout = (req, res) => {
    // to do : processing log out using passport
    req.logout();
    res.redirect(routes.home);
};

export const getMe = async (req, res) => {
    try {
        const vidInfoByLoggedUser = await User.findById(req.user.id).populate("videos");
        res.render("userDetail", { pageTitle : "User Detail", vidInfoByLoggedUser, user: req.user });

    } catch(error){
        console.log(error);
    }
    
};

export const userDetail = async (req, res) => {
    const { params: { id } } = req;
    try{
        const user = await User.findById(id).populate("videos");
        res.render("userDetail", {  pageTitle : "User Detail", user});
        console.log(user)
    }catch(error){
        res.redirect(routes.home);
    }
}

export const getEditProfile = (req, res) => {
    res.render("editProfile", { pageTitle: "Edit Profile" });
};
export const postEditProfile = async (req, res) => {
    const {
        body: { email, name },
        // from multer
        file
    } = req
    try {
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl: file ? file.path : req.user.avatarUrl 
        })
        res.redirect(routes.me)
    } catch(error) {
        res.redirect(routes.editProfile);
    }
};
export const getChangePassword = (req, res) => {
    res.render("changePassword", { pageTitle: "Change Password" })
};

export const postChangePassword = async (req, res) => {
    const {
        body: {
            oldPassword,
            newPassword,
            newPassword1
        }
    } = req;

    try{
        if(newPassword !== newPassword1){
            console.log("go back, you're wrong")
            // 상태코드를 바꿔주지 않으면 브라우저는 방금 작업이 성공적으로 수행된 것으로 착각함(200)
            res.status(400);
            res.redirect(`/users${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
    }catch(error){
        console.log(error)
        res.status(400);
        res.redirect(`/users${routes.changePassword}`);
    }
};