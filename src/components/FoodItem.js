import React from 'react';
import PropTypes from 'prop-types';
import './FoodList';

const FoodItem = ({recipe}) => {
    const {label, image, url, calories, mealType } = recipe.recipe;
    const cal = Math.round(Number(calories));
    return (        
    <div className="card">
        <div className="image">
        <a href={url} target="_blank" rel="nooperner noreferrer">
        <img src={image} alt={label}/>
        </a>
        </div>
        <span className="recipelink"><a href={url} target="_blank" rel="nooperner noreferrer">
            {label}
        </a>
        </span>
        <div className="calories">Calories: {cal}</div>
        <div className="mealType">{mealType}</div>
        
    </div>
    );
};
FoodItem.propTypes = {
    recipe: PropTypes.string,
};

export default FoodItem;