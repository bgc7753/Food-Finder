import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import FoodList from './FoodList';
import Navbar from './Navbar';

const APP_ID = process.env.REACT_APP_FOOD_ID;

const APP_KEY = process.env.REACT_APP_FOOD_KEY;

const url = 'https://api.edamam.com/search';

class App extends React.Component {
    state = { recipes: [] };

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
    <div className="ui container" style={{marginTop: '10px'}}>
        <Navbar />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <FoodList recipes={this.state.recipes} />
    </div>
        );
    }
};

export default App;

