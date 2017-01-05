import React from 'react';

class HomePageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchEntry: ""
    };
  }

  updateSearchState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="home-search-container">
        <span className="home-search">
          <h2>Find your next experience</h2>
          <input type="text" value={ this.state.searchEntry }
            onChange={ this.updateSearchState("searchEntry") }
            placeholder="Search events"></input>
          <button>SEARCH</button>
        </span>
      </div>
    );
  }
}

export default HomePageSearch;
