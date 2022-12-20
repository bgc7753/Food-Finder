import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    static get propTypes() { 
        return { 
            onSubmit: PropTypes.func 
        }; 
    }

    render() {
        return (
            <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Enter a Food Item Below</label>
                <input 
                type='text' 
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}/>
                </div>
            </form>
            </div>
        );
    }
}

export default SearchBar;