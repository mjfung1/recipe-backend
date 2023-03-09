import mongoose from "mongoose";

const Schema =  mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
    },
    savedRecipes: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }]
})

export const UserModel = mongoose.model("User", UserSchema);

