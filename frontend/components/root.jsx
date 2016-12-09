import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import HomePageContainer from './home_page/home_page_container';
import EventCreateContainer from './events/event_create_container';
import EventShowContainer from './events/event_show_container';


const Root = ({ store }) => {

  const _redirectIfloggedIn = (_, replace) => {
    if (store.getState().session.currentUser !== null) replace("/");
  }
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ HomePageContainer } />
          <Route path="events/new-event" component={ EventCreateContainer } />
          <Route path="events/:eventId" component={ EventShowContainer } />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;



// <IndexRoute component={ HomeContinaer } />
// <Route path='login' component={ Lign}




// <Route path="log-in"
//   component={ SessionModalContainer }
//   onEnter={ _redirectIfloggedIn } />
// <Route path="sign-up"
//   component={ SessionModalContainer }
//   onEnter={ _redirectIfloggedIn } />
