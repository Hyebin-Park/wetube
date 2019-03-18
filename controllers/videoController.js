// res.render 함수에 들어가는 인자 1 : 템플릿 / 인자 2 : 템플릿에 추가할 정보가 담긴 객체

import routes from "../routes"

export const home = (req, res) => {
    res.render("home", { pageTitle : "Home", videosDB })
};

export const search = (req, res) => { 
    // const searchingBy = req.query.term <-- OLD SCHOOL WAY
    // USING Destructuring assignment <-- NEW SCHOOL ES6 WAY reference : https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
    console.log(req.query.term);
    const { query: { term: searchingBy } } = req;
    res.render("Search", { pageTitle : "Search", searchingBy, videosDB})
};

export const videos = (req, res) => res.render("videos", { pageTitle : "Videos" })

export const getUpload = (req, res) => {
  
    res.render("upload", { pageTitle : "Upload" })
 
};

export const postUpload = (req, res) => {
    console.log(req.body)
    const {
        body: {  file, title, description }
    } = req;

    // to do : upload and save video
    // 사용자가 비디오를 업로드 하면 새로운 id를 반환받고, 업로드 후에 
    // 사용자를 VIDEO_DETAIL 페이지로 이동시키는 로직
    res.redirect(routes.videoDetail(324393))

}
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" })
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" })
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" })