// res.render 함수에 들어가는 인자 1 : 템플릿 / 인자 2 : 템플릿에 추가할 정보가 담긴 객체

import routes from "../routes"
import Video from "../models/Video";

export const home = async (req, res) => {
    try{
        const videosDB = await Video.find({}).sort({_id:-1});
        console.log(videosDB)
        res.render("home", { pageTitle : "Home", videosDB });
    } catch(error) {
        console.log(error)
        res.render("home", { pageTitle : "Home", videosDB : [] });
    }
    
};

export const search = async (req, res) => { 
    // const searchingBy = req.query.term <-- OLD SCHOOL WAY
    // USING Destructuring assignment <-- NEW SCHOOL ES6 WAY reference : https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
    console.log(req.query.term);
    const { query: { term: searchingBy } } = req;
    let videosDB = [];
    try{
        videosDB = await Video.find({
            title: { $regex: searchingBy, $options: "i" }
        });
    } catch(error) {
        console.log(error)
    }
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
export const videoDetail = async (req, res) => {
    // req.params : ':~' 로 정의된 라우트 파라미터를 담는 객체
    const {
        params: { id }
    } = req;
    try {
        const videoDB = await Video.findById(id);
        res.render("videoDetail", { pageTitle : videoDB.title, videoDB }); 
    } catch(error){
        res.redirect(routes.home);
    }
   
};


export const getEditVideo = async (req, res) => { 
    const {
        params: {id}
    } = req;
    try {
        const videoDB = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${videoDB.title}`, videoDB})
    } catch(error){
        res.redirect(routes.home)
    }
}

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        // 그냥 업데이트만 하면 작업이 마무리 되는 것이기 때문에 값을 변수에 저장할 필요 없음
        // _id : which is added to all MongoDB documents by default and have a default type of ObjectId.
        await Video.findOneAndUpdate({ _id : id }, { title, description })
        res.redirect(routes.videoDetail(id))
    } catch(error){
        res.redirect(routes.home)
    }
};

// 삭제버튼? --> url로 가서 id를 가져오자 --> 삭제!
export const deleteVideo = async(req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findOneAndRemove({_id : id})
    } catch(error) {
        console.log(error)
    }
    res.redirect(routes.home);
    
}