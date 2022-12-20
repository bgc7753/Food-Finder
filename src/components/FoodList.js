import './FoodList.css';
import React from 'react';
import FoodItem from './FoodItem';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';

const FoodList = (props) => {
    const recipes = props.recipes.map(food => <FoodItem key={uuidv4()} recipe={food} />)

    return <div className="food-list">{recipes}</div>
};
FoodList.propTypes = {
    recipes: PropTypes.node.isRequired
};

export default FoodList;