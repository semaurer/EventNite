import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ AppContainer }/>

    </Router>
  </Provider>
);

export default Root;



// <IndexRoute component={ HomeContinaer } />
// <Route path='login' component={ Lign}
