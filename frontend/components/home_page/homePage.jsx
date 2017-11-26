import React, { Component } from 'react';
import HomePageSearch from './home_page_search';
import EventsPreview from './events_preview';

class homePage extends Component {
  render() {
    return (
      <span className="home-page-pic">
        <img className="home-image" src={ window.home_page_pic }/>
        { this.props.children }
        <HomePageSearch router={ this.props.router }
          receiveSearch={ this.props.receiveSearch }></HomePageSearch>
        <EventsPreview events={ this.props.events }
          fetchEvents={ this.props.fetchEvents }
          currentUser={ this.props.currentUser }
          savedEvents={ this.props.savedEvents }
          saveEvent={ this.props.saveEvent }
          unsaveEvent={ this.props.unsaveEvent}></EventsPreview>
      </span>
    );
  }
}

export default homePage;
