import React from 'react';
import HomePageSearch from './home_page_search';

class homePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="home-page-pic">
        <img className="home-image" src={ window.home_page_pic }/>
        <HomePageSearch router={ this.props.router }></HomePageSearch>
      </span>
    );
  }

}

export default homePage;
