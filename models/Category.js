import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        detail: { type: String, required: true }
    },{
        timestamps: true
    }
)



export const Category = mongoose.model('categories', schema)