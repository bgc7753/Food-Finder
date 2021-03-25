import React from 'react';
import edamam from '../api/edamam';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { recipes: [] };

    onSearchSubmit = async (term) => {
        const response = await edamam.get('/search/', {
            params: {q: term}     
        });

        this.setState({recipes: response.data.results });
    }
    
    render() {
        return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <FoodList images={this.state.images} />
    </div>
        );
    }
};

export default App;

