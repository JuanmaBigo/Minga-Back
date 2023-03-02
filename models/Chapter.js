import mongoose from "mongoose";

let schema = new mongoose.Schema({
    manga_id: { type: String, required: true },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: { type: Array, required: true },
    order: { type: Number },
},{
    timestamps: true
})

let Chapter = mongoose.model("chapters", schema);
export default Chapter;
