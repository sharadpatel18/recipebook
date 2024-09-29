const RecipeModel = require('../Models/RecipeModel')

const AddRecipe = async (req, res) => {
    try {
        const { recipename, recipeimage, recipedescription, ingredientsList, recipekeyword, userId } = req.body;
        const recipeData = new RecipeModel({ recipename, recipeimage, recipedescription, ingredientsList, recipekeyword, userId });
        recipeData.save();
        res.status(200)
            .json({ message: "recipe sucessfully saved", success: true })
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ message: "internal server error", success: false })
    }
}

const GetAllRecipes = async (req,res) => {
    try {
        const AllRecipes = await RecipeModel.find({})
        res.send(AllRecipes)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {AddRecipe , GetAllRecipes}