// res.render 함수에 들어가는 인자 1 : 템플릿 / 인자 2 : 템플릿에 추가할 정보가 담긴 객체

import routes from "../routes"
import Video from "../models/Video";

export const home = async (req, res) => {
    try{
        const videosDB = await Video.find({});
        res.render("home", { pageTitle : "Home", videosDB });
    } catch(error) {
        console.log(error)
        res.render("home", { pageTitle : "Home", videosDB : [] });
    }
    
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

export const postUpload = async (req, res) => {
    console.log(req.body)
    const {
        body: { title, description},
        // 파일 자체가 아닌 **경로**를 불러오기
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    })
    console.log(newVideo)
    // to do : upload and save video
    // 사용자가 비디오를 업로드 하면 새로운 id를 반환받고, 업로드 후에 
    // 사용자를 VIDEO_DETAIL 페이지로 이동시키는 로직
    res.redirect(routes.videoDetail(newVideo.id))
    

}
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" })
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" })
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" })