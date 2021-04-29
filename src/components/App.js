import React from 'react';
import Axios from 'axios';
import './App.css';
import Navbar from './Navbar/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import RecipeSearch from './Pages/RecipeSearch';
import RandomRest from './Pages/RandomRest';
import Favorites from './Pages/Favorites';


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
                app_key: APP_KEY,
                from: 0,
                to: 10
            }     
        });

        this.setState({recipes: response.data.hits });
    }
    
    render() {
        return (
    <div>  
        <Navbar />
        <Router>
        {/* <div className="ui container" style={ {margin: "25px"}}> */}
        {/* </div> */}
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={RecipeSearch} />
        <Route path="/randomrest" component={RandomRest} />
        <Route path="/favorites" component={Favorites} />
        </Switch>
        
        </Router>
    </div>
        );
    }
};

export default App;

