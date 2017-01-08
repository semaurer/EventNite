import React from 'react';

class HomePageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchEntry: ""
    };
    this.search = this.search.bind(this);
  }

  updateSearchState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  search(e) {
    debugger
  }

  render() {
    return (
      <div className="home-search-container">
        <span className="home-search">
          <h2>Find your next experience</h2>
          <nav>
            <input type="text" value={ this.state.searchEntry }
              onChange={ this.updateSearchState("searchEntry") }
              placeholder="Search events"></input>
            <button onClick={ this.search }>SEARCH</button>
        </nav>
        </span>
      </div>
    );
  }
}

export default HomePageSearch;
