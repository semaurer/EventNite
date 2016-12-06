import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let sessionItems;

    if (this.props.loggedIn) {
      sessionItems = [
        <li key="312" className='header-nav-item'>
          { this.props.currentUser.fname }</li>,
        <dropdown className="profile-dropdown">
          <li key="313" className="prof-dropdown-b">Tickets 0</li>
          <li key="314" className="prof-dropdown-b">Saved 0</li>
          <li key="315" className="prof-dropdown-b">Managed Events</li>
          <li key="316" className='header-nav-item'>
            <button onClick={ this.props.logOut }></button></li>
        </dropdown>
        ];
    } else {
      sessionItems = [
        <li key="321" className='header-nav-item'>
          <Link to={`/sign-up`}>Sign Up</Link></li>,
        <li key="322" className='header-nav-item'>
          <Link to={`/log-in`}>Log In</Link></li>
        ];
    }

    return (
      <section className='homepage-container group'>
        <header className='header-main'>
          <nav className='header-nav'>
            <h2 className='header-nav-item-logo'>EventNite</h2>
            <ul className='header-items'>
              <li className='header-nav-item'>Browse Events</li>
              { sessionItems }
              <li className='header-nav-item-c'>Create Event</li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </section>
    );
  }
}

export default App;
