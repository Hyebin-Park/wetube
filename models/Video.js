import mongoose from "mongoose";

//schema(shape, definition)
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // comment의 모든 정보를 저장하는 대신, Comment의 id를 배열에 저장하는 방법.
<<<<<<< HEAD
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
=======
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ]
>>>>>>> aaec6155560c5687fad6b1147584c9fb5d8d4cfe

})

// model(document name, actual data)
const model = mongoose.model("Video", VideoSchema);
export default model;