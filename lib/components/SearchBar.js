import React, {Component} from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends Component {
    state = { 
        searchTerm: ''
    };
    doSearch = debounce(() => {
        this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300) // debounce this after 300 milliseconds

    handleSearch = (evt) => {
        this.setState({searchTerm: evt.target.value}, () => {
            this.doSearch();
        });
    }
    render() { 
        return ( <input type='search' 
            placeholder='Enter search term'
            //ref={(input) => this.searchInput = input}
            value={this.state.searchTerm}
            onChange={this.handleSearch} /> );
    }
}
 
export default storeProvider()(SearchBar);