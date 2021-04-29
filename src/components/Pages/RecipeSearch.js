import React from 'react';
import Axios from 'axios';
import '../App.css';
import SearchBar from '../SearchBar';
import FoodList from '../FoodList';

const APP_ID = process.env.REACT_APP_FOOD_ID;

const APP_KEY = process.env.REACT_APP_FOOD_KEY;

const url = 'https://api.edamam.com/search';

const defaultItems = ["chicken","pasta","beef","dinner","breakfast"];

const term = defaultItems[Math.floor(Math.random() * defaultItems.length)];

class RecipeSearch extends React.Component {
    state = { recipes: [] };


    componentDidMount = async () => {
        const response = await Axios.get(url, {
            params: {
                q: term,
                app_id: APP_ID,
                app_key: APP_KEY
            }     
        });

        this.setState({recipes: response.data.hits });
    }

    onSearchSubmit = async (term) => {
        const response = await Axios.get(url, {
            params: {
                q: term,
                app_id: APP_ID,
                app_key: APP_KEY
            }     
        });

        this.setState({recipes: response.data.hits });
    }
    
    render() {
        return (
            <div className="ui container" style={ {margin: "40px"}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <FoodList recipes={this.state.recipes} />
            </div>
        );
    }
};

export default RecipeSearch;

