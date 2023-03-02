import mongoose from "mongoose";

let schema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true },
        cover_photo: { type: String, required: true}
    },
    {
        Timestamps: true 
    }
)

let Manga = mongoose.model('mangas', schema)

export default Manga