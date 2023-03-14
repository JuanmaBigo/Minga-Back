import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        author_id: { type: mongoose.Types.ObjectId, require: true },
        company_id: { type: mongoose.Types.ObjectId, ref: 'companies'}, 
        title: { type: String, required: true },
        cover_photo: { type: String, required: true },
        description: { type: String, required: true },
        category_id: { type: mongoose.Types.ObjectId, ref:'categories', require: true }
    },{
        timestamps: true
    }
)

const Manga = mongoose.model('mangas', schema)

export default Manga