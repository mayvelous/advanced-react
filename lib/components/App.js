import React, { PureComponent } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';
// react-addons-perf DOES NOT work with react 16.x
// import Perf from 'react-addons-perf';

// if(typeof(window) !== 'undefined')
// {
//     window.Perf = Perf;
// }

class App extends PureComponent {
    static childContextTypes = {
        store: PropTypes.object,
    };
    getChildContext(){
        return { store: this.props.store};
    }
    appState = () => {
        const {articles, searchTerm} = this.props.store.getState();
        return {articles, searchTerm};
    }
    state = this.appState();
    onStoreChange = () => {
        this.setState(this.appState());
    }  
    componentDidMount(){
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
        // setImmediate(() => {
        //     Perf.start();
        // });
        // setTimeout(() => {
        //     Perf.stop();
        //     Perf.printWasted();
        // }, 5000);
    }
    componentWillUnmount(){
        this.props.store.unsubscribe(this.subscriptionId);
    }    
    render() { 
        let {searchTerm, articles} = this.state;
        const searchRegx = new RegExp(searchTerm, 'i');
        if(searchTerm)
        {
            articles = pickBy(articles, (value) => {
                return value.title.match(searchRegx) || value.body.match(searchRegx);
            });
        }
        return ( 
            <div>
                <Timestamp />
                <SearchBar />
                <ArticleList
                    articles={articles}
                />
            </div>
        );
    }
}
 
export default App;