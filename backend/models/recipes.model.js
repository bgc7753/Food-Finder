const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipe: {
        label: { type: String, required: true},
        image: { type: String},
        url: { type: String},
        calories: { type: Number, required: true},
        mealType: { type: Array, required: true}
    }
}, {
    timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;