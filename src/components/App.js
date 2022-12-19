import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import RecipeSearch from './Pages/RecipeSearch';
import RandomRest from './Pages/RandomRest';
import Favorites from './Pages/Favorites';

class App extends React.Component {
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

