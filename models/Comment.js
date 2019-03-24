import mongoose from "mongoose";

<<<<<<< HEAD
// ajax를 이용하여 전체 새로고침 없이 댓글 부분만 실시간으로 업데이트 되도록 할 것!

=======
>>>>>>> aaec6155560c5687fad6b1147584c9fb5d8d4cfe
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
<<<<<<< HEAD
    // video: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Video"
    // }
=======
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
>>>>>>> aaec6155560c5687fad6b1147584c9fb5d8d4cfe
})

const model = mongoose.model("Comment", CommentSchema);
export default model;