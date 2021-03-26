import React from 'react';

const FoodItem = ({recipe}) => {
    const {label, image, url, ingredients } = recipe.recipe;
    return (        
    <div className="card">
        <h4>{label}</h4>
        <div className="image">
        <img src={image} alt={label}/>
        </div>
        <a href={url} target="_blank" rel="nooperner noreferrer">
            Recipe
        </a>
        <button>Ingredients</button>
    </div>
    );
};

export default FoodItem;