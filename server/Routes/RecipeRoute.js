const router = require("express").Router();
const { Authentication } = require("../Middlewares/Auth");
const {
  AddRecipe,
  GetAllRecipes,
  GetRecipeById,
  AddCart,
  GetCartDataById,
  AddHistory,
  DeleteCart,
  GetHistoryById,
  GetSelectedRecipeById
} = require("../Controllers/RecipeControllers");

// add recipes

router.post("/addrecipe" , Authentication , AddRecipe);

// get all recipes

router.get("/getallrecipe", Authentication , GetAllRecipes);

// get recipe by id

router.get("/getrecipebyid/:id", Authentication , GetRecipeById);

// add cart
router.post("/addcart", Authentication , AddCart);

//get all cart by id

router.get("/getcartbyid/:id", Authentication , GetCartDataById);

// add history

router.post("/addhistory", Authentication , AddHistory);

//delete cart

router.delete("/deletecart/:id", Authentication , DeleteCart);

//get history by id

router.get('/gethistorybyid/:id', Authentication , GetHistoryById);

//get selected recipe by id

router.get('/selectedrecipe/:id' , Authentication , GetSelectedRecipeById)

module.exports = router;
