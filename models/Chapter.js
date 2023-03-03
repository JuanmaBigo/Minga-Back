import mongoose from "mongoose";

<<<<<<< HEAD
let schema = new mongoose.Schema({
    manga_id: { type: mongoose.Types.ObjectId, ref: 'mangas', required: true }, //como hago para referenciar a la coleccion mangas
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
=======
    manga_id: { type: mongoose.Types.ObjectId, ref: 'mangas', required: true }, //como hago para referenciar a la coleccion mangas
    title: { type: String, required: true },
    cover_photo: { type: String },
>>>>>>> f70410ea3a2e69e225b64a09409880c5a99af5ac
    pages: { type: Array, required: true },
    order: { type: Number },
},{
    timestamps: true
})

let Chapter = mongoose.model("chapters", schema);
export default Chapter;
