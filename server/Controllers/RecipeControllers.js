const RecipeModel = require('../Models/RecipeModel')
const CartData = require('../Models/Cart')

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

const GetRecipeById = async (req,res) => {
    try {
        const {id} = req.params;
        const getRecipe = await RecipeModel.findById(id)
        res.send(getRecipe)
    } catch (error) {
        console.log(error);   
    }
}

const AddCart = async (req,res) => {
    try {
        const oldData = await CartData.findOne({name:req.body.name})
        if (oldData) {
            const updated = await CartData.findByIdAndUpdate(oldData._id , req.body)
            return res.status(201)
                        .json({message:"old cart is updated"})
        }
        const addcart = new CartData(req.body) 
        addcart.save()
        res.status(201)
            .json({
                message:"successfully saved!!!!",
                success:true
            })
    } catch (error) {
        res.status(501)
            .json({
                message:"internal server Err",
                success:false
            })
    }
}

const GetCartDataById = async (req,res) => {
    const {id} = req.params;
    const data = await CartData.find({userId:id});
    res.send(data)
}

module.exports = {AddRecipe , GetAllRecipes , GetRecipeById , AddCart , GetCartDataById}