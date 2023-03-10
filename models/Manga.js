import mongoose from "mongoose";

let schema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true },
        category: { type: String, required: true},
        // category_id: { type: String, required: true},
        // cover_photo: { type: String, required: true},
        // author_id: { type: String, require: true },
        // company_id: { type: String },
    },
    {
        timestamps: true 
    }
)

let Manga = mongoose.model('mangas', schema)
export default Manga