// res.render 함수에 들어가는 인자 1 : 템플릿 / 인자 2 : 템플릿에 추가할 정보가 담긴 객체
export const home = (req, res) => res.render("home", { pageTitle : "Home" });
export const search = (req, res) => res.render("Search", { pageTitle : "Search" });
export const videos = (req, res) => res.render("videos", { pageTitle : "Videos" })
export const upload = (req, res) => res.render("upload", { pageTitle : "Upload" })
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" })
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" })
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" })