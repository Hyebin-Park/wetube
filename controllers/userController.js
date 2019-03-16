import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
    // body parser 미들웨어가 요청바디를 읽을 수 있게 해준다.
    const {
        body: { name, email, password, password2 }
    } = req;

    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // to do : register user
        // to do : log user in
        res.redirect(routes.home)
    }
    res.render("join", { pageTitle: "Join" });
};

export const getLogin = (req, res) => {
    res.render("login");
};

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};


export const logout = (req, res) => {
    // to do : processing log out
    res.redirect(routes.home);
};


export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");