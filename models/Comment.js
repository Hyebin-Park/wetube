import mongoose from "mongoose";

// ajax를 이용하여 전체 새로고침 없이 댓글 부분만 실시간으로 업데이트 되도록 할 것!

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // comment의 모든 정보를 저장하는 대신, video의 id를 저장하는 방법.
    // "hey, go grab me the 'video' with id ~~~"
    // video: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Video"
    // }
    creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;