const router = require('express').Router();
const {Authentication} = require('../Middlewares/Auth')
const {AddRecipe , GetAllRecipes} = require('../Controllers/RecipeControllers')


// add recipes

router.post("/addrecipe" , Authentication , AddRecipe)

// get all recipes

router.get("/getallrecipe" , Authentication  , GetAllRecipes)

module.exports = router