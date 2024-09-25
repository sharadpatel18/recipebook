import React, { useState } from 'react'
import Ingredients from '../minicomponents/Ingredients'
const Addrecipe = () => {
    const [recipename , setRecipeName] = useState("");
    const [recipeimage, setrecipeImage] = useState("");
    const [recipedescription , setRecipeDescription] = useState("")
    const [recipekeyword, setRecipeKeyword] = useState([]);
    const [component, setComponents] = useState([]);
    const [ingredientsList, setingredientsList] = useState([]);
    const [keywords, setkeywords] = useState(['fastfood', 'snacks', 'veg', 'non-veg', 'jain', 'healthy']);
    const [IngObj , setIngObj] = useState({});
    const handleAddComponent = () => {
        if (component.length === 0 || IngObj.ingredientName !== "" && IngObj.quentity !== "" && IngObj.ingredientunits !== "" && IngObj.ingredientprice !== "") {
            setComponents((prev) => [
                ...prev,
                <Ingredients handleRemove={handleRemove} index={component.length} onChangeValue={handleChangeValue} setIngObj={setIngObj}/>
            ])
            setingredientsList((prevData) => [...prevData, {}])
        }
    }
    const imageSave = (e) => {
        let render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = () => {
            console.log(render.result);
            setrecipeImage(render.result)
        }
        render.onerror = (error) => {
            console.log("Error: ", error);
        }
    }
    const handleChangeValue = (index, newData) => {
        setingredientsList((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = newData;
            return updatedData;
        })
    }
    
    //
    const handleRemove = () => {
        setComponents((prev) => [
            prev.slice(0, -1)
        ])
    }
    //suggest keyword add in recipe keyword state
    const handleAddKeyWord = (item) => {
        if (!recipekeyword.includes(item)) {
            setRecipeKeyword((prev)=>[...prev , item])
        }
    }

    const handleSubmit = () => {
        
    }
    
    return (
        <div className='add-main'>
            <div className='add-container'>
                <h1>Add New Recipe</h1>
                <div className='add-div-1'>
                    <div>
                        <label htmlFor="tags">Recipe Name</label>
                        <input type="text" name="text" value={recipename} onChange={(e)=>setRecipeName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="tags">Recipe image</label>
                        <input type="file" name="file" onChange={imageSave} />
                        {recipeimage == "" || recipeimage == null ? "" : <img width={100} height={100} src={recipeimage} alt='image in not render' />}
                    </div>
                </div>
                <div className='add-div-2'>
                    <label htmlFor="tages">Recipe</label>
                    <textarea name="text" placeholder='enter recipe discription' value={recipedescription} onChange={(e)=>setRecipeDescription(e.target.value)}></textarea>
                </div>
                <div className='add-div-3'>
                    <label htmlFor="123">add Ingredients</label>
                    <button className='btn btn-primary' onClick={handleAddComponent}>+</button>
                    {component}

                </div>
                <div className='add-div-4'>
                    <label htmlFor="123">keywords</label>
                    <textarea name="text" placeholder='enter keyword' value={recipekeyword}></textarea>
                </div>
                <div className='add-div-5'>
                    <label htmlFor="123">Suggested Keywords: </label>
                    <div>
                        {
                            keywords.map((item) => (
                                <button key={item} className='btn btn-primary mx-1 my-1' onClick={()=>handleAddKeyWord(item)}>{item}</button>
                            ))
                        }
                    </div>
                </div>
                <hr />
                <div className='add-div-6'>
                    <button className='btn btn-primary'>Preview</button>
                    <button className='btn btn-primary mx-2' onClick={handleSubmit}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default Addrecipe
