import React from 'react';
import FoodList from '../FoodList';


class Favorites extends React.Component {
    state = { recipes: [] };

    // componentDidMount = async () => {
    //     const response = await Axios.get(url, {
    //         params: {
    //             q: term,
    //             app_id: APP_ID,
    //             app_key: APP_KEY
    //         }     
    //     });

    //     this.setState({recipes: response.data.hits });
    // }


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