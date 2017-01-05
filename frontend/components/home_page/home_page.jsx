import React from 'react';
import HomePageSearch from './home_page_search';

const homePage = () => {
  return (
    <span className="home-page-pic">
      <img className="home-image" src={ window.home_page_pic }/>
      <HomePageSearch></HomePageSearch>
    </span>
  );
};

export default homePage;
