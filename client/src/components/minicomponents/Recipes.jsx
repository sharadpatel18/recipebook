import React from "react";

const Recipes = ({id,name,image,description , AddtoCart}) => {
    return (
    <>
    <div key={id} className="data">
      <img src={image} alt="err" />
      <h2>{name}</h2>
      <label htmlFor="dis">{description}</label>
      <button className="btn btn-primary" onClick={() => AddtoCart(id)}>
        add to cart
      </button>
      <button
        className="btn btn-primary my-2"
        onClick={() => AddtoCart(id)}
        >
        buy now
      </button>
    </div>
    </>
  );
};

export default Recipes;
