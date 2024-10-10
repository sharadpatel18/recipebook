const router = require('express').Router();
const {Authentication} = require('../Middlewares/Auth')
const {AddRecipe , GetAllRecipes , GetRecipeById, AddCart, GetCartDataById} = require('../Controllers/RecipeControllers')


// add recipes

router.post("/addrecipe" , Authentication , AddRecipe)

// get all recipes

router.get("/getallrecipe" , Authentication  , GetAllRecipes)

// get recipe by id

router.get('/getrecipebyid/:id' , Authentication  , GetRecipeById)

// add cart
router.post("/addcart" , Authentication , AddCart)

//get all cart by id

router.get('/getcartbyid/:id' , Authentication , GetCartDataById)
module.exports = router