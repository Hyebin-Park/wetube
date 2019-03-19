import mongoose from "mongoose";

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
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
})

const model = mongoose.model("Comment", CommentSchema);
export default model;