import React from 'react';
import HomePageSearch from './homePageSearch';
import EventsPreview from './events_preview';

const HomePage = (props) => {
  return (
    <span className="home-page">
      <img className="home-image" src={ window.home_page_pic }/>
      { props.children }
      <HomePageSearch
        router={ props.router }
        receiveSearch={ props.receiveSearch }
      />
      <EventsPreview
        events={ props.events }
        fetchEvents={ props.fetchEvents }
        currentUser={ props.currentUser }
        savedEvents={ props.savedEvents }
        saveEvent={ props.saveEvent }
        unsaveEvent={ props.unsaveEvent }
      />
    </span>
  );
}

export default HomePage;
