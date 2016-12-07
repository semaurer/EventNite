import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import sessionModal from './session/session_modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false }

    this.loggedInEls = this.loggedInEls.bind(this);
    this.loggedOutEls = this.loggedOutEls.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.openModal.bind(this);
  }
  
  openModal() {
    this.setState({ modalOpen: true })
  }

  closeModal() {
    debugger
    this.setState({ modalOpen: false })
  }

  loggedInEls () {
    return (
      [
        <li key="312" className='header-nav-item'>
          { this.props.currentUser.fname }</li>,
        <dropdown className="profile-dropdown">
          <li key="313" className="prof-dropdown-b">Tickets 0</li>
          <li key="314" className="prof-dropdown-b">Saved 0</li>
          <li key="315" className="prof-dropdown-b">Managed Events</li>
          <li key="316" className='header-nav-item'>
            <button onClick={ this.props.logOut }></button></li>
        </dropdown>
      ]
    )
  }

  loggedOutEls () {
    return (
      [
        <li onClick={ this.openModal } key="321" className='header-nav-item'>
          <div>Sign Up</div>
        </li>,
        <li onClick={ this.openModal } key="322" className='header-nav-item'>
          <div>Log In</div>
        </li>
      ]
    )
  }

  render () {
    let sessionItems;

    if (this.props.loggedIn) {
      sessionItems = this.loggedInEls();
    } else {
      sessionItems = this.loggedOutEls();
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

        <Modal contentLabel="" isOpen={ this.state.modalOpen }
          onRequestClose={ () => { this.closeModal } }>
        </Modal>


        {this.props.children}
      </section>
    );
  }
}

export default App;
