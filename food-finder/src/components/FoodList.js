import './FoodList.css';
import React from 'react';
import FoodItem from './FoodItem';
import {v4 as uuidv4} from 'uuid';

const FoodList = (props) => {
    const recipes = props.recipes.map(food => <FoodItem key={uuidv4()} recipe={food} />)
    // const recipes = props;
    console.log(props.recipes);

    return <div className="ui three stackable cards" style={{padding: "10px 10px"}}>{recipes}</div>
}

export default FoodList;