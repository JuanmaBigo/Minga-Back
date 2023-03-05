import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: { type: String, required: true} ,
    details: { type: String, required: true }, 
    admin_id: { type: String, required: true}
},{
    timestamps: true
})

let Category = mongoose.model('categories', schema)

export default Category