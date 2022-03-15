import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{type: String}],
    meta: {
        views: Number,
        rating: Number,
    },
});

const movieModel = mongoose.model("Video", VideoSchema);
export default movieModel;

