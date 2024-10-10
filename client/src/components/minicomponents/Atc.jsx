import React, { useEffect, useState } from "react";

const Atc = ({name,quentity,unit,price,PricePerunit ,person , handleUpdateValue,id}) => {

    const [ItemQuentity , setItemQuentity] = useState(quentity);  
    const [ItemPrice , setItemPrice] = useState(price)
    const [showItemQuentity ,setShowItemQuentity] = useState(quentity)

    const HandleQuentityChange = (value) => {
        setItemQuentity(value);
        setItemPrice(price*value)
    }

    useEffect(()=>{
        handleUpdateValue({ingredientname:name , ingredientquentity:parseInt(ItemQuentity) , ingredientunit: unit , ingredientprice:ItemPrice , _id:id})
    },[person,ItemQuentity,ItemPrice])

    useEffect(()=>{
        setItemQuentity(showItemQuentity*person);
        setItemPrice(price*showItemQuentity*person)
    },[person])

   
  return (
    <div className="addtocartdata">
      <label htmlFor="name">{name}</label>
      <div>
        <label htmlFor="daa">ingredientquentity: </label>
        <input
          type="number"
          value={ItemQuentity}

          onChange={(e)=>HandleQuentityChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">ingredientunit: </label>
        <label htmlFor="">{unit}</label>
      </div>
      <div>
        <label htmlFor="">ingredientprice: </label>
        <input type="number" value={ItemPrice} />
      </div>
    </div>
  );
};

export default Atc;
