import React from 'react';
import HomePageSearch from './home_page_search';
import EventsPreview from './events_preview';

class homePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <span className="home-page-pic">
        <img className="home-image" src={ window.home_page_pic }/>
        <HomePageSearch router={ this.props.router }
          receiveSearch={ this.props.receiveSearch }></HomePageSearch>
        <EventsPreview events={ this.props.events }
          fetchEvents={ this.props.fetchEvents }></EventsPreview>
      </span>
    );
  }

}

export default homePage;
