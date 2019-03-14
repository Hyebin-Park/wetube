// res.render 함수에 들어가는 인자 1 : 템플릿 / 인자 2 : 템플릿에 추가할 정보가 담긴 객체
export const home = (req, res) => res.render("home", { pageTitle : "Home" });

export const search = (req, res) => { 
    // const searchingBy = req.query.term <-- OLD SCHOOL WAY
    // USING Destructuring assignment <-- NEW SCHOOL ES6 WAY reference : https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
    console.log(req.query.term);
    const { query: { term: searchingBy } } = req;
    res.render("Search", { pageTitle : "Search", searchingBy})
};

export const videos = (req, res) => res.render("videos", { pageTitle : "Videos" })
export const upload = (req, res) => res.render("upload", { pageTitle : "Upload" })
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" })
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" })
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" })