import mongoose from "mongoose";

    manga_id: { type: mongoose.Types.ObjectId, ref: 'mangas', required: true }, //como hago para referenciar a la coleccion mangas
    title: { type: String, required: true },
    cover_photo: { type: String },
    pages: { type: Array, required: true },
    order: { type: Number },
},{
    timestamps: true
})

let Chapter = mongoose.model("chapters", schema);
export default Chapter;
