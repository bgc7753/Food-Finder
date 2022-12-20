import React from 'react';
import '../App.css';
import SearchBar from '../SearchBar';
import FoodList from '../FoodList';

const defaultItems = ["chicken","pasta","beef","dinner","breakfast"];

const defaultTerm = defaultItems[Math.floor(Math.random() * defaultItems.length)];

class RecipeSearch extends React.Component {
    state = { recipes: [] };

    componentDidMount = async () => {
        const response = await fetch(`/.netlify/functions/recipe-search?term=${defaultTerm}`).then(res => res.json());
        this.setState({recipes: response.hits });
    }

    onSearchSubmit = async (term) => {
        const response = await fetch(`/.netlify/functions/recipe-search?term=${term}`).then(res => res.json());
        this.setState({recipes: response.hits });
    }

    render() {
        return (
            <div className="ui container" style={ {margin: "40px"}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <FoodList recipes={this.state.recipes} />
            </div>
        );
    }
}

export default RecipeSearch;

