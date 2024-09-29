const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipename:{
        type:String,
    },
    recipeimage:{
        type:String,
    },
    recipedescription:{
        type:String,
    },
    ingredientsList:{
        type:String,
    },
    recipekeyword:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    }
})

const Recipe = mongoose.model("Recipe" , recipeSchema)
module.exports = Recipe;