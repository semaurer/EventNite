import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import HomePageContainer from './home_page/home_page_container';
import EventCreateContainer from './events/event_create_container';
import EventShowContainer from './events/event_show_container';
import EventIndexContainer from './events/event_index_container';
import ManageEventsContainer from './events/manage_events_container';


const Root = ({ store }) => {

  const _redirectIfloggedIn = (_, replace) => {
    if (store.getState().session.currentUser !== null) replace("/");
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ HomePageContainer } />
          <Route path="events" component ={ EventIndexContainer } />
          <Route path="events/new-event" component={ EventCreateContainer } />
          <Route path="events/:eventId" component={ EventShowContainer } />
          <Route path="users/manage-events" component={ ManageEventsContainer } />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
