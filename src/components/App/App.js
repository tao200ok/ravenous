import React from "react";
import './App.css';

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'businesses': []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    if (term, location) {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({
          'businesses': businesses
        })
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>raven</h1>
        <SearchBar businesses={this.state.businesses} searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
