import React, { Component } from 'react';

class HomePageSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchEntry: ""
    };
  }

  updateSearchState = () => {
    this.setState({ searchEntry: this.searchInput.value })
  }

  callSearch = (e) => {
    if (e.keyCode === 13) this.search();
  }

  search = () => {
    const { receiveSearch, router } = this.props
    receiveSearch(this.state.searchEntry);
    router.push('events');
  }

  setInputRef = (ref) => {
    this.searchInput = ref;
  }

  render () {
    return (
      <span className="homepage-search">
        <h2>Find your next experience</h2>
        <input
          onChange={ this.updateSearchState }
          onKeyUp={ this.callSearch }
          placeholder="Search events"
          ref={this.setInputRef}
          value={ this.state.searchEntry }
        />
        <button onClick={ this.search }>SEARCH</button>
      </span>
    );
  }
}

export default HomePageSearch;
