const router = require('express').Router();
let Recipe = require('../models/recipes.model');

router.route('/').get((req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // const label = req.body.recipe.label;

    // const image = req.body.recipe.image;

    // const url = req.body.recipe.url;

    // const calories = req.body.recipe.calories;

    // const mealType = req.body.recipe.mealType;
    const recipe = req.body.recipe;

    const newRecipe = new Recipe({
        recipe
        // label,
        // image,
        // url,
        // calories,
        // mealType
        
    });

    newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;