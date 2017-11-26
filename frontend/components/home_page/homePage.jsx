import React from 'react';
import HomePageSearch from './homePageSearch';
import EventsPreviewContainer from './eventsPreviewContainer';

const HomePage = (props) => {
  return (
    <span className="home-page">
      <img className="home-image" src={ window.home_page_pic }/>
      { props.children }
      <HomePageSearch
        router={ props.router }
        receiveSearch={ props.receiveSearch }
      />
      <EventsPreviewContainer />
    </span>
  );
}

export default HomePage;
