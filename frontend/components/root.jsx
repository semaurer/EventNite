import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './appContainer';
import HomePageContainer from './home_page/homePageContainer';
import EventCreateContainer from './events/event_create_container';
import EventShowContainer from './events/eventShowContainer';
import EventIndexContainer from './events/eventIndexContainer';
import EventUpdateContainer from './events/event_update_container';
import ManageEventsContainer from './events/manage_events_container';
import UserTicketContainer from './tickets/userTicketsContainer';
import UserSavedEventsContainer from './events/userSavedEventsContainer';


const Root = ({ store }) => {

  const _redirectIfloggedIn = (_, replace) => {
    if (store.getState().session.currentUser !== null) replace("/");
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ HomePageContainer } />
          <Route path="events" component={ EventIndexContainer } >
            <Route path="categories">
              <Route path=":categoryName">
                <Route path=":subCategoryName" />
              </Route>
            </Route>
          </Route>
          <Route path="events/new-event" component={ EventCreateContainer } />
          <Route path="events/:eventId" component={ EventShowContainer } />
          <Route path="events/:eventId/edit" component={ EventUpdateContainer } />
          <Route path="users/manage-events" component={ ManageEventsContainer } />
          <Route path="users/tickets" component={ UserTicketContainer } />
          <Route path="users/saved-events" component={ UserSavedEventsContainer } />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
