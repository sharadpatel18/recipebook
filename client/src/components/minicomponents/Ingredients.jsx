import React, { useEffect, useState } from 'react'

const Ingredients = ({ handleRemove , index , onChangeValue , setIngObj}) => {
    const [ingredientName , setingredientname] = useState("")
    const [ingredientquentity , setingredientquentity] = useState("")
    const [ingredientunit , setingredientunit] = useState("")
    const [ingredientprice , setingredientprice] = useState("")
        useEffect(()=>{
            const newData = {ingredientName,ingredientquentity,ingredientunit,ingredientprice}
            setIngObj(newData)
            onChangeValue(index,newData)
        },[ingredientunit , ingredientName , ingredientquentity , ingredientprice])
    return (
        <div className='ingredient-main'>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" className='name' value={ingredientName} onChange={(e)=>setingredientname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Quantity: </label>
                <input type="number" className='quantity' value={ingredientquentity} onChange={(e)=>setingredientquentity(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Unite: </label>
                <select name="units" value={ingredientunit} onChange={(e)=>setingredientunit(e.target.value)}>
                    <option value="kgs">KG</option>
                    <option value="gram">Grams</option>
                    <option value="liter">liter</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Price: </label>
                <input type="number" name="number" className='price' value={ingredientprice} onChange={(e)=>setingredientprice(e.target.value)}/>
            </div>
            <div className='ingre-btn'>
                <button className='btn btn-danger' onClick={handleRemove}>-</button>
            </div>
        </div>
    )
}

export default Ingredients
