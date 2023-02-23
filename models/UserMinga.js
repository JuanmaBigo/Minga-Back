import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    email_notification: { type: Boolean }
},{
    timestamps: true
})

let User = mongoose.model("usersminga", schema);
export default User;
