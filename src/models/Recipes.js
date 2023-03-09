import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String, required: true
    }],
    instructions: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

export const RecipeModel = mongoose.model("Recipe", RecipeSchema);