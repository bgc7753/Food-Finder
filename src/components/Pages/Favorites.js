import React from 'react';
import FoodList from '../FoodList';
import Axios from 'axios';


class Favorites extends React.Component {
    state = { recipes: [] };

    componentDidMount = async () => {
        Axios.get('http://localhost:5000/recipes/')
            .then(response => {
                console.log(response.data)
                this.setState({ recipes: response.data })
                })
            .catch((err) => {
                console.log(err);
            })

    }


    render() {
        return (
           <div className="ui container" style={{margin: "50px 170px"}}>
               <div className="ui segment">Favorites</div>
               <FoodList recipes={this.state.recipes} />
           </div>
           
            
        );
    }
};

export default Favorites;