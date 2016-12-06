import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let sessionItems;

    if (this.props.loggedIn) {

    } else {
      sessionItems = [<li className='header-nav-item'>
          <Link to={`/sign-up`}>Sign Up</Link></li>,
        <li className='header-nav-item'>
          <Link to={`/log-in`}>Log In</Link></li>]; 
    }

    return (
      <section className='homepage-container'>
        <header className='header'>
          <nav className='header-nav'>
            <ul className='header-items'>
              <li className='header-nav-item-logo'>EventNite</li>
              <li className='header-nav-item'>Browse Events</li>
              { sessionItems }
              <li className='header-nav-item'>Create Event</li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </section>
    );
  }
}

export default App;
